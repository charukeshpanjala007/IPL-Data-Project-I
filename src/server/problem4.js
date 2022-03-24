const fs = require('fs');
const { matchData, deliveriesData } = require("./ipl.js")

//Problem4: Top 10 economical bowlers in the year 2015
const bowlersDetails = matchData.reduce((result, currentValue) => {
    const { id } = currentValue
    if (currentValue.season === "2015") {
        deliveriesData.forEach((eachItem) => {
            const { bowler, total_runs } = eachItem
            if (eachItem.match_id === id) {
                if (result[bowler]) {
                    result[bowler]["balls"] += 1
                    result[bowler]["total"] += parseInt(total_runs)
                } else {
                    result[bowler] = { balls: 1, total: parseInt(total_runs) }
                }
            }
        })
    }
    return result
}, {})

let top10EconomicalBowlersIn2015 = []
Object.keys(bowlersDetails).forEach(eachItem => {
    const overs = bowlersDetails[eachItem]["balls"] / 6
    const economy = (bowlersDetails[eachItem]["total"] / overs).toFixed(2)
    const name = eachItem
    top10EconomicalBowlersIn2015.push({ name, economy })
})
top10EconomicalBowlersIn2015 = top10EconomicalBowlersIn2015.sort((a, b) => (a.economy - b.economy)).slice(0, 10)

const jsonData = JSON.stringify(top10EconomicalBowlersIn2015)
fs.writeFile('src/public/output/top10EconomicalBowlersIn2015.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
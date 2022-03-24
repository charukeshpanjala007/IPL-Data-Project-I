const fs = require("fs")
const { deliveriesData } = require("./ipl.js")
//Problem 9 : Find the bowler with the best economy in super overs

const bowlersRunsAndBallsInSuperOvers = deliveriesData.reduce((result, currentValue) => {
    const { is_super_over, bowler, total_runs } = currentValue
    if (is_super_over !== "0") {
        if (result[bowler]) {
            result[bowler]["runs"] += parseInt(total_runs)
            result[bowler]["balls"] += 1
        } else {
            result[bowler] = { runs: parseInt(total_runs), balls: 1 }
        }
    }
    return result
}, {})

const bowlersEconomyInSuperOvers = Object.keys(bowlersRunsAndBallsInSuperOvers).reduce((result, currentValue) => {
    const bowlerData = bowlersRunsAndBallsInSuperOvers[currentValue]
    const { runs, balls } = bowlerData
    const economy = (runs / (balls / 6)).toFixed(2)
    result[currentValue] = { economy }
    return result
}, {})
const bestEconomy = Math.min(...Object.values(bowlersEconomyInSuperOvers).map(eachItem => {
    return eachItem["economy"]
}))

const bowlerWithBestEconomyInSuperOvers = Object.keys(bowlersEconomyInSuperOvers).find(eachValue => (bowlersEconomyInSuperOvers[eachValue]["economy"] == bestEconomy))

const jsonData = JSON.stringify(bowlerWithBestEconomyInSuperOvers)
fs.writeFile('src/public/output/bowlerWithBestEconomyInSuperOvers.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
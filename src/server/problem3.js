const fs = require('fs');
const { matchData, deliveriesData } = require("./ipl.js")

//Problem3: Find the extra runs conceded per team in the year 2016.

const findExtraRunsPerTeam = matchData.reduce((result, currentValue) => {
    const { id } = currentValue
    if (currentValue.season === "2016") {
        deliveriesData.forEach((eachItem) => {
            if (eachItem.match_id === id) {
                const { bowling_team, extra_runs } = eachItem
                if (result[bowling_team]) {
                    result[bowling_team] += parseInt(extra_runs)
                } else {
                    result[bowling_team] = parseInt(extra_runs)
                }
            }
        })
    }
    return result
}, {})

const jsonData = JSON.stringify(findExtraRunsPerTeam)
fs.writeFile('src/public/output/findExtraRunsPerTeamIn2016.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
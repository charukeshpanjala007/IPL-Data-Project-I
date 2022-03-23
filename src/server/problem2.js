const fs = require('fs');
const { matchData, deliveriesData } = require("./ipl.js")

//Problem2: Number of matches won per team per year in IPL.
const findNumberOfMatchesPlayedPerYear = matchData.reduce((result, currentValue) => {
    let { season,winner  } = currentValue
    if (result[season]) {
        if(result[season][winner] && result[season][winner]!=""){
            result[season][winner] += 1
        }else{
            result[season][winner] = 1
        }
    } else {
        result[season] = {}
        result[season][winner] = 1
    }
    return result
}, {})


const jsonData = JSON.stringify(findNumberOfMatchesPlayedPerYear)
fs.writeFile('src/public/output/matchesWonPerTeamPerYear.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
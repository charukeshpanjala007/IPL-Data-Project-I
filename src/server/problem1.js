const fs = require('fs');
const { matchData } = require("./ipl.js")


//Problem1: Find number of matches played per year for all the years in IPL.
const findNumberOfMatchesPlayedPerYear = matchData.reduce((result, currentValue) => {
    let { season } = currentValue
    if (result[season]) {
        result[season] += 1
    } else {
        result[season] = 1
    }
    return result
}, {})

const jsonData = JSON.stringify(findNumberOfMatchesPlayedPerYear)
fs.writeFile('src/public/output/matchesPerYear.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
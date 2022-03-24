const fs = require('fs');
const { matchData, deliveriesData } = require("./ipl.js")

//Problem 7: Find the strike rate of a batsman for each season
const getDetailsOfEachMatch = (id, seasonData) => {
    deliveriesData.reduce((result, eachValue) => {
        const { match_id, batsman, wide_runs, bye_runs, legbye_runs, batsman_runs } = eachValue
        if (match_id === id && wide_runs === "0" && bye_runs === "0" && legbye_runs === "0") {
            if (result[batsman]) {
                result[batsman]["runs"] += parseInt(batsman_runs)
                result[batsman]["ballsFaced"] += 1
            } else {
                result[batsman] = { runs: parseInt(batsman_runs), ballsFaced: 1 }
            }
        }
        return result
    }, seasonData)
    return seasonData
}

const batsmanDetailsSeasonWise = matchData.reduce((result, eachValue) => {
    const { season, id } = eachValue
    if (result[season]) {
        let seasonData = result[season]
        result[season] = getDetailsOfEachMatch(id, seasonData)

    } else {
        let seasonData = {}
        let output = getDetailsOfEachMatch(id, {})
        result[season] = output
    }
    return result
}, {})

const getStikeRateOfEveryPlayer = seasonwiseData => {
    return Object.keys(seasonwiseData).reduce((result, currentValue) => {
        const { runs, ballsFaced } = seasonwiseData[currentValue]
        result[currentValue] = { strikeRate: (runs / ballsFaced * 100).toFixed(2) }
        return result
    }, {})
}

const strikeRateofBatsmenEachSeason = Object.keys(batsmanDetailsSeasonWise).reduce((result, currentValue) => {
    const seasonwiseData = batsmanDetailsSeasonWise[currentValue]
    result[currentValue] = getStikeRateOfEveryPlayer(seasonwiseData)
    return result
}, {})



const jsonData = JSON.stringify(strikeRateofBatsmenEachSeason)
fs.writeFile('src/public/output/strikeRateofBatsmenEachSeason.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
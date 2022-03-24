const fs = require('fs');
const { matchData } = require("./ipl.js")

//Problem6: Find a player who has won the highest number of Player of the Match awards for each season
const playerOfMatchDetailsOfEverySeason = matchData.reduce((result, currentValue) => {
    const { season, player_of_match } = currentValue
    if (result[season]) {
        if (result[season][player_of_match]) {
            result[season][player_of_match] += 1
        } else {
            result[season][player_of_match] = 1
        }
    } else {
        result[season] = {}
    }
    return result
}, {})


const highestNumberOfPlayerOfMatchForEachSeason = Object.values(playerOfMatchDetailsOfEverySeason).reduce((result, currentValue) => {
    let maxValue = Math.max(...Object.values(currentValue))
    let [season] = Object.keys(playerOfMatchDetailsOfEverySeason).filter(eachItem => {
        if(playerOfMatchDetailsOfEverySeason[eachItem] === currentValue){
            return true
        }
    })
    Object.keys(currentValue).forEach(eachItem=>{
        if(currentValue[eachItem]=== maxValue){
            if(result[season]){
                result[season][eachItem] = maxValue
            }else{
                result[season]={}
                result[season][eachItem] = maxValue
             }
        }
    })
    return result
}, {})

const jsonData = JSON.stringify(highestNumberOfPlayerOfMatchForEachSeason)
fs.writeFile('src/public/output/highestNumberOfPlayerOfMatchForEachSeason.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
const fs = require('fs');
const { matchData } = require("./ipl.js")

//Problem6: Find a player who has won the highest number of Player of the Match awards for each season
// const playerOfMatchDetailsOfEverySeason = matchData.reduce((result, currentValue) => {
//     const { season, player_of_match } = currentValue
//     if (result[season]) {
//         if (result[season][player_of_match]) {
//             result[season][player_of_match] += 1
//         } else {
//             result[season][player_of_match] = 1
//         }
//     } else {
//         result[season] = {}
//     }
//     return result
// }, {})


// const highestNumberOfPlayerOfMatchForEachSeason = 
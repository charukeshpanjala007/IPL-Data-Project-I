const fs = require('fs');
const { deliveriesData } = require("./ipl.js")

//Problem8: Find the highest number of times one player has been dismissed by another player

const playerDismissalData = deliveriesData.reduce((result, currentValue) => {
    const { bowler, player_dismissed } = currentValue
    if (bowler !== "" && player_dismissed !== "") {
        let bowlerAndDismisssedBatsmen = bowler + "-" + player_dismissed
        if (result[bowlerAndDismisssedBatsmen]) {
            result[bowlerAndDismisssedBatsmen] += 1
        } else {
            result[bowlerAndDismisssedBatsmen] = 1
        }
    }
    return result
}, {})


const maxTimesPlayerDismissedBySamePlayer = Math.max(...Object.values(playerDismissalData))

const jsonData = JSON.stringify(maxTimesPlayerDismissedBySamePlayer)
fs.writeFile('src/public/output/highestTimesPlayerDismissedBySamePlayer.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
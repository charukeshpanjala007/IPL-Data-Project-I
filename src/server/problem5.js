const fs = require('fs');
const { matchData } = require("./ipl.js")

//Problem5: Find the number of times each team won the toss and also won the match.
const findTossAndWinTeamFuction = (currentValue) => {
    let { team1, team2, toss_winner, winner } = currentValue
    let tossAndWinTeam
    if (team1 === toss_winner && team1 === winner) {
        tossAndWinTeam = team1
        return tossAndWinTeam
    }
    if (team2 === toss_winner && team2 === winner) {
        tossAndWinTeam = team2
        return tossAndWinTeam
    }


}

const tossAndMatchWinTeams = matchData.reduce((output, currentValue) => {
    let tossAndWinTeam = findTossAndWinTeamFuction(currentValue)
    if (tossAndWinTeam) {
        if (output[tossAndWinTeam]) {
            output[tossAndWinTeam] += 1
        } else {
            output[tossAndWinTeam] = 1
        }
    }
    return output
}, {})


const jsonData = JSON.stringify(tossAndMatchWinTeams)
fs.writeFile('src/public/output/tossAndMatchWinTeams.json', jsonData, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})
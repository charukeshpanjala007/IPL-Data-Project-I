const data = require("../public/output/matchesWonPerTeamPerYear.json")

const years = Object.keys(data)

let teams = []
years.forEach(eachItem => {
    let eachYearData = data[eachItem]
    let eachYearteams = Object.keys(eachYearData)
    teams.push(...eachYearteams)
})
teams = [...new Set(teams)]
let teamPointsObj = years.reduce((result, currentValue) => {
    let eachYearData = data[currentValue]
    teams.forEach(eachValue => {
        let value = eachYearData[eachValue] ? eachYearData[eachValue] : null
        if (result[eachValue]) {
            result[eachValue] = [...result[eachValue], value]
        } else {
            result[eachValue] = [value]
        }
    })
    return result
}, {})
let finalArray = Object.keys(teamPointsObj).map(eachValue=>{
    return {name: eachValue, data: teamPointsObj[eachValue]}
})

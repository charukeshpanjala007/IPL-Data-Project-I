const Highcharts = require("highcharts")
const getData = require("./fetchRequest.js")

const initializeChart = (data) => {
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
            if (eachValue !== "") {
                let value = eachYearData[eachValue] ? eachYearData[eachValue] : null
                if (result[eachValue]) {
                    result[eachValue] = [...result[eachValue], value]
                } else {
                    result[eachValue] = [value]
                }
            }
        })
        return result
    }, {})
    let finalArray = Object.keys(teamPointsObj).map(eachValue => {
        return { name: eachValue, data: teamPointsObj[eachValue] }
    })

    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Matches won per team per year.'
        },
        subtitle: {
            text: 'Source: Kaddle.com'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches Count'
            }
        },
        
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: finalArray
    });
}

getData("../public/output/matchesWonPerTeamPerYear.json", initializeChart)
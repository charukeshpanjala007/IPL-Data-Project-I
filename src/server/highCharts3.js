const Highcharts = require("highcharts")
const getData = require("./fetchRequest.js")

const initializeChart = (data) => {
    const teams = Object.keys(data)
    const extraRuns = Object.values(data)
    Highcharts.chart('container3', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Extra runs conceded by each team in 2016'
        },
        subtitle: {
            text: 'Source: Kaddle.com'
        },
        xAxis: {
            categories: teams,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Extra runs',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'runs'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Extra runs',
            data: extraRuns
        }]
    });
}

getData("../public/output/findExtraRunsPerTeamIn2016.json", initializeChart)

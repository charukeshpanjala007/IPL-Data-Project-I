const Highcharts = require("highcharts")
const getData = require("./fetchRequest.js")

const initializeChart = (data) => {
    const years = Object.keys(data)
    const matches = Object.values(data)
    Highcharts.chart('container', {
        title: {
            text: "Matches played per year for all the years in IPL"
        },
        subtitle: {
            text: 'Source: Kaddle.com'
        },
        yAxis: {
            title: {
                text: 'Number of Matches'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: `Range: ${years[0]} to ${years[-1]}`
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2008
            }
        },

        series: [{
            name: 'Matches',
            data: matches
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

getData("../public/output/matchesPerYear.json", initializeChart)

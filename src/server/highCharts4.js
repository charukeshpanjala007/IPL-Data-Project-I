const Highcharts = require("highcharts")
const getData = require("./fetchRequest.js")

const initializeChart = (data) => {
    let bowlers = []
    let bowlersEconomy = []
    data.forEach(element => {
        const { name, economy } = element
        bowlers.push(name)
        bowlersEconomy.push(parseFloat(economy))
    });
    Highcharts.chart('container4', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Top 10 Economical Bowlers in 2015'
        },
        subtitle: {
            text: 'Source: Kaddle.com'
        },
        xAxis: {
            categories: bowlers,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Economy in series',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'Economy'
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
            name: 'Economy',
            data: bowlersEconomy
        }]
    });
}

getData("../public/output/top10EconomicalBowlersIn2015.json", initializeChart)

const fs = require('fs');
const path = require("path");
const csvjson = require('csvjson');
const matchDataSting = fs.readFileSync(path.join(__dirname, "../data/matches.csv"), { encoding: 'utf8' });
const deliveriesDataString = fs.readFileSync(path.join(__dirname, "../data/deliveries.csv"), { encoding: 'utf8' });
const options = {
    delimiter: ',',
    quote: '"'
};

const matchData = csvjson.toObject(matchDataSting, options)
const deliveriesData = csvjson.toObject(deliveriesDataString, options)


module.exports = {matchData, deliveriesData}
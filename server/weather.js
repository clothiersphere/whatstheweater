const axios = require('axios');
const apiKeys = require('../src/constants/apiKeys');

function accuweather(req, res, next) {
  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/347629?apikey=${apiKeys.ACCU_KEY}&details=true`;
  axios.get(url).then(response => response.data.DailyForecasts)
  .then((data) => {
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function wunderground(req, res, next) {
  // const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/conditions/q/CA/San_Francisco.json`;
  const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/forecast10day/q/37.7787,-122.4212.json`;
  axios.get(url).then(response => response.data.forecast.simpleforecast)
  .then((data) => {
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function darksky(req, res, next) {
  const url= `https://api.darksky.net/forecast/${apiKeys.DSKY_KEY}/37.7787,-122.4212`;
  axios.get(url).then(response => response.data.daily.data)
  .then((data) => {
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function weatherbit(req, res, next) {
  const url= `https://api.weatherbit.io/v1.0/forecast/3hourly?lat=37.7787&lon=-122.4212&days=5&units=I&key=${apiKeys.WBIT_KEY}`;
  axios.get(url).then(response => response.data.data)
  .then((data) => {
    console.log(data, 'WBITDATA')
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

  module.exports = {
    accuweather,
    wunderground,
    darksky,
    weatherbit
  }
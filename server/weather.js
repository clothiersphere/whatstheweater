const axios = require('axios');
var moment = require('moment');
const apiKeys = require('../src/constants/apiKeys');


const lat = 0; 
const lng = 0; 

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
  const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/forecast10day/q/37.7787,-122.4212.json`;
  // const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/forecast10day/q/autoip.json`;
  axios.get(url).then(response => response.data.forecast.simpleforecast)
  .then((data) => {
    res.send(parseWug(data));
    // res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function parseWug(data) {
  var store = [];
  for(var i = 0; i< 5; i++) {

    var date = moment.unix(data.forecastday[i].date.epoch);
    var dowN = date.day();
    var dowS = date.format('ddd DD');

    store.push({
      conditions: data.forecastday[i].conditions,
      temp_H: data.forecastday[i].high.fahrenheit,
      temp_L: data.forecastday[i].low.fahrenheit,
      precip: data.forecastday[i].pop * .0100,
      humid: data.forecastday[i].avehumidity,
      dow: dowS
    })
  }
  return store;
}

function darksky(req, res, next) {
  const url= `https://api.darksky.net/forecast/${apiKeys.DSKY_KEY}/37.7787,-122.4212`;
  axios.get(url).then(response => response.data.daily.data)
  .then((data) => {
    res.send(parseDsky(data));
    // res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function parseDsky(data) {
  var store = [];
  for(var i = 0; i< 5; i++) {
    var date = moment.unix(data[i].time);

    var dowN = date.day();
    var dowS = date.format('ddd DD');

    store.push({
      conditions: data[i].summary,
      temp_H: data[i].temperatureMax,
      temp_L: data[i].temperatureMin,
      precip: data[i].precipProbability,
      humid: data[i].humidity * 100,
      windSpeed: data[i].windSpeed,
      dow: dowS
    })
  }
  return store;
}

function weatherbit(req, res, next) {
  const url= `https://api.weatherbit.io/v1.0/forecast/3hourly?lat=37.7787&lon=-122.4212&days=5&units=I&key=${apiKeys.WBIT_KEY}`;
  axios.get(url).then(response => response.data.data)
  .then((data) => {
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function apixu(req, res, next) {
  const url = `http://api.apixu.com/v1/forecast.json?key=${apiKeys.APIXU_KEY}&q=37.7787,-122.4212&days=5`;
  // const url = `http://api.apixu.com/v1/forecast.json?key=${apiKeys.APIXU_KEY}&q=auto:ip&days=5`;
  axios.get(url).then(response => response.data.forecast.forecastday)
  .then((data => {
    // res.send(data);
    res.send(parseApixu(data));
    next();
  }))
}

function parseApixu(data) {
  var store = [];
  for(var i = 0; i< 5; i++) {
    var date = moment(data[i].date);
    var dowN = date.day();
    var dowS = date.format('ddd DD');

    store.push({
      conditions: data[i].day.condition.text,
      temp_H: data[i].day.maxtemp_f,
      temp_L: data[i].day.mintemp_f,
      humid: data[i].day.avghumidity,
      totalPrecipitation: data[i].day.totalprecip_in,
      maxwind_mph: data[i].day.maxwind_mph,
      dow: dowS
    })
  }
  return store;
}

  module.exports = {
    accuweather,
    wunderground,
    darksky,
    weatherbit,
    apixu
  }
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

// function parseAccu(data) {

// }

function wunderground(req, res, next) {
  // const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/conditions/q/CA/San_Francisco.json`;
  const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/forecast10day/q/37.7787,-122.4212.json`;
  axios.get(url).then(response => response.data.forecast.simpleforecast)
  .then((data) => {
    console.log(parseWug(data));
    res.send(parseWug(data));
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function parseWug(data) {
  var store = [];
  for(var i = 0; i< 5; i++) {
    store.push({
      conditions: data.forecastday[i].conditions,
      temp_H: data.forecastday[i].high.fahrenheit,
      temp_L: data.forecastday[i].low.fahrenheit,
      precip: data.forecastday[i].pop * .0100,
      humid: data.forecastday[i].avehumidity
    })
  }
  return store;
}

function darksky(req, res, next) {
  const url= `https://api.darksky.net/forecast/${apiKeys.DSKY_KEY}/37.7787,-122.4212`;
  axios.get(url).then(response => response.data.daily.data)
  .then((data) => {
    res.send(parseDsky(data));
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function parseDsky(data) {
  var store = [];
  for(var i = 0; i< 5; i++) {
    store.push({
      conditions: data[i].summary,
      temp_H: data[i].temperatureMax,
      temp_L: data[i].temperatureMin,
      precip: data[i].precipProbability,
      humid: data[i].humidity * 100
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
  const url = `http://api.apixu.com/v1/forecast.json?key=${apiKeys.APIXU_KEY}&q=37.7787,-122.421&days=5`;
  axios.get(url).then(response => response.data.forecast.forecastday)
  .then((data => {
    console.log(data)
    res.send(parseApixu(data));
    next();
  }))
}

function parseApixu(data) {
  var store = [];
  for(var i = 0; i< 5; i++) {
    store.push({
      conditions: data[i].day.condition.text,
      temp_H: data[i].day.maxtemp_f,
      temp_L: data[i].day.mintemp_f,
      humid: data[i].day.avghumidity,
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
const axios = require('axios');
const apiKeys = require('../src/constants/apiKeys');

function accuweather(req, res, next) {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/347629?apikey=${apiKeys.ACCU_KEY}&details=true`;
  axios.get(url).then(response => response.data)
  .then((data) => {
    res.send(data);
    next();
  })
  .catch((error) => {
    console.log('ERROR:', error);
  })
}

function wunderground(req, res, next) {
  const url = `http://api.wunderground.com/api/${apiKeys.WUG_KEY}/conditions/q/CA/San_Francisco.json`;
  axios.get(url).then(response => response.data.current_observation)
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
  axios.get(url).then(response => response.data)
  .then((data) => {
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
    darksky
  }
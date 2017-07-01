const axios = require('axios');
const ACCU_KEY = require('../src/constants/apiKeys');

function accuweather(req, res, next) {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/347629?apikey='+ACCU_KEY.ACCU_KEY+'&details=true';
    return axios.get(url).then(response => response.data)
    .then((data) => {
      console.log(data, "DATASERVER")
      res.send(data);
      next();
    })
    .catch((error) => {
      console.log('ERROR:', error);
    })
  }

  module.exports = {
    accuweather
  }
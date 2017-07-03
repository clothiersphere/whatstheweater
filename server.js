const express = require('express');
const weather = require('./server/weather');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/jerk', function (req, res) {
  res.send('Hello JERK!')
})

app.get('/api/accuweather', weather.accuweather);
app.get('/api/wunderground', weather.wunderground);
app.get('/api/darksky', weather.darksky);
app.get('/api/weatherbit', weather.weatherbit);

app.listen(1234, () => {
  console.log('%s listening at %s', app.name, app.url);
});


module.exports = 'api';


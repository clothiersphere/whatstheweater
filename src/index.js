import React from 'react';
import ReactDOM from 'react-dom';
import WeatherFeed from './components/WeatherFeed'

const weatherFeed = [
  {
    high: '89',
    low: '22'
  },
  {
    high: '95',
    low: '22'
  }
]

ReactDOM.render(
  <WeatherFeed weatherFeed={weatherFeed} />,
  document.getElementById('app')
);

module.hot.accept();
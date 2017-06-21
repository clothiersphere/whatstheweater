import React from 'react';
import ReactDOM from 'react-dom';

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
  <div>
    {
      weatherFeed.map((weatherInfo, key) => {
        return <div className="weatherFeed" key={key}>high: {weatherInfo.high} low:{weatherInfo.low}</div>
      })
    } 
  </div>,
  document.getElementById('app')
);

module.hot.accept();
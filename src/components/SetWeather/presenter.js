import React from 'react';

function SetWeather({ weather = [] }) {
  return (
    <div>
      {
        weather.map((weatherInfo, key) => {
          return <div className="weatherFeed" key={key}>high: {weatherInfo.high} low:{weatherInfo.low}</div>
        })
      } 
    </div>
  );
}

export default SetWeather;

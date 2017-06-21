import React from 'react';

function WeatherFeed({ weatherFeed = [] }) {
  return (
    <div>
      {
        weatherFeed.map((weatherInfo, key) => {
          return <div className="weatherFeed" key={key}>high: {weatherInfo.high} low:{weatherInfo.low}</div>
        })
      } 
    </div>
  );
}

export default WeatherFeed;
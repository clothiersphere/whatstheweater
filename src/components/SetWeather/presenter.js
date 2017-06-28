import React from 'react';
import WundergroundFeed from './WundergroundFeed';

function SetWeather({ wugInfo, weather = [], wugReq }) {
  console.log(wugInfo, '/wugInfo')
  return (
    <div>
      <div>
        <button onClick={wugReq} type="button">GO</button>
      </div>
      <br/>
      <div>
      {
        weather.map((weatherInfo, key) => {
          return <div className="weatherFeed" key={key}>high: {weatherInfo.high ||  5}</div>
        })
      }
      </div>
      <div>
        <WundergroundFeed weather={wugInfo} />
      </div>
    </div>
  );
}

export default SetWeather;

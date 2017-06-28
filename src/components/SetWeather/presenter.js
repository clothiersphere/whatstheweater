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
        <WundergroundFeed weather={wugInfo} />
      </div>
    </div>
  );
}

export default SetWeather;

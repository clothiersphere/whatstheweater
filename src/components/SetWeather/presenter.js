import React from 'react';
import WundergroundFeed from './WundergroundFeed';
import AccuweatherFeed from './AccuweatherFeed';
import OpenweatherFeed from './OpenweatherFeed';

function SetWeather({ wugInfo, accuInfo, opwInfo, wugReq }) {
  console.log(wugInfo, '/wugInfo')
  return (
    <div>
      <div>
        <button onClick={wugReq} type="button">GO</button>
      </div>
      <br/>
      <div className="wugFeed">
        <WundergroundFeed weather={wugInfo} />
      </div>
      <div className="accuFeed">
        <AccuweatherFeed weather={accuInfo} />
      </div>
      <div className="opwFeed">
        <OpenweatherFeed weather={opwInfo} />
      </div>
    </div>
  );
}

export default SetWeather;
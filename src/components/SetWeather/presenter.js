import React from 'react';
import WundergroundFeed from './WundergroundFeed';
import AccuweatherFeed from './AccuweatherFeed';
import DarkskyFeed from './DarkskyFeed';
import WeatherbitFeed from './WeatherbitFeed';

function SetWeather({ wbitInfo, dskyInfo, wugInfo, accuInfo, opwInfo, wugReq }) {
  return (
    <div>
      <div>
        <button onClick={wugReq} type="button">GO</button>
      </div>
      <div className="wugFeed">
        <WundergroundFeed weather={wugInfo} />
      </div>
      <br/>
   
    </div>
  );
}

export default SetWeather;

// <div className="dskyFeed">
//   <DarkskyFeed weather={dskyInfo} />
// </div>
// <div className="accuFeed">
//   <AccuweatherFeed weather={accuInfo} />
// </div>
//  <div className="wbitFeed">
//   <WeatherbitFeed weather={wbitInfo} />
// </div>
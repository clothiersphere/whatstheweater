import React from 'react';
import WundergroundFeed from './WundergroundFeed';
import AccuweatherFeed from './AccuweatherFeed';
import DarkskyFeed from './DarkskyFeed';
import WeatherbitFeed from './WeatherbitFeed';
import ApixuFeed from './Apixufeed';
import MainChart from './MainChart';
function SetWeather({ wbitInfo, apixuInfo, dskyInfo, wugInfo, accuInfo, wugReq }) {
  return (
    <div>
      <div>
        <button onClick={wugReq} type="button">GO</button>
      </div>
      <div className="wugFeed">
        <WundergroundFeed weather={wugInfo} />
      </div>
      <div>
        <MainChart 
          wugInfo = {wugInfo}
          dskyInfo = {dskyInfo}
          apixuInfo = {apixuInfo}
        />
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
// <div className="apixuFeed">
//   <ApixuFeed weather={apixuInfo} />
// </div>
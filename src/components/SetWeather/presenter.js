import React from 'react';
import WundergroundFeed from './WundergroundFeed';
import AccuweatherFeed from './AccuweatherFeed';
import DarkskyFeed from './DarkskyFeed';
import WeatherbitFeed from './WeatherbitFeed';
import ApixuFeed from './Apixufeed';
import MainChart from './MainChart';
import ZipInput from './ZipInput';

function SetWeather({ wbitInfo, apixuInfo, dskyInfo, wugInfo, accuInfo, wugReq }) {
  return (
    <div>
      <div className="wugFeed">
        <WundergroundFeed weather={wugInfo} />
      </div>
      <div className="apixuFeed">
        <ApixuFeed weather={apixuInfo} />
      </div>
      <div className="dskyFeed">
        <DarkskyFeed weather={dskyInfo} />
      </div>
      <div className="mainChart">
        <MainChart 
          wugInfo = {wugInfo}
          dskyInfo = {dskyInfo}
          apixuInfo = {apixuInfo}
        />
      </div>
      <div className="zipInput">
        <ZipInput/>
      </div>
      <br/>
   
    </div>
  );
}

export default SetWeather;
// <div className="accuFeed">
//   <AccuweatherFeed weather={accuInfo} />
// </div>

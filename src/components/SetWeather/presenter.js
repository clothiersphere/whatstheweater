import React from 'react';

function SetWeather({ weather = [], wugReq }) {
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
    </div>
  );
}

export default SetWeather;

import React from 'react';

var DarkskyFeed = function(props) {
  return (
    <div>
    {
      props.weather.map((weather, key) => {
        return <div className="dskyInfo" key={key}> 
          DarkSky
          <br/>
          UV: {weather.currently.uvIndex}
          <br/>
          TEMP: {weather.currently.temperature}
          <br/>
          PRECIP: {weather.currently.precipProbability}
          <br/>
          Lat: {weather.latitude}
          <br/>
          Lng: {weather.longitude}

        </div>
      })
    }
    </div>
  )
}

export default DarkskyFeed;
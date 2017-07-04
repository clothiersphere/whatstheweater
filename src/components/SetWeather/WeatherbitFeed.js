import React from 'react';

var WeatherbitFeed = function(props) {
  return (
    <div>
    {
      props.weather.map((weather, key) => {
        console.log(weather.data, "WEATHERDATA")
        return <div className="wbitInfo" key={key}> 
        Weatherbit
          <br/>
          UV: {weather.data[0].uv}
          <br/>
          TEMP: {weather.data[0].temp}
          <br/>
          PRECIP: {weather.data[0].precip || 0}
          <br/>
          Lat: {weather.data[0].lat}
          <br/>
          Lng: {weather.data[0].lon}
        </div>
      })
    }
    </div>
  )
}

export default WeatherbitFeed;
import React from 'react';

var WeatherbitFeed = function(props) {
  return (
    <div>
    Weatherbit
    {
      props.weather[0].map((weather, key) => {
        return <div className="wbitInfo" key={key}>
         TEMP: {weather.temp}
         PRECIP: {weather.pop * .01}
        </div>
      })
    }
    </div>
  )
}

export default WeatherbitFeed;
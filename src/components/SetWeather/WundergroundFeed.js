import React from 'react';

var WundergroundFeed = function(props) {
  if (props.weather[0]) {
    return (
      <div>
      {
        props.weather[0].forecastday.map((weather, key) => {
          return <div className="wugInfo" key={key}> 
          TEMP: HIGH:{weather.high.fahrenheit}, LOW:{weather.low.fahrenheit}
          PRECIP: {weather.pop * .0100}
          HUMID: {weather.avehumidity }
          </div>
        })
      }
      </div>
    )
  } else {
    return <div> loading </div>
  }
}

export default WundergroundFeed;
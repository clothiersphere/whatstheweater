import React from 'react';

var WundergroundFeed = function(props) {
  return (
    <div>
    Wunderground
    {
    props.weather[0].forecastday.map((weather, key) => {

      return <div className="wugInfo" key={key}> 
     
      Date:{weather.date.pretty}
      HIGH:{weather.high.fahrenheit}
      LOW:{weather.low.fahrenheit}
      </div>
    })
    }
    </div>
  )
}


export default WundergroundFeed;
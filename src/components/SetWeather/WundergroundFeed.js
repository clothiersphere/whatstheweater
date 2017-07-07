import React from 'react';

var WundergroundFeed = function(props) {
  if (props.weather[0]) {
    var wugFeed= [];

    for (var i = 0; i< 5; i++) {
      var weather = props.weather[0]
      wugFeed.push( 
        <div className="wugInfo" key={i}>
          HIGH:{weather.forecastday[i].high.fahrenheit}, LOW:{weather.forecastday[i].low.fahrenheit}
          PRECIP: {weather.forecastday[i].pop * .0100}
          HUMID: {weather.forecastday[i].avehumidity }
          <img src={weather.forecastday[i].icon_url}/>
        </div>
      ) 
    }
    return (
      <div>
        {wugFeed}
      </div>
    )
  } else {
    return <div> loading.. </div>
  }
}

export default WundergroundFeed;
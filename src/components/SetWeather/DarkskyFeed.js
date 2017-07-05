import React from 'react';

var DarkskyFeed = function(props) {
  console.log(props, "dskyfeedprops")
  if (props.weather[0]) {
    return (
    <div>
    Darksky
    {
      props.weather[0].map((weather, key) => {
        return <div className="dskyInfo" key={key}> 
          TEMP: HIGH: {weather.temperatureMax}, LOW: {weather.temperatureMin}
          PRECIP: {weather.precipProbability}
          HUMID: {weather.humidity}
        </div>
      })
    }
    </div>
  )
  } else {
    return <div> loading.. </div>
  }
}

export default DarkskyFeed;
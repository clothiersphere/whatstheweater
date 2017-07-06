import React from 'react';
// import Skycons from 'react-skycons';
import Skycons from 'skycons';



var DarkskyFeed = function(props) {
  if (props.weather[0]) {
    return (
      <div>
        Darksky
        {
          props.weather[0].map((weather, key) => {
            return <div className="dskyInfo" key={key}> 
              <canvas id={key} width='128' height='128'></canvas>
              CONDITIONS: {weather.summary} <Skycons color='white' icon={weather.icon.toUpperCase().replace(/-/g, '_')}/>
              HIGH: {weather.temperatureMax}, LOW: {weather.temperatureMin}
              PRECIP: {weather.precipProbability}
              HUMID: {weather.humidity * 100}
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
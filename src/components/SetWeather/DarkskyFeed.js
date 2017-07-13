import React from 'react';

var DarkskyFeed = function(props) {
  if (props.weather[0]) {
    return (
      <div>
      { 
        props.weather.map((weather, key) => {
          return <div className="dskyInfo" key={key}>
            high:{weather.temp_H}
            low:{weather.temp_L}
            humidity:{weather.humid} 
            precipitation:{weather.precip}
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
import React from 'react';

var WundergroundFeed = function(props) {
  if (props.weather[0]) {
    return (
      <div>
      { 
        props.weather.map((weather, key) => {
          return <div className="wugInfo" key={key}>
            conditions:{weather.conditions}
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

export default WundergroundFeed;
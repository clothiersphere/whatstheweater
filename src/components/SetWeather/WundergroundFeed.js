import React from 'react';

var WundergroundFeed = function(props) {
  if (props.weather[0]) {
    return (
      <div>
      { 
        props.weather.map((weather, key) => {
          return <div className="wugInfo" key={key}>
            <div>
              <img src={weather.icon}/>
            </div>
            <div> 
              high:{weather.temp_H}
            </div>
            <div>
              low:{weather.temp_L}
            </div>
            <div>
              humidity:{weather.humid} 
            </div>
            <div>
              precip:{weather.precip}
            </div>
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
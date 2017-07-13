import React from 'react';
import Skycons from 'react-skycons';



var DarkskyFeed = function(props) {
  

  if (props.weather[0]) {

    return (
      <div>
      { 
        props.weather.map((weather, key) => {
          return <div className="dskyInfo" key={key}>
            <div className="skyconIcon">
              <Skycons color='white' icon={weather.icon} autoplay={true}/>
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

export default DarkskyFeed;
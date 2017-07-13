import React from 'react';

var ApixuFeed = function(props) {
  if (props.weather[0]) {
  return (
    <div>
    {
      props.weather.map((weather,key) => {
        return <div className='apixuInfo' key={key}>
          {weather.conditions}
          high:{weather.temp_H}
          low:{weather.temp_L}
          humidity:{weather.humid} 
          totPrecip:{weather.totalPrecipitation}
        </div>
      })
    }
    </div>
  )
  } else {
    return <div> loading.. </div>
  }
}

export default ApixuFeed;
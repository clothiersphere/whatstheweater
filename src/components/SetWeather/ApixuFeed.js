import React from 'react';

var ApixuFeed = function(props) {
  if (props.weather[0]) {
  return (
    <div>
    {
      props.weather.map((weather,key) => {
        return <div className='apixuInfo' key={key}>
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
          totPrecip:{weather.totalPrecipitation}
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

export default ApixuFeed;
import React from 'react';

var ApixuFeed = function(props) {
  if (props.weather[0]) {
  return (
    <div>
    Apixu
    {
      props.weather.map((weather,key) => {
        return <div className='apixuInfo' key={key}>
          CONDITION:{weather.day.condition.text}<img src={weather.day.condition.icon}/>
          HIGH:{weather.day.maxtemp_f}, LOW: {weather.day.mintemp_f}
          HUMID: {weather.day.avghumidity}
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
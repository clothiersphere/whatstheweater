import React from 'react';

var ApixuFeed = function(props) {
  if (props.weather[0]) {
  return (
    <div>
    Apixu
    {
      props.weather.map((weather,key) => {
        return <div className='apixuInfo' key={key}>
          {weather.day.condition.text}
          HIGH:{weather.day.maxtemp_f}, LOW: {weather.day.mintemp_f}
          HUMID: {weather.day.avghumidity}
          <img src={weather.day.condition.icon}/>
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
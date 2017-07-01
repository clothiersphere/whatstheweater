import React from 'react';

var OpenweatherFeed = function(props) {
  console.log(props, "PROPS")
  return (
    <div>
    {
    props.weather.map((weather, key) => {
     return <div className="opwInfo" key={key}> 
      OpenWeather
      <br/>
      UV: 
      <br/>
      TEMP: { ((weather.main.temp - 273.15)*1.8)+ 32 }
      <br/>
      PRECIP:
    </div>
    })
    }
    </div>
  )
}


export default OpenweatherFeed;
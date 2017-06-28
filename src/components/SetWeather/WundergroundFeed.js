import React from 'react';

var WundergroundFeed = function(props) {
  console.log(props, "PROPS")
  return (
    <div>
    {
    props.weather.map((weather, key) => {
     return <div className="wugInfo" key={key}> 
     WUNDERGROUND
     <br/>
      UV: {weather.UV} 
      <br/>
      TEMP: {weather.temp_f} 
      <br/>
      PRECIP: {weather.precip_today_metric}
    </div>
    })
    }
    </div>
  )
}


export default WundergroundFeed;
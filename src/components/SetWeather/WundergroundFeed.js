import React from 'react';

var WundergroundFeed = function(props) {
  return (
    <div>
    {
    props.weather.map((weather, key) => {
     return <div className="wugInfo" key={key}> 
      Wunderground
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
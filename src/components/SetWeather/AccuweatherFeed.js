import React from 'react';

var AccuweatherFeed = (props) => {

  
    return (
      <div>
      {
      props.weather.map((weather, key) => {
       return <div className="accuInfo" key={key}>
         {console.log(weather)}
         Accuweather
         <br/>
         UV: {weather.UVIndex}
         <br/>
         TEMP: {weather.Temperature.Imperial.Value}
         <br/>
         PRECIP: {weather.PrecipitationSummary.Precipitation.Metric.Value}
       </div>
      })
      } 
      </div>
    )
}

export default AccuweatherFeed;

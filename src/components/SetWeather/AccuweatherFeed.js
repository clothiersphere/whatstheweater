import React from 'react';

var AccuweatherFeed = (props) => {
  
  var accuFeed =[];
  // var weather = props.weather
  // for (var i = 0; i< 5; i++) {
  //   accuFeed.push(
  //     <div className="accuInfo" key={i}>
  //       {weather.Day.ShortPhrase}
  //       HIGH:{weather.Temperature.Maximum.Value} LOW:{weather.Temperature.Minimum.Value}
  //       PRECIP: {weather.Day.PrecipitationProbability * .01}
  //       <img src={require(`../../../dist/img/accuIcon/0${weather.Day.Icon}.png`)}/>
  //     </div>
  //   )
  // }
  return (
    <div>
      {accuFeed}
    </div>
  )
}

export default AccuweatherFeed;


// for (var i = 0; i< 5; i++) {
//   wugFeed.push( 
//     <div className="wugInfo" key={i}>
//       {weather.forecastday[i].conditions}
//       HIGH:{weather.forecastday[i].high.fahrenheit}, LOW:{weather.forecastday[i].low.fahrenheit}
//       PRECIP: {weather.forecastday[i].pop * .0100}
//       HUMID: {weather.forecastday[i].avehumidity }
//       <img src={weather.forecastday[i].icon_url}/>
//     </div>
//   ) 
// }
import React from 'react';

var AccuweatherFeed = (props) => {
  return (
    <div>
    Accuweather
    {
      props.weather.map((weather, key) => {
        return <div className="accuInfo" key={key}>
          CONDITIONS:{weather.Day.ShortPhrase} <img src={require(`../../../dist/img/accuIcon/0${weather.Day.Icon}.png`)}/>
          HIGH:{weather.Temperature.Maximum.Value} LOW:{weather.Temperature.Minimum.Value}
          PRECIP: {weather.Day.PrecipitationProbability * .01}
        </div>
      })
    } 
    </div>
  )
}

export default AccuweatherFeed;

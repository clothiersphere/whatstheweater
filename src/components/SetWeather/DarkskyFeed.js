import React from 'react';
import Skycons from 'react-skycons';

var WeatherIcon = React.createClass({
  render: function () {
    return (
      <Skycons color="black" icon={this.props.icon} />
    );
  }
});

var DarkskyFeed = function(props) {
  console.log(props, "dskyprops")
  if (props.weather[0]) {
    return (
      <div>
        Darksky
        {
          props.weather.map((weather, key) => {
            var icon = weather.icon.toUpperCase().replace(/[-]/g, '_')
            return <div className="dskyInfo" key={key}>
              {weather.summary} 
              HIGH: {weather.temperatureMax}, LOW: {weather.temperatureMin}
              PRECIP: {weather.precipProbability}
              HUMID: {weather.humidity * 100}
              <div className="weatherIcon"><WeatherIcon className="weatherIcon"icon={icon}/></div>
            </div>
          })
        }
      </div>
    )
  } else {
    return <div> loading.. </div>
  }
}

export default DarkskyFeed;
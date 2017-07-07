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
  if (props.weather[0]) {
    var dskyFeed = [];
    var weather = props.weather

    
    for (var i = 0; i < 5; i++) {
      var icon = props.weather[i].icon.toUpperCase().replace(/[-]/g, '_')
      dskyFeed.push(
        <div className="dskyInfo" key={i}>
          {weather[i].summary}
          HIGH: {weather[i].temperatureMax}, LOW: {weather[i].temperatureMin}
          PRECIP: {weather[i].precipProbability}
          HUMID: {weather[i].humidity * 100}          
          <div className="weatherIcon"><WeatherIcon className="weatherIcon"icon={icon}/></div>
        </div>
      )
    }
    return (
      <div className="dskyBox">
        {dskyFeed}
      </div>
    )
  } else {
    return <div> loading.. </div>
  }
}

export default DarkskyFeed;


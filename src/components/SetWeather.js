import React from 'react';
import { connect } from 'react-redux';

function SetWeather({ weather = [] }) {
  return (
    <div>
      {
        weather.map((weatherInfo, key) => {
          return <div className="weatherFeed" key={key}>high: {weatherInfo.high} low:{weatherInfo.low}</div>
        })
      } 
    </div>
  );
}

function mapStateToProps(state) {
  const weather = state.weather;
  return {
    weather
  }
}

export default connect(mapStateToProps)(SetWeather);
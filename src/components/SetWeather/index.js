import React from 'react';
import { connect } from 'react-redux';
import SetWeather from './presenter';

function mapStateToProps(state) {
  const weather = state.weather;
  return {
    weather
  }
}

export default connect(mapStateToProps)(SetWeather);

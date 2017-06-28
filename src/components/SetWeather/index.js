import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SetWeather from './presenter';

function mapStateToProps(state) {
  console.log("state", state)
  const weather = state.weather;
  const wugInfo = state.wunderground;
  return {
    wugInfo,
    weather
  }
}

function mapDispatchToProps(dispatch) {
  return {
    wugReq: bindActionCreators(actions.wunderground, dispatch)
    // wugReq2: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetWeather);

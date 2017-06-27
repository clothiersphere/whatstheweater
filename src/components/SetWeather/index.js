import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SetWeather from './presenter';

function mapStateToProps(state) {
  const weather = state.weather;
  const wugInfo = state.wugInfo;
  return {
    wugInfo,
    weather
  }
}

function mapDispatchToProps(dispatch) {
  return {
    wugReq: bindActionCreators(actions.wunderground, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetWeather);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SetWeather from './presenter';

function mapStateToProps(state) {
  console.log(state, "STATE")
  const wugInfo = state.wunderground;
  const accuInfo = state.accuweather;
  return {
    accuInfo,
    wugInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    wugReq: bindActionCreators(actions.wunderground, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetWeather);

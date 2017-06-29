import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wunderground from './wunderground';
import accuweather from './accuweather';
import weatherInfo from './weatherInfo';

export default combineReducers({
  // wunderground, 
  // accuweather,
  weatherInfo,
  routing: routerReducer
})
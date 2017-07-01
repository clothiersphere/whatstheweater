import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wunderground from './wunderground';
import accuweather from './accuweather';
import openweather from './openweather';

export default combineReducers({
  wunderground, 
  accuweather,
  openweather,
  routing: routerReducer
})
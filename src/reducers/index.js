import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wunderground from './wunderground';
import accuweather from './accuweather';
import openweather from './openweather';
import darksky from './darksky';
import weatherbit from './weatherbit';
import apixu from './apixu';

export default combineReducers({
  wunderground, 
  accuweather,
  darksky,
  // weatherbit,
  apixu,
  routing: routerReducer
})
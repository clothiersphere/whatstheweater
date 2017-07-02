import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wunderground from './wunderground';
import accuweather from './accuweather';
import openweather from './openweather';
import darksky from './darksky';

export default combineReducers({
  wunderground, 
  accuweather,
  darksky,
  routing: routerReducer
})
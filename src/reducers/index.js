import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wunderground from './wunderground';
import accuweather from './accuweather';

export default combineReducers({
  wunderground, 
  accuweather,
  routing: routerReducer
})
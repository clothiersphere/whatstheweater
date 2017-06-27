import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wunderground from './wunderground';
import weather from './weather';

export default combineReducers({
  wunderground, 
  weather,
  routing: routerReducer
})
import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import weather from './weather';

export default combineReducers({
  weather,
  routing: routeReducer
})
import * as actionTypes from '../constants/actionTypes';

export function setWeather(weather) {
  return {
    type: actionTypes.SET_WEATHER,
    weather
  };
};

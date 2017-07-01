import axios from 'axios';
import { OPW_KEY } from '../constants/apiKeys';
import * as actionTypes from '../constants/actionTypes';

function fetchOpenWeather(weather) {
  return {
    type: actionTypes.OPW_REQ,
    weather
  };
}

export function openweather() {
  return function (dispatch) {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=55391959&APPID=${OPW_KEY}`;
    const url = `http://api.openweathermap.org/data/2.5/weather?APPID=${OPW_KEY}&q=San Francisco,CA`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        dispatch(fetchOpenWeather(data))
      })
  }
};


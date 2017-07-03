import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function fetchWbit(weather) {
  return {
    type: actionTypes.WBIT_REQ,
    weather
  };
}

export function weatherbit() {
  return function (dispatch) {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/weatherbit',
  });

  return request
    .then((response) => {
      dispatch(fetchWbit(response.data))
    })
  }
}
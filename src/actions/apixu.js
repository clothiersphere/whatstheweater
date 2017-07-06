import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function fetchApixu(weather) {
  return {
    type: actionTypes.APIXU_REQ,
    weather
  };
}

export function apixu() {
  return function (dispatch) {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/apixu',
  });

  return request
    .then((response) => {
      dispatch(fetchApixu(response.data))
    })
  }
}
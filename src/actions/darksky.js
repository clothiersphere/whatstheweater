import axios from 'axios';
import { DSKY_KEY } from '../constants/apiKeys';
import * as actionTypes from '../constants/actionTypes';

function fetchDsky(weather) {
  return {
    type: actionTypes.DSKY_REQ,
    weather
  };
}

export function darksky() {
  return function (dispatch) {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/darksky',
  });

  return request
    .then((response) => {
      dispatch(fetchDsky(response.data))
    })
  }
}


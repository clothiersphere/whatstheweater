import axios from 'axios'
import * as actionTypes from '../constants/actionTypes';

function fetchMe(weather) {
  return {
    type: actionTypes.ACCU_REQ,
    weather
  };
}

export function accuweather() {
  return function (dispatch) {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/accuweather',
  });

  return request
    .then((response) => {
      dispatch(fetchMe(response.data))
    })
  }
}
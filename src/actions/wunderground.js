import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function fetchWunder(weather) {
  return {
    type: actionTypes.WUG_REQ,
    weather
  };
}

export function wunderground() {
  return function (dispatch) {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/wunderground',
  });

  return request
    .then((response) => {
      dispatch(fetchWunder(response.data))
    })
  }
}

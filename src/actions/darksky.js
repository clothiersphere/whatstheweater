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
    const url= `https://api.darksky.net/forecast/${DSKY_KEY}/42.3601,-71.0589`;
    axios.get(url).then(response => console.log(response, "DSKY RESPONSE"))
  }
}
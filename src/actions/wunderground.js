import axios from 'axios';
import { WUG_KEY } from '../constants/apiKeys';
import * as actionTypes from '../constants/actionTypes';

function fetchWunder(weather) {
  return {
    type: actionTypes.WUG_REQ,
    weather
  };
}

export function wunderground() {
  return function (dispatch) {
    const url = `http://api.wunderground.com/api/${WUG_KEY}/conditions/q/CA/San_Francisco.json`;
    axios.get(url).then(response => response.data.current_observation)
    .then((data) => {
      dispatch(fetchWunder(data))
    })
  }
};


import axios from 'axios';
import { WUG_KEY } from '../constants/wug_key'
import * as actionTypes from '../constants/actionTypes'


function fetchMe(weather) {
  return {
    type: actionTypes.WUG_REQ,
    weather
  };
}



export function wunderground() {
  return function (dispatch) {
    const url = `http://api.wunderground.com/api/${WUG_KEY}/conditions/q/CA/San_Francisco.json`;
    // axios.get(url).then(response => dispatch(fetchMe(response)));
    axios.get(url).then(response => console.log(response));
  }
}

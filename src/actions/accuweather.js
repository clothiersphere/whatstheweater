import axios from 'axios'
import { ACCU_KEY } from '../constants/apiKeys';
import * as actionTypes from '../constants/actionTypes'

function fetchMe(weather) {
  return {
    type: actionTypes.ACCU_REQ,
    weather
  };
}

export function accuweather() {
  return function (dispatch) {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/347629?apikey=${ACCU_KEY}&details=true`;
    // axios.get(url).then(response => dispatch(fetchMe(response)));
    axios.get(url).then(response => response.data)
    .then((data) => {
      // console.log('ACCUDTA', data)
      dispatch(fetchMe(data))
    })
  }
}

import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPW_REQ:
      return opwFetch(state, action);
  }
  return state;
}

function opwFetch(state, action) {
  const { weather } = action
  console.log(weather, "OPENWEATHER")
  return [ ...state, weather ];
}
import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  
  switch (action.type) {
    case actionTypes.SET_WEATHER:
      return setWeather(state, action);
  }
  return state;
}

function setWeather(state, action) {
  const { weather } = action;
  return [ ...state, ...weather ];
}
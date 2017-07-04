import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.WBIT_REQ:
      return wbitFetch(state, action);
  }
  return state;
}

function wbitFetch(state, action) {
  const { weather } = action
  return [ ...state, weather ];
}
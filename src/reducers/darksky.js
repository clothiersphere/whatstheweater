import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DSKY_REQ:
      return dskyFetch(state, action);
  }
  return state;
}

function dskyFetch(state, action) {
  const { weather } = action
  return [ ...state, weather ];
}
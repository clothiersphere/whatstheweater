import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.APIXU_REQ:
      return apixuFetch(state, action);
  }
  return state;
}

function apixuFetch(state, action) {
  const { weather } = action
  return [ ...state, ...weather ];
}
import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ACCU_REQ:
      return accuFetch(state, action);
  }
  return state;
}

function accuFetch(state, action) {
  const { weather } = action
  return [ ...state, ...weather ];
}
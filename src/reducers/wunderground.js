import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.WUG_REQ:
      return wugFetch(state, action);
  }
  return state;
}

function wugFetch(state, action) {
  const { weather } = action
  return [ ...state, ...weather ];
}

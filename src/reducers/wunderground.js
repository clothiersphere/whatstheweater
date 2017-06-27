import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.WUG_REQ:
      return fetchMe(state, action);
  }
  return state;
}

function fetchMe(state, action) {
  const { wugInfo } = action;
  return [ ...state, ...wugInfo ];
}

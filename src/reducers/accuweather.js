import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.WUG_REQ:
    //   return fetchMe(state, action);
    case actionTypes.ACCU_REQ:
      return accuFetch(state, action);
  }
  return state;
}

// function fetchMe(state, action) {
  
//   const { weather } = action
//   return [ ...state, ...weather ];
// }

function accuFetch(state, action) {
  const { weather } = action
  return [ ...state, ...weather];
}
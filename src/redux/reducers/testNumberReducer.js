import {actionTypes} from '../actionTypes';

const initialState = {
  number: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_NUMBER:
      return {
        ...state,
        number: (state.number += 1),
      };

    case actionTypes.DECREMENT_NUMBER:
      return {
        ...state,
        number: (state.number -= 1),
      };
    default:
      return state;
  }
};

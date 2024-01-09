import { actionTypes } from '../actionTypes';

const initialState = {
  weight: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEIGHT:
      return { ...state, weight:action.payload };
    default:
      return state;
  }
}
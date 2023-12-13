import { actionTypes } from '../actionTypes';

const initialState = {
  message: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
import { actionTypes } from '../actionTypes';

const initialState = {
  certificate: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CERTIFICATE:
      return { ...state, certificate: action.payload };
    default:
      return state;
  }
}
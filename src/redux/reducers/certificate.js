import { actionTypes } from '../actionTypes';

const initialState = {
  certificate: [],
  image: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CERTIFICATE:
      return { ...state, certificate: action.payload };
    case actionTypes.FETCH_CERTIFICATE_IMAGE:
      return { ...state, image: action.payload };
    default:
      return state;
  }
}
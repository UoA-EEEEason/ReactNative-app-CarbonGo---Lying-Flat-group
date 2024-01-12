import { actionTypes } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  uid: null,
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.FETCH_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

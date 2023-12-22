import {actionTypes} from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  uid: null,
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
    default:
      return state;
  }
};

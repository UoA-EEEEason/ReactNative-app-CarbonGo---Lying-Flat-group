import {actionTypes} from '../actionTypes';

export const login = () => dispatch => {
  dispatch({
    type: actionTypes.LOGIN,
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
};

import {actionTypes} from '../actionTypes';

export const increaseNumber = () => dispatch => {
  dispatch({type: actionTypes.INCREMENT_NUMBER});
};

export const decreaseNumber = () => dispatch => {
  dispatch({type: actionTypes.DECREMENT_NUMBER});
};

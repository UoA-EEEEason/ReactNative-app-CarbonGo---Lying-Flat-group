import { actionTypes } from '../actionTypes';
import auth from '@react-native-firebase/auth';

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

export const register = (email, password) => dispatch => {
  auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // success
      dispatch({
        type: actionTypes.LOGIN,
        payload: userCredential.user,
      });
      console.log('User account created & signed in!');
    })
    .catch((error) => {
      // fail
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
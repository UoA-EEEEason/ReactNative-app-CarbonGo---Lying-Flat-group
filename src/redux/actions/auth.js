import { actionTypes } from '../actionTypes';
import auth from '@react-native-firebase/auth';

export const login = (email, password) => dispatch => {
  auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // login successful
      dispatch({
        type: actionTypes.LOGIN,
        payload: userCredential.user,
      });
      console.log('User signed in!');
    })
    .catch((error) => {
      // login failed
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      } else if (error.code === 'auth/user-disabled') {
        console.log('User has been disabled.');
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        console.log('Invalid username or password.');
      } else {
        console.log('Login failed with an unexpected error: ', error);
      }
    });
};

export const logout = () => dispatch => {
  auth().signOut()
    .then(() => {
      // logout successful
      dispatch({
        type: actionTypes.LOGOUT,
      });
      console.log('User signed out!');
    })
    .catch((error) => {
      // logout failed
      console.error('Error signing out: ', error);
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
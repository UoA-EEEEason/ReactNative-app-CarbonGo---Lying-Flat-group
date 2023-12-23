import { actionTypes } from '../actionTypes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = (email, password) => dispatch => {
  auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // login successful
      dispatch({
        type: actionTypes.LOGIN,
        payload: {
          isAuthenticated: true,
          uid: userCredential.user.uid,
        }
      });
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
        payload: {
          isAuthenticated: false,
          uid: null,
        }
      });
      console.log('User signed out!');
    })
    .catch((error) => {
      // logout failed
      console.error('Error signing out: ', error);
    });
};

export const register = (email, password, username) => dispatch => {
  auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // add user name in fire store
      firestore()
      .collection('user')
      .doc(userCredential.user.uid)
      .set({
        username: username,
      })
      .then(() => {
        dispatch({
          type: actionTypes.REGISTER,
          payload: {
            isAuthenticated: true,
            uid: userCredential.user.uid,
          }
        });
      });
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
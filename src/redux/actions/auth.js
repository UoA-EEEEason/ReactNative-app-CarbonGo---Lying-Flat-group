import { actionTypes } from '../actionTypes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = (email, password) => dispatch => {
  return new Promise((resolve, reject) => {
    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch({
          type: actionTypes.LOGIN,
          payload: {
            isAuthenticated: true,
            uid: userCredential.user.uid,
          }
        });
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
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

export const fetchUsername = (uid) => {
  return dispatch => {
    firestore()
      .collection('user')
      .doc(uid)
      .get()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          const userData = docSnapshot.data();
          dispatch({
            type: actionTypes.FETCH_USERNAME,
            payload: userData.username, 
          });
        } else {
          // console.log('No user found with that id');
        }
      }).catch(error => {
        console.error('Error fetching username:', error);
      });
  };
};

export const resetPassword = (email) => dispatch => {
  return new Promise((resolve, reject) => {
    auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent.
        resolve('Password reset email sent successfully.');
      })
      .catch((error) => {
        // Error occurred
        reject(error);
      });
  });
};

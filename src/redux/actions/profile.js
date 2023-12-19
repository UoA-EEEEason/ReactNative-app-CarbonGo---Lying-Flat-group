import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Post collection
// replaces any existing data
export const postProfile = (id, username, email) => {
  return dispatch => {
    firestore()
      .collection('profile')
      .doc('ABC') //set ID 'ABC'
      .set({
        id: id,
        username: username,
        email: email,
      })
      .then(() => {
        dispatch({
          type: actionTypes.POST_PROFILE,
        });
      });
  };
};

// update a document
// export const postProfile = () => {
//     return dispatch => {
//         firestore()
//             .collection('pfofile')
//             .doc('ABC')
//             .update({
//                 age: 31,
//             })
//             .then(() => {
//                 dispatch({
//                     type: actionTypes.POST_PROFILE,
//                 });
//                 console.log('User added!');
//             });
//     };
// };

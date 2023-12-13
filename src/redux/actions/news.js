import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Get doc
// export const fetchData = () => {
//     return (dispatch) => {
//         firestore()
//             .collection('news')
//             .doc('95sI4gzh33rjPsRua5iO')
//             .get()
//             .then(documentSnapshot => {
//                 if (documentSnapshot.exists) {
// dispatch({
//     type: actionTypes.FETCH_DATA,
//     payload: documentSnapshot.data(),
// });
//                     console.log('news data: ', documentSnapshot.data());
//                 }
//             });
//     };
// };

// Get collection
export const fetchNews = () => {
  return dispatch => {
    firestore()
      .collection('news')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data());
        dispatch({
          type: actionTypes.FETCH_NEWS,
          payload: documents,
        });
      });
  };
};

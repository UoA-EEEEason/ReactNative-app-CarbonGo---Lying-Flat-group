import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Get collection
export const fetchNews = () => {
  return dispatch => {
    firestore()
      .collection('news')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt.toDate(),
          };
        });
        dispatch({
          type: actionTypes.FETCH_NEWS,
          payload: documents,
        });
      });
  };
};

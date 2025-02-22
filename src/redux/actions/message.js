import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Get collection
export const fetchMessage = () => {
  return dispatch => {
    firestore()
      .collection('message')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        dispatch({
          type: actionTypes.FETCH_MESSAGE,
          payload: documents,
        });
      });
  };
};

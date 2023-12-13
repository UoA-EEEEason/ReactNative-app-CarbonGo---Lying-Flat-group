import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Get collection
export const fetchMessage = () => {
  return dispatch => {
    firestore()
      .collection('message')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data());
        dispatch({
          type: actionTypes.FETCH_MESSAGE,
          payload: documents,
        });
      });
  };
};

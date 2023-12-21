import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Get collection
export const fetchCertificate = () => {
  return dispatch => {
    firestore()
      .collection('certificate')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        dispatch({
          type: actionTypes.FETCH_CERTIFICATE,
          payload: documents,
        });
      });
  };
};

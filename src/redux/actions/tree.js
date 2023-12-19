import {actionTypes} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Get collection
export const fetchTree = () => {
  return dispatch => {
    firestore()
      .collection('tree')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        dispatch({
          type: actionTypes.FETCH_TREE,
          payload: documents,
        });
      });
  };
};

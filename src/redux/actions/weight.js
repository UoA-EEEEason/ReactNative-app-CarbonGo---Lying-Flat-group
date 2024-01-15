import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

export const fetchWeight = () => {
  return dispatch => {
    firestore()
      .collection('weight')
      .doc('Up4j2PVJc4qcg3uKMfvM')
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          dispatch({
            type: actionTypes.FETCH_WEIGHT,
            payload: documentSnapshot.data(),
          });
        }
      })
      .catch(error => {
        console.error('Error fetching weight:', error);
      });
  };
};
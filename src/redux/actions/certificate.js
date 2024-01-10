import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Fetch cerification data by uid
export const fetchCertificate = (uid) => {
  return dispatch => {
    firestore()
      .collection('user')
      .doc(uid)
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

// Buy a tree
// Equivalent to post a certificate
// Modify the total points at the same time
export const postCertificate = (uid, tid, createdAt, cimage, desc) => {
  return dispatch => {
      firestore()
          .collection('user')
          .doc(uid)
          .collection('certificate')
          .add({
              tid: tid,
              createdAt: createdAt,
              cimage: cimage,
              desc: desc,
              location: null,
          })
          .then(() => {
              dispatch({
                  type: actionTypes.POST_CERTIFICATE,
              });
          });
  };
};
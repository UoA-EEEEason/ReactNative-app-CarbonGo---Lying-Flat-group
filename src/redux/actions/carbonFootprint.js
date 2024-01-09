import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Post carbon footprint data
export const postElectricity = (uid, consumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Electricity')
            .add({
                electricityConsumption: consumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_ELECTRICITY,
                    payload: consumption,
                });
            });
    };
};

export const postFood = (uid, consumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Food')
            .add({
                foodConsumption: consumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_FOOD,
                    payload: consumption,
                });
            });
    };
};

export const postTraffic = (uid, consumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Traffic')
            .add({
                trafficConsumption: consumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_TRAFFIC,
                    payload: consumption,
                });
            });
    };
};

export const postWalk = (uid, consumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Walk')
            .add({
                walkConsumption: consumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_WALK,
                    payload: consumption,
                });
            });
    };
};

// Fetch carbon footprint data
export const fetchFood = (uid) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Food')
            .orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_FOOD,
                    payload: documents[0].foodConsumption,
                });
            });
    };
};

export const fetchTraffic = (uid) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Traffic')
            .orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_TRAFFIC,
                    payload: documents[0].trafficConsumption,
                });
            });
    };
};

export const fetchElectricity = (uid) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Electricity')
            .orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_ELECTRICITY,
                    payload: documents[0].electricityConsumption,
                });
            });
    };
};

export const fetchWalk = (uid) => {
    return dispatch => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const todayTimestamp = firestore.Timestamp.fromDate(today);

        firestore()
            .collection('user')
            .doc(uid)
            .collection('UserCFP-Walk')
            .where("createdAt", "<", todayTimestamp)
            .orderBy("createdAt", "desc")
            .limit(1)
            .get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    dispatch({
                        type: actionTypes.FETCH_WALK,
                        payload: 0,
                    });
                }
                else {
                    const documents = querySnapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                        };
                    });
                    console.log('yestoday: ', documents)
                    dispatch({
                        type: actionTypes.FETCH_WALK,
                        payload: documents[0].walkConsumption,
                    });
                }

            });
    };
};

// export const fetchWalk = (uid) => {
//     return dispatch => {
//         firestore()
//             .collection('user')
//             .doc(uid)
//             .collection('UserCFP-Walk')
//             .orderBy('createdAt', 'desc')
//             .get()
//             .then(querySnapshot => {
//                 const documents = querySnapshot.docs.map(doc => {
//                     return {
//                         ...doc.data(),
//                     };
//                 });
//                 dispatch({
//                     type: actionTypes.FETCH_WALK,
//                     payload: documents[0].walkConsumption,
//                 });
//             });
//     };
// };
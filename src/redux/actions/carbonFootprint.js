import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// export const postElectricity = (uid, consumption, points, createdAt) => {
//     return dispatch => {
//         firestore()
//             .collection('user')
//             .doc(uid)
//             .collection('UserCFP-Electricity')
//             .add({
//                 electricityConsumption: consumption,
//                 createdAt: createdAt,
//             })
//             .then(() => {
//                 dispatch({
//                     type: actionTypes.POST_ELECTRICITY,
//                     payload: consumption,
//                 });
                
//                 // modify points
//                 return firestore()
//                 .collection('user')
//                 .doc(uid)
//                 .collection('points')
//                 .add({
//                     points: points,
//                     createdAt: createdAt,
//                 });
//             })
//             .then(() => {
//                 // Processing after the second operation is successful
//                 dispatch({
//                     type: actionTypes.POST_POINTS,
//                     payload: points,
//                 });
//             })
//             .catch(error => {
//                 // Handle errors in any operation
//                 console.error("Error in Firestore operations:", error);
//             });
//     };
// };

// export const postFood = (uid, consumption, points, createdAt) => {
//     return dispatch => {
//         firestore()
//             .collection('user')
//             .doc(uid)
//             .collection('UserCFP-Food')
//             .add({
//                 foodConsumption: consumption,
//                 createdAt: createdAt,
//             })
//             .then(() => {
//                 dispatch({
//                     type: actionTypes.POST_FOOD,
//                     payload: consumption,
//                 });

//                 // modify points
//                 return firestore()
//                 .collection('user')
//                 .doc(uid)
//                 .collection('points')
//                 .add({
//                     points: points,
//                     createdAt: createdAt,
//                 });
//             })
//             .then(() => {
//                 // Processing after the second operation is successful
//                 dispatch({
//                     type: actionTypes.POST_POINTS,
//                     payload: points,
//                 });
//             })
//             .catch(error => {
//                 // Handle errors in any operation
//                 console.error("Error in Firestore operations:", error);
//             });
//     };
// };

// export const postTraffic = (uid, consumption, points, createdAt) => {
//     return dispatch => {
//         firestore()
//             .collection('user')
//             .doc(uid)
//             .collection('UserCFP-Traffic')
//             .add({
//                 trafficConsumption: consumption,
//                 createdAt: createdAt,
//             })
//             .then(() => {
//                 dispatch({
//                     type: actionTypes.POST_TRAFFIC,
//                     payload: consumption,
//                 });

//                 // modify points
//                 return firestore()
//                 .collection('user')
//                 .doc(uid)
//                 .collection('points')
//                 .add({
//                     points: points,
//                     createdAt: createdAt,
//                 });
//             })
//             .then(() => {
//                 // Processing after the second operation is successful
//                 dispatch({
//                     type: actionTypes.POST_POINTS,
//                     payload: points,
//                 });
//             })
//             .catch(error => {
//                 // Handle errors in any operation
//                 console.error("Error in Firestore operations:", error);
//             });
//     };
// };

// export const postWalk = (uid, consumption, points, createdAt) => {
//     return dispatch => {
//         firestore()
//             .collection('user')
//             .doc(uid)
//             .collection('UserCFP-Walk')
//             .add({
//                 walkConsumption: consumption,
//                 createdAt: createdAt,
//             })
//             .then(() => {
//                 dispatch({
//                     type: actionTypes.POST_WALK,
//                     payload: consumption,
//                 });

//                 // modify points
//                 return firestore()
//                 .collection('user')
//                 .doc(uid)
//                 .collection('points')
//                 .add({
//                     points: points,
//                     createdAt: createdAt,
//                 });
//             })
//             .then(() => {
//                 // Processing after the second operation is successful
//                 dispatch({
//                     type: actionTypes.POST_POINTS,
//                     payload: points,
//                 });
//             })
//             .catch(error => {
//                 // Handle errors in any operation
//                 console.error("Error in Firestore operations:", error);
//             });
//     };
// };

// export const postPoints = (uid, points, createdAt) => {
//     return dispatch => {
//         firestore()
//             .collection('user')
//             .doc(uid)
//             .collection('points')
//             .add({
//                 points: points,
//                 createdAt: createdAt,
//             })
//             .then(() => {
//                 dispatch({
//                     type: actionTypes.POST_POINTS,
//                     payload: points,
//                 });
//             })
//     };
// };

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
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
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
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
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
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
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
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
            });
    };
};

export const postPoints = (uid, points, createdAt, action, diff) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('points')
            .add({
                points: points,
                createdAt: createdAt,
                action: action,
                diff: diff,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_POINTS,
                    payload: points,
                });
            })
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

export const fetchPoints = (uid) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('points')
            .orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_POINTS,
                    payload: documents[0].points,
                });
            });
    };
};

export const fetchHistory = (uid) => {
    return dispatch => {
        firestore()
            .collection('user')
            .doc(uid)
            .collection('points')
            .orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_HISTORY,
                    payload: documents,
                });
            });
    };
};
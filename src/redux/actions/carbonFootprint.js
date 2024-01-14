import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

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
                    // console.log('yestoday: ', documents)
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
            .limit(10)
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

async function fetchMonthData(uid) {
    const now = new Date();
    const results = [];

    for (let i = 5; i >= 0; i--) {

        let year = now.getFullYear();
        let month = now.getMonth() - i;
        let days = new Date(year, month + 1, 0).getDate();

        if (month < 0) {
            year -= Math.ceil(Math.abs(month) / 12);
            month += 12;
        }

        const firstDayOfMonth = new Date(year, month, 1, 0, 0, 0);
        const lastDayOfMonth = new Date(year, month, days, 23, 59, 59);

        const querySnapshot = await firestore()
            .collection('user')
            .doc(uid)
            .collection('points')
            .where('createdAt', '>=', firstDayOfMonth)
            .where('createdAt', '<=', lastDayOfMonth)
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get()

        if (!querySnapshot.empty) {
            results.push(querySnapshot.docs[0].data());
        } else {
            results.push({ "createdAt": null, "points": null })
        }
    }
    return results;
};

export const fetchAndStoreMonthData = (uid) => async (dispatch) => {
    try {
      const monthData = await fetchMonthData(uid);
      dispatch({ type: 'FETCH_MONTH_DATA', payload: monthData });
    } catch (error) {
      console.error('Error fetching month data:', error);
    }
  };
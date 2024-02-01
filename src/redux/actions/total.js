import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

export const postTotalElectricity = (electricityTotalConsumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('totalElectricity')
            .add({
                electricityTotalConsumption: electricityTotalConsumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_TOTAL_ELECTRICITY,
                    payload: electricityTotalConsumption,
                });
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
            });
    };
};

export const postTotalFood = (foodTotalConsumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('totalFood')
            .add({
                foodTotalConsumption: foodTotalConsumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_TOTAL_FOOD,
                    payload: foodTotalConsumption,
                });
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
            });
    };
};


export const postTotalTraffic = (trafficTotalConsumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('totalTraffic')
            .add({
                trafficTotalConsumption: trafficTotalConsumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_TOTAL_TRAFFIC,
                    payload: trafficTotalConsumption,
                });
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
            });
    };
};

export const postTotalWalk = (walkTotalConsumption, createdAt) => {
    return dispatch => {
        firestore()
            .collection('totalWalk')
            .add({
                walkTotalConsumption: walkTotalConsumption,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_TOTAL_WALK,
                    payload: walkTotalConsumption,
                });
            })
            .catch(error => {
                // Handle errors in any operation
                console.error("Error in Firestore operations:", error);
            });
    };
};

export const postTotalPoints = (totalEmission, createdAt) => {
    return dispatch => {
        firestore()
            .collection('totalEmissions')
            .add({
                totalEmission: totalEmission,
                createdAt: createdAt,
            })
            .then(() => {
                dispatch({
                    type: actionTypes.POST_TOTAL_EMISSION,
                    payload: totalEmission,
                });
            })
    };
};

export const fetchTotalElectricity = () => {
    return dispatch => {
        firestore()
            .collection('totalElectricity')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_TOTAL_ELECTRICITY,
                    payload: documents[0].electricityTotalConsumption,
                });
            });
    };
};

export const fetchTotalFood = () => {
    return dispatch => {
        firestore()
            .collection('totalFood')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_TOTAL_FOOD,
                    payload: documents[0].foodTotalConsumption,
                });
            });
    };
};

export const fetchTotalTraffic = () => {
    return dispatch => {
        firestore()
            .collection('totalTraffic')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_TOTAL_TRAFFIC,
                    payload: documents[0].trafficTotalConsumption,
                });
            });
    };
};

export const fetchTotalWalk = () => {
    return dispatch => {
        firestore()
            .collection('totalWalk')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_TOTAL_WALK,
                    payload: documents[0].walkTotalConsumption,
                });
            });
    };
};

export const fetchTotalEmission = () => {
    return dispatch => {
        firestore()
            .collection('totalEmissions')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                    };
                });
                dispatch({
                    type: actionTypes.FETCH_TOTAL_EMISSION,
                    payload: documents[0].totalEmission,
                });
            });
    };
};

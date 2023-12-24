import { actionTypes } from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

// Post collection
// replaces any existing data
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
                });
            });
    };
};

export const postWlk = (uid, consumption, createdAt) => {
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
                });
            });
    };
};
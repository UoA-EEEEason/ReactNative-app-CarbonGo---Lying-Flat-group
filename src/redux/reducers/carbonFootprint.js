import { actionTypes } from '../actionTypes';

const initialState = {
    electricyConsumption: null,
    foodConsumption: null,
    trafficConsumption: null,
    walkConsumption: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_ELECTRICITY:
            return { ...state, profile: action.payload };
        case actionTypes.POST_FOOD:
            return { ...state, profile: action.payload };
        case actionTypes.POST_TRAFFIC:
            return { ...state, profile: action.payload };
        case actionTypes.POST_WALK:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

import { actionTypes } from '../actionTypes';

const initialState = {
    electricityTotalConsumption: [],
    foodTotalConsumption: [],
    trafficTotalConsumption: [],
    walkTotalConsumption: [],
    totalEmission: [],
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_TOTAL_ELECTRICITY:
            return { ...state, electricityTotalConsumption: action.payload };
        case actionTypes.POST_TOTAL_FOOD:
            return { ...state, foodTotalConsumption: action.payload };
        case actionTypes.POST_TOTAL_TRAFFIC:
            return { ...state, trafficTotalConsumption: action.payload };
        case actionTypes.POST_TOTAL_WALK:
            return { ...state, walkTotalConsumption: action.payload };
        case actionTypes.FETCH_TOTAL_ELECTRICITY:
            return { ...state, electricityTotalConsumption: action.payload };
        case actionTypes.FETCH_TOTAL_FOOD:
            return { ...state, foodTotalConsumption: action.payload };
        case actionTypes.FETCH_TOTAL_TRAFFIC:
            return { ...state, trafficTotalConsumption: action.payload };
        case actionTypes.FETCH_TOTAL_WALK:
            return { ...state, walkTotalConsumption: action.payload };
        case actionTypes.POST_TOTAL_EMISSION:
            return { ...state, totalEmission: action.payload };
        case actionTypes.FETCH_TOTAL_EMISSION:
            return { ...state, totalEmission: action.payload };
        default:
            return state;
    }
};
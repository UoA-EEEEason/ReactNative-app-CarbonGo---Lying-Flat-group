import { actionTypes } from '../actionTypes';

const initialState = {
    electricityConsumption: null,
    foodConsumption: null,
    trafficConsumption: null,
    walkConsumption: null,
    points: null,
    history: [],
    monthData: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_ELECTRICITY:
            return { ...state, electricityConsumption: action.payload };
        case actionTypes.POST_FOOD:
            return { ...state, foodConsumption: action.payload };
        case actionTypes.POST_TRAFFIC:
            return { ...state, trafficConsumption: action.payload };
        case actionTypes.POST_WALK:
            return { ...state, walkConsumption: action.payload };
        case actionTypes.FETCH_ELECTRICITY:
            return { ...state, electricityConsumption: action.payload };
        case actionTypes.FETCH_FOOD:
            return { ...state, foodConsumption: action.payload };
        case actionTypes.FETCH_TRAFFIC:
            return { ...state, trafficConsumption: action.payload };
        case actionTypes.FETCH_WALK:
            return { ...state, walkConsumption: action.payload };
        case actionTypes.POST_POINTS:
            return { ...state, points: action.payload };
        case actionTypes.FETCH_POINTS:
            return { ...state, points: action.payload };
        case actionTypes.FETCH_HISTORY:
            return { ...state, history: action.payload };
        case actionTypes.FETCH_MONTH_DATA:
            return { ...state, monthData: action.payload };
        default:
            return state;
    }
};

import { actionTypes } from '../actionTypes';

const initialState = {
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS:
      return { ...state, news: action.payload };
    default:
      return state;
  }
}
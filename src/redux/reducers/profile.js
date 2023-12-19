import { actionTypes } from '../actionTypes';

const initialState = {
  profile: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}
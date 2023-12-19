import { actionTypes } from '../actionTypes';

const initialState = {
  tree: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TREE:
      return { ...state, tree: action.payload };
    default:
      return state;
  }
}
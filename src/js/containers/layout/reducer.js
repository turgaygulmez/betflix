import { REDUCER_NAME, SET_NAVIGATION } from "./constants";

const initialState = {
  navigation: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
      return {
        ...state,
        navigation: action.payload
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectNavigation = (state) => getState(state).navigation;

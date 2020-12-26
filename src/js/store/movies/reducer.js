import { REDUCER_NAME, SET_MOVIES } from "./constants";

const initialState = {
  movies: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectMovies = (state) => getState(state).movies;

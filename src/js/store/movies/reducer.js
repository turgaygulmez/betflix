import {
  REDUCER_NAME,
  SET_MOVIES,
  SET_FILTERS,
  RESET_FILTERS
} from "./constants";

const initialState = {
  movies: [],
  filters: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

const getState = (state) => {
  return state[REDUCER_NAME] || initialState;
};

export const selectMovies = (state) => getState(state).movies;
export const selectFilters = (state) => getState(state).filters;

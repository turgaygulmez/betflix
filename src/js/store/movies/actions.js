import Api from "../../../service";
import {
  SET_LOADING,
  SET_ERROR,
  SET_FILTERS,
  SET_MOVIES,
  RESET_FILTERS
} from "./constants";

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload
  };
};

const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload
});

export const setFilters = (payload) => ({
  type: SET_FILTERS,
  payload
});

export const resetFilters = (payload) => ({
  type: RESET_FILTERS,
  payload
});

export const getMovies = () => (dispatch) => {
  dispatch(setLoading(true));
  return Api.movies
    .get()
    .then((data) => {
      dispatch(setMovies(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

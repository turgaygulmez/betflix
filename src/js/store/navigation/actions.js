import Api from "../../../service";
import { SET_LOADING, SET_ERROR, SET_NAVIGATION } from "./constants";

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

const setNavigation = (payload) => ({
  type: SET_NAVIGATION,
  payload
});

export const getNavigation = () => (dispatch) => {
  dispatch(setLoading(true));
  return Api.navigation
    .get()
    .then((data) => {
      dispatch(setNavigation(data));
      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

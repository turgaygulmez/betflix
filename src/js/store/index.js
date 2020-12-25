import { combineReducers } from "redux";
import { reducer as movies } from "../containers/movies/reducer";
import { reducer as layout } from "../containers/layout/reducer";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  movies,
  layout
});

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(reducers, allEnhancers);
import { combineReducers } from "redux";
import { reducer as movies } from "./movies/reducer";
import { reducer as navigation } from "./navigation/reducer";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  movies,
  navigation
});

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(reducers, allEnhancers);

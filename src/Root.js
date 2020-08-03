import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(logger));

  return <Provider store={store}>{children}</Provider>;
};

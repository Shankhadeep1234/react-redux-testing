import { combineReducers } from "redux";

import commentReducer from "reducers/comments";
import authReducer from "reducers/auth";

export default combineReducers({
  auth: authReducer,
  comments: commentReducer,
});

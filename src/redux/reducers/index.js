import { combineReducers } from "@reduxjs/toolkit";
import doFetch from "./doFetch";

const reducer = combineReducers({
  doFetch,
});

export default reducer;

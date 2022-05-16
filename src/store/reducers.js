import { combineReducers } from "@reduxjs/toolkit";
import config from "config";
import persistReducer from "redux-persist/es/persistReducer";
import userSlice from "./userSlice";

const allReducers = combineReducers({
  user: userSlice,
});

export default persistReducer(config.persist, allReducers);

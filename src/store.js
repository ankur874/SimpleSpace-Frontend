import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  initialState,
});

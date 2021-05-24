import { configureStore } from "@reduxjs/toolkit";
import cakesReducer from "./cakesSlice"

export default configureStore({
  reducer: {
      cakes: cakesReducer,
  },
});


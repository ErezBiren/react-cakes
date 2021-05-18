import { configureStore } from "@reduxjs/toolkit";
import cakesReducer from "./cakesReducer"

export default configureStore({
  reducer: {
      cakes: cakesReducer,
  },
});


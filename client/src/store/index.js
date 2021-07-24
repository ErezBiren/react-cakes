import { configureStore } from "@reduxjs/toolkit";
import cakesReducer from "./cakes-Slice";
import authReducer from "./auth-Slice";
import cartReducer from "./cart-Slice";

const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    admin: authReducer,
    cart: cartReducer,
  },
});

export default store;

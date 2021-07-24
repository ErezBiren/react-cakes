import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cakes: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {},
    removeItemFromCart: (state, action) => {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

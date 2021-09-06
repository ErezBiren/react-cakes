import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { CakeData } from "./cakes-Slice";

export type CartItemData = {
  cakeData: CakeData,
  quantity: number,
}

interface CartState {
  cartItems: CartItemData[],
  totalQuantity: number,
  isDrawerOpen: boolean
}

export const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  isDrawerOpen: false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: CartState, action) => {

      var cartItem = {
        cakeData: action.payload,
        quantity: 0
      };

      state.cartItems.push(cartItem);

      let amountToPay = 0;

      state.cartItems.forEach((cartItem) => amountToPay += cartItem.cakeData.price * cartItem.quantity);

      state.totalQuantity = state.cartItems.length;
    },
    removeItemFromCart: (state, action) => { },
    toggleCartDrawer: (state: CartState, action) => { state.isDrawerOpen = action.payload },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

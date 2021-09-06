import { createSlice } from "@reduxjs/toolkit";
import { CakeData } from "./cakes-Slice";

export type CartItemData = {
  cakeData: CakeData,
  quantity: number,
}

interface CartState {
  cartItems: CartItemData[],
  totalQuantity: number,
  isDrawerOpen: boolean,
  totalPrice: number
}

const maxQuantity = 10;

export const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  isDrawerOpen: false,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: CartState, action) => {

      let cartItem = state.cartItems.find(cart => cart.cakeData.id === action.payload.id);

      if (cartItem) {

        if (cartItem.quantity < maxQuantity) {
          state.cartItems = state.cartItems.map(item => item.cakeData.id === cartItem?.cakeData.id ?
            { ...item, quantity: item.quantity + 1 } : item
          )
        }
      }
      else {
        cartItem = {
          cakeData: action.payload,
          quantity: 1
        };

        state.cartItems.push(cartItem);
      }

      let totalPrice = 0;
      state.cartItems.forEach((cartItem) => totalPrice += cartItem.cakeData.price * cartItem.quantity);
      state.totalPrice = totalPrice;

      state.totalQuantity = state.cartItems.length;
    },
    removeItemFromCart: (state, action) => { },
    updateCartItem: (state, action) => {

      const cartItem = action.payload;

      state.cartItems = state.cartItems.map(item => item.cakeData.id === cartItem?.cakeData.id ?
        { ...cartItem } : item
      )

      let totalPrice = 0;
      state.cartItems.forEach((cartItem) => totalPrice += cartItem.cakeData.price * cartItem.quantity);
      state.totalPrice = totalPrice;
    },
    toggleCartDrawer: (state, action) => { state.isDrawerOpen = action.payload },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

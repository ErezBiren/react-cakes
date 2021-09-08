import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

const updateTotalParameters = (state: CartState) => {
  let totalPrice = 0;
  state.cartItems.forEach((cartItem) => totalPrice += cartItem.cakeData.price * cartItem.quantity);
  state.totalPrice = totalPrice;

  let totalQuantity = 0;
  state.cartItems.forEach((cartItem) => totalQuantity += cartItem.quantity);
  state.totalQuantity = totalQuantity;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: CartState, action: PayloadAction<CakeData>) => {

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

      updateTotalParameters(state);


    },
    removeCartItem: (state, action: PayloadAction<CartItemData>) => {
      let removeItemId = action.payload.cakeData.id;
      state.cartItems = state.cartItems.filter(item => item.cakeData.id !== removeItemId);

      updateTotalParameters(state);
    },
    updateCartItem: (state, action: PayloadAction<CartItemData>) => {

      const cartItem = action.payload;

      state.cartItems = state.cartItems.map(item => item.cakeData.id === cartItem?.cakeData.id ?
        { ...cartItem } : item
      )

      updateTotalParameters(state);
    },
    toggleCartDrawer: (state, action) => { state.isDrawerOpen = action.payload },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

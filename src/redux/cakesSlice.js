import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cakes: [
    { id: 1, name: " 1קצפת", price: 650 },
    { id: 2, name: "1שוקולד", price: 150 },
    { id: 3, name: "2קצפת", price: 50 },
  ],
  selectedCakeId: { id: 2, name: "1שוקולד", price: 150 },
  error: false,
};

export const cakesSlice = createSlice({
  name: "cakes",
  initialState,

  reducers: {
    addCake: (state, action) => {
      state.cakes = [...state.cakes, action.payload];
    },
    editCake: (state, action) => {
      state.selectedCakeId = state.cakes.filter((cake) => cake.id == action.payload.cakeId)
    },
    deleteCake: (state, action) => {
      state.cakes = [
        ...state.cakes.filter((cake) => cake.id !== action.payload.cakeId),
      ];
    },
  },
});

export const { deleteCake, addCake, editCake } = cakesSlice.actions;

export default cakesSlice.reducer;

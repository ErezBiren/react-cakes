import { createSlice } from "@reduxjs/toolkit";

export const cakesSlice = createSlice({
  name: "cakes",
  initialState: {
    cakes: [
      { id: 1, name: " 1קצפת", price: 650 },
      { id: 2, name: "1שוקולד", price: 150 },
      { id: 3, name: "2קצפת", price: 50 },
      { id: 4, name: "2שוקולד", price: 90 },
      { id: 5, name: "3קצפת", price: 50 },
      { id: 6, name: "3שוקולד", price: 70 },
    ],
  },
  reducers: {
    addCake: (state, action) => {
      return state.push(action.payload);
    },
    deleteCake: (state, action) => {
      return {
        cakes: [
          ...state.cakes.filter((cake) => cake.id !== action.payload.cakeId),
        ],
      };
    },
  },
});

export const { getCakes, deleteCake } = cakesSlice.actions;

export default cakesSlice.reducer;

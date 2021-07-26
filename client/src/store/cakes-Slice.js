import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";

const fetchCakes = createAsyncThunk();

export const initialState = {
  cakes: [
    // {
    //   id: 1,
    //   name: " 1קצפת",
    //   price: 650,
    //   description: "aaa",
    //   imgSrc: "../../assets/cake1.jpg",
    // },
    // { id: 2, name: "1שוקולד", price: 150 },
    // { id: 3, name: "2קצפת", price: 50 },
  ],
  selectedCakeID: 0,
};

export const cakesSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    addCake: (state, action) => {
      state.cakes = [...state.cakes, action.payload];
    },
    updateCake: (state, action) => {
      state.cakes = [
        ...state.cakes.filter((cake) => cake.id !== action.payload),
        action.payload,
      ];
    },
    editCake: (state, action) => {
      state.selectedCakeID = action.payload;
    },
    deleteCake: (state, action) => {
      state.cakes = [
        ...state.cakes.filter((cake) => cake.id !== action.payload),
      ];
    },
  },
});

export const cakesActions = cakesSlice.actions;

export default cakesSlice.reducer;

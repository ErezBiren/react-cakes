import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchCakes = createAsyncThunk();

export const initialState = {
  cakes: [],
  selectedCakeID: 0,
};

export const cakesSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    addCake: (state, action) => {
      state.cakes.push(action.payload);
    },
    updateCake: (state, action) => {
      state.cakes = state.cakes.map((cake) =>
        cake.id === action.payload.id ? action.payload : cake
      );
    },
    editCake: (state, action) => {
      state.selectedCakeID = action.payload;
    },
    deleteCake: (state, action) => {
      state.cakes = [
        ...state.cakes.filter((cake) => cake.id !== action.payload),
      ];
    },
    replaceCakes: (state, action) => {
      console.log(JSON.stringify(action.payload));

      if (action.payload && action.payload.length !== 0) {
        state.cakes = action.payload;
      }
    },
  },
});

export const cakesActions = cakesSlice.actions;

export default cakesSlice.reducer;

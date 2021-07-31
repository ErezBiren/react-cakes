import { createSlice } from "@reduxjs/toolkit";

export type CakeData = {
  name: string,
  price : number,
  id : string,
  imgSrc : string,
  description : string
}

interface CakesState {
  cakes: CakeData[],
  selectedCakeID: string,
}

export const initialState : CakesState = {
  cakes: [],
  selectedCakeID: "",
};

export const cakesSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    addCake: (state : CakesState, action) => {
      const exists = state.cakes.some((cake) => cake.id === action.payload);
      if (!exists) {
        state.cakes.push(action.payload);
      }
    },
    updateCake: (state: CakesState, action) => {
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

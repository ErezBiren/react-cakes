import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CakeData = {
  name: string,
  price: number,
  id: string,
  imageSource: string,
  description: string
}

interface CakesState {
  cakes: CakeData[],
  selectedCakeID: string,
}

export const initialState: CakesState = {
  cakes: [],
  selectedCakeID: "",
};

export const cakesSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    addCake: (state: CakesState, action) => {
      const exists = state.cakes.some((cake) => cake.id === action.payload);
      if (!exists) {
        state.cakes.push(action.payload);
      }
    },
    updateCake: (state: CakesState, action: PayloadAction<CakeData>) => {
      state.cakes = state.cakes.map((cake) =>
        cake.id === action.payload.id ? action.payload : cake
      );
    },
    deleteCake: (state, action: PayloadAction<string>) => {
      state.cakes = [
        ...state.cakes.filter((cake) => cake.id !== action.payload),
      ];
    },
  },
});

export const cakesActions = cakesSlice.actions;

export default cakesSlice.reducer;

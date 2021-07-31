import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isAdmin: false,
  selectUser: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAdmin: (state) => {
      state.isAdmin = !state.isAdmin;
    },
  },
});

export const authActions = authSlice.actions;

export const isAdmin = (state) => state.isAdmin;

export default authSlice.reducer;

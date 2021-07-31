import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAdmin: boolean,
  selectUser: number,
}

export const initialState: AuthState = {
  isAdmin: false,
  selectUser: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAdmin: (state: AuthState) => {
      state.isAdmin = !state.isAdmin;
    },
  },
});

export const authActions = authSlice.actions;

export const isAdmin = (state: AuthState) => isAdmin;

export default authSlice.reducer;

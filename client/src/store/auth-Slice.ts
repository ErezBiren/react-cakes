import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAdmin: boolean,
  selectUser: number,
  token: string,
  isLoggedIn: boolean
}

export const initialState: AuthState = {
  isAdmin: false,
  selectUser: 0,
  token: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAdmin: (state: AuthState) => {
      state.isAdmin = !state.isAdmin;
    },
    login: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = "";
    }
  },
});

export const authActions = authSlice.actions;

export const isAdmin = (state: AuthState) => isAdmin;

export default authSlice.reducer;

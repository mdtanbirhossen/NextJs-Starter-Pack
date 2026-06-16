import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthResponse, AuthState } from "./authTypes";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const getTokenFromResponse = (payload: AuthResponse) =>
  payload.accessToken ?? payload.token ?? null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthResponse>) => {
      const token = getTokenFromResponse(action.payload);

      state.user = action.payload.user ?? state.user;
      state.token = token;
      state.isAuthenticated = Boolean(token || action.payload.user);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;

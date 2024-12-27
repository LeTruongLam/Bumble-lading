import { IAuthState } from "@/types/store/auth.store.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  token: "",
  expiresAt: "",
  account: {
    id: 0,
    email: "",
    name: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthInfo: (state, data) => {
      state.expiresAt = data.payload.expiresAt;
      state.token = data.payload.token;
    },
    setUserInfo: (state, data) => {
      state.account = data.payload.account;
    },
    resetAuthData: () => {
      return initialState;
    },
  },
});

export const { setAuthInfo, setUserInfo, resetAuthData } = authSlice.actions;

export default authSlice.reducer;

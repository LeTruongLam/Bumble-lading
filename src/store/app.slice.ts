import { IAppState } from "@/types/store/app.store.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAppState = {
  isLoginOpen: false,
  isRegisterOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleLoginForm: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
    openLoginForm: (state) => {
      state.isLoginOpen = true;
    },
    closeLoginForm: (state) => {
      state.isLoginOpen = false;
    },

    // Các actions cho form đăng ký
    toggleRegisterForm: (state) => {
      state.isRegisterOpen = !state.isRegisterOpen;
    },
    openRegisterForm: (state) => {
      state.isRegisterOpen = true;
    },
    closeRegisterForm: (state) => {
      state.isRegisterOpen = false;
    },
  },
});

export const {
  toggleLoginForm,
  openLoginForm,
  closeLoginForm,
  toggleRegisterForm,
  openRegisterForm,
  closeRegisterForm,
} = appSlice.actions;

export default appSlice.reducer;

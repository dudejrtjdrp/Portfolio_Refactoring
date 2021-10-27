import { createSlice } from '@reduxjs/toolkit';

export const isLoginCheck = createSlice({
  name: 'isLogin',
  initialState: {
    value: false,
  },
  reducers: {
    login: state => {
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const { login, logout } = isLoginCheck.actions;

export const loginValid = state => state.isLogin.value;

export default isLoginCheck.reducer;

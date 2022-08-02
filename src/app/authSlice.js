import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from '../services/api';
import localStorage from '../utils/localStorage';

const initialState = {
  logged: localStorage.read('logged') || false,
  loading: localStorage.read('loading') || false,
  user: localStorage.read('user') || {},
  token: localStorage.read('token') || ''
};

export const authLogin = createAsyncThunk('[auth]/login', async ({ email, password }, thunkAPI) => {
  return await api.login(email, password);
});

export const authSlice = createSlice({
  name: '[auth]',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state,
      initialState
    })
  },
  extraReducers: {
    [authLogin.pending]: (state) => ({
      ...state,
      loading: true
    }),
    [authLogin.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      logged: true,
      user: { ...action.payload.user },
      token: action.payload.token
    }),
    [authLogin.rejected]: (state) => ({
      ...state,
      loading: false
    })
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

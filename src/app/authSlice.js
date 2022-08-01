import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logged: false,
  user: {}
};

/* export const authLogin = createAsyncThunk('[auth]/login', async ({ email, password }, thunkAPI) => {
  return await authService.login(email, password);
}); */

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state,
      initialState
    })
    /*     extraReducers: {
      [authLogin.pending]: (state) => ({
        ...state,
        loading: true
      }),
      [authLogin.fulfilled]: (state, action) => ({
        ...state,
        loading: false,
        logged: true,
        token: action.payload
      }),
      [authLogin.rejected]: (state) => ({
        ...state,
        loading: false
      })
    } */
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

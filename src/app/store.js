import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export default store;

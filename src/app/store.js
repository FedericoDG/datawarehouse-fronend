import { configureStore } from '@reduxjs/toolkit';

import { citiesApi } from './citiesApi';
import { companiesApi } from './companiesApi';
import { contactsApi } from './contactsApi';
import { countriesApi } from './countriesApi';
import { regionsApi } from './regionsApi';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [regionsApi.reducerPath]: regionsApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(companiesApi.middleware)
      .concat(regionsApi.middleware)
      .concat(countriesApi.middleware)
      .concat(citiesApi.middleware)
});

export default store;

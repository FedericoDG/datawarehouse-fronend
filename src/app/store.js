import { configureStore } from '@reduxjs/toolkit';

import { citiesApi } from './citiesApi';
import { companiesApi } from './companiesApi';
import { contactsApi } from './contactsApi';
import { countriesApi } from './countriesApi';
import { regionsApi } from './regionsApi';
import { usersApi } from './usersApi';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [regionsApi.reducerPath]: regionsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(citiesApi.middleware)
      .concat(companiesApi.middleware)
      .concat(contactsApi.middleware)
      .concat(countriesApi.middleware)
      .concat(regionsApi.middleware)
      .concat(usersApi.middleware)
});

export default store;

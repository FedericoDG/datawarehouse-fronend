/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countries',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['countries'],
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => '/countries',
      providesTags: ['countries']
    }),
    getCountry: builder.query({
      query: (id) => `/countries/${id}`,
      providesTags: ['countries']
    }),
    addCountry: builder.mutation({
      query: (country) => ({
        url: '/countries',
        method: 'POST',
        body: country
      }),
      invalidatesTags: ['countries']
    }),
    editCountry: builder.mutation({
      query: ({ id_country, ...rest }) => ({
        url: `/countries/${id_country}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['countries']
    }),
    deteleCountry: builder.mutation({
      query: (id) => ({
        url: `/countries/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['countries']
    })
  })
});

export const { useGetCountriesQuery, useGetCountryQuery, useAddCountryMutation, useEditCountryMutation, useDeteleCountryMutation } =
  countriesApi;

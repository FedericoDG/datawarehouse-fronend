/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const citiesApi = createApi({
  reducerPath: 'cities',
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
  tagTypes: ['cities'],
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => '/cities',
      providesTags: ['cities']
    }),
    getCity: builder.query({
      query: (id) => `/cities/${id}`,
      providesTags: ['cities']
    }),
    addCity: builder.mutation({
      query: (city) => ({
        url: '/cities',
        method: 'POST',
        body: city
      }),
      invalidatesTags: ['cities']
    }),
    editCity: builder.mutation({
      query: ({ id_city, ...rest }) => ({
        url: `/cities/${id_city}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['cities']
    }),
    deleteCity: builder.mutation({
      query: (id) => ({
        url: `/cities/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['cities']
    })
  })
});

export const { useGetCitiesQuery, useGetCityQuery, useAddCityMutation, useEditCityMutation, useDeleteCityMutation } = citiesApi;

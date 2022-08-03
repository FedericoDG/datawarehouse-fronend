/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const regions = createApi({
  reducerPath: 'regions',
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
  tagTypes: ['regions'],
  endpoints: (builder) => ({
    getRegions: builder.query({
      query: () => '/regions',
      providesTags: ['regions']
    }),
    getRegion: builder.query({
      query: () => '/regions',
      providesTags: ['regions']
    }),
    addRegion: builder.mutation({
      query: (region) => ({
        url: '/regions',
        method: 'POST',
        body: region
      }),
      invalidatesTags: ['regions']
    }),
    editRegion: builder.mutation({
      query: (id_region, ...rest) => ({
        url: `/regions/${id_region}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['regions']
    }),
    deleteRegion: builder.mutation({
      query: (id) => ({
        url: `/regions/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['regions']
    })
  })
});

export const { useGetRegionsQuery, useGetRegionQuery, useAddRegionMutation, useEditRegionMutation, useDeleteRegionMutation } = regions;

/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companiesApi = createApi({
  reducerPath: 'companies',
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
  tagTypes: ['companies'],
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => '/companies',
      providesTags: ['companies']
    }),
    getCompany: builder.query({
      query: (id) => `/companies/${id}`,
      providesTags: ['companies']
    }),
    addCompany: builder.mutation({
      query: (company) => ({
        url: '/companies',
        method: 'POST',
        body: company
      }),
      invalidatesTags: ['companies']
    }),
    editCompany: builder.mutation({
      query: ({ id_company, ...rest }) => ({
        url: `/companies/${id_company}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['companies']
    }),
    deteleCompany: builder.mutation({
      query: (id) => ({
        url: `/companies/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['companies']
    })
  })
});

export const { useGetCompaniesQuery, useGetCompanyQuery, useAddCompanyMutation, useEditCompanyMutation, useDeteleCompanyMutation } =
  companiesApi;

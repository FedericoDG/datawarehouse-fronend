/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'users',
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
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      transformResponse: (response) => response.users,
      providesTags: ['users']
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      transformResponse: (response) => response.user,
      providesTags: ['users']
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['users']
    }),
    editUser: builder.mutation({
      query: ({ id_user, ...rest }) => ({
        url: `/users/${id_user}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['users']
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['users']
    })
  })
});

export const { useGetUsersQuery, useGetUserQuery, useAddUserMutation, useEditUserMutation, useDeleteUserMutation } = usersApi;

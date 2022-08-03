/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
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
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts']
    }),
    getContact: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts']
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact
      }),
      invalidatesTags: ['contacts']
    }),
    editContact: builder.mutation({
      query: ({ id_contact, ...rest }) => ({
        url: `/contacts/${id_contact}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['contacts']
    }),
    deteleContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['contacts']
    })
  })
});

export const { useGetContactsQuery, useGetContactQuery, useAddContactMutation, useEditContactMutation, useDeteleContactMutation } =
  contactsApi;

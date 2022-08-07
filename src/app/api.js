/* eslint-disable camelcase */
import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

export const api = createApi({
  baseQuery,
  reducerPath: 'api',
  tagTypes: ['contacts', 'companies', 'regions', 'countries', 'cities'],
  endpoints: (builder) => ({
    /* CONTACTS */
    getContacts: builder.query({
      query: (filter) => `/contacts?filter=${filter}`,
      transformResponse: (response) => response.contacts,
      providesTags: ['contacts', 'cities']
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
    }),
    /* COMPANIES */
    getCompanies: builder.query({
      query: () => '/companies',
      transformResponse: (response) => response.companies,
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
      invalidatesTags: ['companies', 'contacts']
    }),
    deteleCompany: builder.mutation({
      query: (id) => ({
        url: `/companies/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['companies', 'contacts']
    }),
    /* CITIES */
    getCities: builder.query({
      query: () => '/cities',
      transformResponse: (response) => response.cities,
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
      invalidatesTags: ['cities', 'contacts', 'companies']
    }),
    deleteCity: builder.mutation({
      query: (id) => ({
        url: `/cities/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['cities', 'contacts', 'companies']
    }),
    /* COUNTRIES */
    getCountries: builder.query({
      query: () => '/countries',
      transformResponse: (response) => response.countries,
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
      invalidatesTags: ['countries', 'cities']
    }),
    deteleCountry: builder.mutation({
      query: (id) => ({
        url: `/countries/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['countries', 'cities', 'contacts', 'companies']
    }),
    /* REGIONS */
    getRegions: builder.query({
      query: () => '/regions',
      transformResponse: (response) => response.regions,
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
      query: ({ id_region, ...rest }) => ({
        url: `/regions/${id_region}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['regions', 'countries']
    }),
    deleteRegion: builder.mutation({
      query: (id) => ({
        url: `/regions/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['regions', 'countries', 'cities', 'contacts', 'companies']
    }),
    /* USERS */
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

export const {
  // CONTACTS
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeteleContactMutation,
  // COMPANIES
  useGetCompaniesQuery,
  useAddCompanyMutation,
  useEditCompanyMutation,
  useDeteleCompanyMutation,
  // CITIES
  useGetCitiesQuery,
  useAddCityMutation,
  useEditCityMutation,
  useDeleteCityMutation,
  // COUNTRIES
  useGetCountriesQuery,
  useAddCountryMutation,
  useEditCountryMutation,
  useDeteleCountryMutation,
  // REGIONS
  useGetRegionsQuery,
  useAddRegionMutation,
  useEditRegionMutation,
  useDeleteRegionMutation,
  // USERS
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation
} = api;

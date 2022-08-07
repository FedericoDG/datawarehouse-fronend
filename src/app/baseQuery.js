import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/v1`,
  prepareHeaders: (headers, { getState }) => {
    headers.set('Accept', 'application/json');
    headers.set('Cache-Control', 'no-cache');
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');

    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }
});

export default baseQuery;

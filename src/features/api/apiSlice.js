import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/v1', // Adjust to your backend URL
        prepareHeaders: (headers, { getState }) => {
            // Optionally add headers, e.g., for authentication
            // const token = getState().auth.token;
            // if (token) {
            //   headers.set('authorization', `Bearer ${token}`);
            // }
            return headers;
        },
    }),
    tagTypes: ['Category', 'Post'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: (locale) => ({
                url: '/categories',
                params: { locale }, // Pass locale as query parameter
            }),
            providesTags: ['Category'],
            transformResponse: (response) => response.data, // Extract data from response
        }),
        getRecentPosts: builder.query({
            query: (locale) => ({
                url: '/posts',
                params: { limit: 4, locale }, // Fetch 4 recent posts
            }),
            providesTags: ['Post'],
            transformResponse: (response) => response.data, // Extract data from response
        }),
    }),
});

// Export the auto-generated hooks
export const { useGetCategoriesQuery, useGetRecentPostsQuery } = apiSlice;
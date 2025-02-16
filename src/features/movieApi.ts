// src/features/movieApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '25a6a722deb1577614deec6fac0fee61'; // Replace with your TMDb API key

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    overview: string;
}

interface MovieResponse {
    results: Movie[];
}

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<MovieResponse, number>({
        query: (page = 1) => `movie/popular?api_key=${API_KEY}&page=${page}`,
        }),
        searchMovies: builder.query<MovieResponse, string>({
        query: (query) => `search/movie?api_key=${API_KEY}&query=${query}`,
        }),
        getMovieDetails: builder.query<Movie, number>({
        query: (id) => `movie/${id}?api_key=${API_KEY}`,
        }),
        getGenres: builder.query({
        query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
    }),
    });

    export const {
    useGetPopularMoviesQuery,
    useSearchMoviesQuery,
    useGetMovieDetailsQuery,
    useGetGenresQuery,
} = movieApi;
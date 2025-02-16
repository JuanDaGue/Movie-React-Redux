import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_API_KEY ;
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
interface Genre {
        id: number;
        name: string;
    }
    
    interface GenresResponse {
        genres: Genre[];
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
        getGenres: builder.query <GenresResponse, void>({
        query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
        getMoviesByGenre: builder.query({
            query: ({ genreId, page = 1 }) =>
            `discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`,
        }),
    }),
    });

    export const {
    useGetPopularMoviesQuery,
    useSearchMoviesQuery,
    useGetMovieDetailsQuery,
    useGetGenresQuery,
    useGetMoviesByGenreQuery,
} = movieApi;
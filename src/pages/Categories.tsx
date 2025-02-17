
import React, { useState } from 'react';
import {
    useGetPopularMoviesQuery,
    useGetMoviesByGenreQuery,
    useSearchMoviesQuery,
} from '../features/movieApi';
import MovieList from '../components/MovieList';
import GenreFilter from '../components/GenreFilter';
import SearchBar from '../components/SearchBar';
import SkeletonLoader from '../components/SkeletonLoader';

    const Categories: React.FC = () => {
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const { data: popularMovies, error: popularError, isLoading: popularLoading } =
        useGetPopularMoviesQuery(page);

    const {
        data: genreMovies,
        error: genreError,
        isLoading: genreLoading,
    } = useGetMoviesByGenreQuery(
        { genreId: selectedGenre!, page },
        { skip: !selectedGenre }
    );

    const {
        data: searchResults,
        error: searchError,
        isLoading: searchLoading,
    } = useSearchMoviesQuery(searchQuery, { skip: !searchQuery });

    let movies;
    if (searchQuery) {
        movies = searchResults?.results;
    } else if (selectedGenre) {
        movies = genreMovies?.results;
    } else {
        movies = popularMovies?.results;
    }

    const isLoading = searchQuery
        ? searchLoading
        : selectedGenre
        ? genreLoading
        : popularLoading;

    const error = searchQuery
        ? searchError
        : selectedGenre
        ? genreError
        : popularError;

    if (error) {
        const errorMessage =
            'status' in error
                ? `Error: ${error.status}`
                : error.message || 'An unknown error occurred';
        return <div>{errorMessage}</div>;
    }

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <SearchBar onSearch={setSearchQuery} />
        <GenreFilter onGenreSelect={setSelectedGenre} />
        {isLoading ? (
            <SkeletonLoader />
        ) : (
            <>
            {movies?.length === 0 ? (
                <p className="text-gray-600">No movies found.</p>
            ) : (
                <MovieList movies={movies || [] }  onMovieHover={() => {}}/>
            )}
            {!searchQuery && (
                <button
                onClick={() => setPage(page + 1)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                Load More
                </button>
            )}
            </>
        )}
        </div>
    );
    };

    export default Categories;
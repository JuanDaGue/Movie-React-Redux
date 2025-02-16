// src/pages/Home.tsx
import React, { useState } from 'react';
import { useGetPopularMoviesQuery, useGetMoviesByGenreQuery } from '../features/movieApi';
import MovieList from '../components/MovieList';
import GenreFilter from '../components/GenreFilter';

const Categories: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

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

  const movies = selectedGenre ? genreMovies?.results : popularMovies?.results;
  const isLoading = selectedGenre ? genreLoading : popularLoading;
  const error = selectedGenre ? genreError : popularError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <GenreFilter onGenreSelect={setSelectedGenre} />
      <MovieList movies={movies || []} />
      <button
        onClick={() => setPage(page + 1)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load More
      </button>
    </div>
  );
};

export default Categories;
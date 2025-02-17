// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from '../features/movieApi';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import SkeletonLoader from '../components/SkeletonLoader';
import Hero from '../components/Hero'; // Import Hero component

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState<any>(null); // State for hovered movie

  const { data: popularMovies, error: popularError, isLoading: popularLoading } =
    useGetPopularMoviesQuery(page);

  const {
    data: searchResults,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchMoviesQuery(searchQuery, { skip: !searchQuery });

  // Combine movies from popular and search results
  useEffect(() => {
    if (searchQuery) {
      // Reset movies when searching
      setMovies(searchResults?.results || []);
      setHasMore(false); // Disable infinite scroll for search results
    } else {
      // Append new movies when loading more
      setMovies((prevMovies) => [...prevMovies, ...(popularMovies?.results || [])]);
      setHasMore(!!popularMovies?.results.length); // Enable infinite scroll if there are more results
    }
  }, [popularMovies, searchResults, searchQuery]);

  // Load more movies for infinite scroll
  const loadMoreMovies = () => {
    if (!searchQuery) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const isLoading = searchQuery ? searchLoading : popularLoading;
  const error = searchQuery ? searchError : popularError;

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
      <Hero movie={hoveredMovie} /> 
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <InfiniteScroll
          dataLength={movies.length} 
          next={loadMoreMovies} 
          hasMore={hasMore} 
          loader={<SkeletonLoader />} 
          endMessage={
            <p className="text-center text-gray-600 mt-4">
              No more movies to load.
            </p>
          }
        >
              <MovieList movies={movies} onMovieHover={setHoveredMovie} /> 
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Home;

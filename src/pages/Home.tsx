import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetPopularMoviesQuery, useSearchMoviesQuery } from '../features/movieApi';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import SkeletonLoader from '../components/SkeletonLoader';
import Hero from '../components/Hero'; 
import { useTheme } from '../context/ThemeContext'; 
const Home: React.FC = () => {
  const { isDarkMode } = useTheme(); 
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState<any>(null);

  const { data: popularMovies, error: popularError, isLoading: popularLoading } =
    useGetPopularMoviesQuery(page);

  const {
    data: searchResults,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchMoviesQuery(searchQuery, { skip: !searchQuery });

  useEffect(() => {
    if (searchQuery) {
      setMovies(searchResults?.results || []);
      setHasMore(false);
    } else {
      setMovies((prevMovies) => [...prevMovies, ...(popularMovies?.results || [])]);
      setHasMore(!!popularMovies?.results.length);
    }
  }, [popularMovies, searchResults, searchQuery]);

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
    <div className={`p-4 ${isDarkMode ? ' text-white' : 'bg-white text-gray-900'}`}>
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

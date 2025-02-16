import React, { useState } from 'react';
import { useGetPopularMoviesQuery } from '../features/movieApi';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetPopularMoviesQuery(page);
  console.log("Home", data);
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    if ('status' in error) {
      return <div>Error: {error.status}</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <MovieList movies={data?.results || []} />
      <button
        onClick={() => setPage(page + 1)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load More
      </button>
    </div>
  );
};

export default Home;
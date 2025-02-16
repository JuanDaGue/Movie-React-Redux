// src/components/MovieList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="border p-4 rounded">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <p>Release Date: {movie.release_date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
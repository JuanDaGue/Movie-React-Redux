import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { useTheme } from '../context/ThemeContext';
import { MovieListProps } from '../types';
const MovieList: React.FC<MovieListProps> =  React.memo(({ movies, onMovieHover }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <div key={index} 
        className={`${isDarkMode ? 'movielist' : 'bg-white text-gray-900'} border p-4 rounded relative`} 
        onMouseEnter={() => onMovieHover(movie)}
        //onMouseLeave={() => onMovieHover(null)} 
        >
          <FavoriteButton movie={movie} />
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
});

export default MovieList;
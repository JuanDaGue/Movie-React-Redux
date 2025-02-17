import React from 'react';

interface HeroProps {
  movie: any; // Replace with your movie type if available
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="hero-container p-4 bg-gray-800 text-white mb-4">
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default Hero;

import React from 'react';

interface HeroProps {
  movie: any; // Replace with your movie type if available
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
    if (!movie) return null;
    console.log("Hero", movie);
    return (
        <div className="max-h-150 hero-container p-8  text-white mb-4 m-6 rounded-md flex flex-col md:flex-row">
            <div className="hero-image md:w-1/2 max-h-125 md:max-h-full">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={movie?.title}
                    className="w-full   rounded-md"
                />
            </div>
            <div className="hero-details md:w-1/2 w-full md:pl-4 mt-4 md:mt-0">
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                <p className="mb-2">{movie.overview}</p>
                <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default Hero;

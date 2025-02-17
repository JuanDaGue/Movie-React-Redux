import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import MovieList from '../components/MovieList';

const Favorites: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.favorites.favorites);

    return (
        <div>
        <h2 className="text-xl font-bold mb-4">Favorites</h2>
        {favorites.length > 0 ? (
            <MovieList movies={favorites} onMovieHover={() => {}}/>
        ) : (
            <p>No favorites added yet.</p>
        )}
        </div>
    );
};

export default Favorites;
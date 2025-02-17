import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import MovieList from '../components/MovieList';
import { removeFromFavorites } from '../features/favoritesSlice';

const Favorites: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.favorites.favorites);
    const dispatch = useDispatch();

    const handleClearFavorites = () => {
        favorites.forEach((movie) => dispatch(removeFromFavorites(movie.id)));
    };

  return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Favorite Movies</h2>
        {favorites.length > 0 ? (
            <>
            <button
                onClick={handleClearFavorites}
                className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
                Clear All Favorites
            </button>
            <MovieList movies={favorites} onMovieHover={() => {}} />
            </>
        ) : (
            <p className="text-gray-600">No favorite movies yet.</p>
        )}
        </div>
    );
};

export default Favorites;
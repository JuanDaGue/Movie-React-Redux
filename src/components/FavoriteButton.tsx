// src/components/FavoriteButton.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/favoritesSlice';
import { RootState } from '../store';
import { FavoriteButtonProps } from '../types';


const FavoriteButton: React.FC<FavoriteButtonProps> =  React.memo(({ movie }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.favorites);
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
        dispatch(removeFromFavorites(movie.id));
        } else {
        dispatch(addToFavorites(movie));
        }
    };

    return (
        <button
        onClick={handleToggleFavorite}
        className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite ? 'bg-white' : 'bg-gray-800'
        } text-white hover:bg-red-600 transition-colors`}
        >
        {isFavorite ? '❤️' : '🤍'}
        </button>
    );
});

export default FavoriteButton;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, FavoritesState } from '../types';

// Cargar favoritos desde localStorage
const loadFavoritesFromLocalStorage = (): Movie[] => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const initialState: FavoritesState = {
  favorites: loadFavoritesFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: 'favoritesR',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      if (!state.favorites.some((fav) => fav.id === movie.id)) {
        state.favorites.push(movie);
        localStorage.setItem('favoritesR', JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== action.payload);
      localStorage.setItem('favoritesR', JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
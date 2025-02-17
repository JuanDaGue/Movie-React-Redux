import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './features/movieApi';
import favoritesReducer from './features/favoritesSlice';
import userReducer from './features/userSlice';
export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
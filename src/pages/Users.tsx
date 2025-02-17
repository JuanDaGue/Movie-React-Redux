
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import MovieList from '../components/MovieList';

const User: React.FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const favorites = useSelector((state: RootState) => state.favorites.favorites);

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>

        {/* Información del usuario */}
        <div className="p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center space-x-4">
            <img
                src={user.avatar || 'https://via.placeholder.com/150'}
                alt="User Avatar"
                className="w-24 h-24 rounded-full"
            />
            <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
            </div>
            </div>

            {/* Botones de acción */}
            <div className="mt-4 space-x-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                Edit Profile
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                Change Password
            </button>
            </div>
        </div>

        {/* Películas favoritas */}
        <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Favorite Movies</h2>
            {favorites.length > 0 ? (
            <MovieList movies={favorites} />
            ) : (
            <p className="text-gray-200">No favorite movies yet.</p>
            )}
        </div>
        </div>
    );
};

export default User;
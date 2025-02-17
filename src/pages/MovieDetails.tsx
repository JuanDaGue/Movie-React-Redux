import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../features/movieApi';
import { useTheme } from '../context/ThemeContext';

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = useGetMovieDetailsQuery(Number(id));
    const { isDarkMode} = useTheme();
    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
        <p className="ml-4 text-xl text-gray-700">Loading...</p>
    </div>;
    
    if (error) {
        const errorMessage = 'status' in error ? `Error: ${error.status}` : error.message;
        return <div className="text-red-500 text-center mt-4">{errorMessage}</div>;
    }

    return (
        <div className={`p-4 max-w-4xl mx-auto ${isDarkMode ? ' text-gray-100' : 'bg-white text-gray-900'} rounded-lg shadow-lg`}>
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">{data?.title}</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={data?.title}
            className="w-64 h-auto mb-4 md:mb-0 md:mr-8 rounded-lg shadow-md"
            />
            <div>
            <p className="mb-4 text-lg">{data?.overview}</p>
            <p className="mb-2"><strong className="text-yellow-400">Rating:</strong> {data?.vote_average}</p>
            <p><strong className="text-yellow-400">Release Date:</strong> {data?.release_date}</p>
            </div>
        </div>
        </div>
    );
};

export default MovieDetails;

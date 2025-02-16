// src/pages/MovieDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../features/movieApi';

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = useGetMovieDetailsQuery(Number(id));
    console.log("MovieDetails", data);  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{data?.title}</h1>
        <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={data?.title}
            className="w-48 mb-4"
        />
        <p>{data?.overview}</p>
        <p>Rating: {data?.vote_average}</p>
        <p>Release Date: {data?.release_date}</p>
        </div>
    );
};

export default MovieDetails;
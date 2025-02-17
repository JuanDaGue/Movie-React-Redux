import React, { useState } from 'react';
import { useGetGenresQuery } from '../features/movieApi';

interface GenreFilterProps {
    onGenreSelect: (genreId: number | null) => void;
    }

    const GenreFilter: React.FC<GenreFilterProps> =  React.memo(({ onGenreSelect }) => {
    const { data, error, isLoading } = useGetGenresQuery();
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

    if (isLoading) return <div>Loading genres...</div>;
    if (error) return <div>Error loading genres</div>;

    const handleGenreClick = (genreId: number) => {
        if (selectedGenre === genreId) {
        setSelectedGenre(null);
        onGenreSelect(null);
        } else {
        setSelectedGenre(genreId);
        onGenreSelect(genreId);
        }
    };

    return (
        <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Filter by Genre</h3>
        <div className="flex flex-wrap gap-2">
            {data?.genres.map((genre) => (
            <button
                key={genre.id}
                onClick={() => handleGenreClick(genre.id)}
                className={`px-4 py-2 rounded-full ${
                selectedGenre === genre.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                } hover:bg-blue-500 hover:text-white transition-colors`}
            >
                {genre.name}
            </button>
            ))}
        </div>
        </div>
    );
});  

export default GenreFilter;
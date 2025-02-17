import React, { useState } from 'react';
import { useGetGenresQuery } from '../features/movieApi';

interface GenreFilterProps {
    onGenreSelect: (genreId: number | null) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = React.memo(({ onGenreSelect }) => {
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
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Filter by Genre</h3>
            <div className="flex flex-wrap gap-3">
                {data?.genres.map((genre) => (
                    <button
                        key={genre.id}
                        onClick={() => handleGenreClick(genre.id)}
                        className={`px-5 py-3 rounded-full transition-all duration-300 
                            ${selectedGenre === genre.id
                            ? 'bg-yellow-400 text-gray-900'
                            : 'bg-gray-700 text-gray-200'} 
                            hover:bg-yellow-500 hover:text-white`}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>
        </div>
    );
});

export default GenreFilter;

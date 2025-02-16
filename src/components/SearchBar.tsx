
import React, { useState, useEffect } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    }

    const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
        onSearch(query);
        }, 500); // 500ms delay

        return () => clearTimeout(delayDebounceFn);
    }, [query, onSearch]);

    return (
        <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <div className="flex">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
            />
            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
            >
            Search
            </button>
        </div>
        </form>
    );
};

export default SearchBar;
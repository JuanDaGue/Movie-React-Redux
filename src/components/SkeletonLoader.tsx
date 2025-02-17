import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border p-4 rounded animate-pulse">
            <div className="bg-gray-300 h-64 w-full mb-2 rounded"></div>
            <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
            </div>
        ))}
        </div>
    );
};

export default SkeletonLoader;
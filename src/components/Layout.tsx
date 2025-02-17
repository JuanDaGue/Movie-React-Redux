import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
    }

    const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return (
        <div className="min-h-screen text-gray-100">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-yellow-400 mb-2">
                {title}
            </h1>
            <nav className="mt-4">
                <Link
                to="/"
                className="mr-4 text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                >
                Home
                </Link>
                <Link
                to="/categories"
                className="mr-4 text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                >
                Categories
                </Link>
                <Link
                to="/favorites"
                className="mr-4 text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                >
                Favorites
                </Link>
                <Link
                to="/users"
                className="mr-4 text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                >
                Users
                </Link>
            </nav>
            </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-4">
            {children}
        </main>
        </div>
    );
};

export default Layout;

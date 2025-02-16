import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
    }

    const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return (
        <div className="min-h-screen">
        {/* Header */}
        <header className= "text-white p-4">
            <div className="container mx-auto">
            <h1 className="text-2xl font-bold">{title}</h1>
            <nav className="mt-2">
                <Link to="/" className="mr-4 hover:underline">
                Home
                </Link>
                <Link to="/categories" className="mr-4 hover:underline">
                Categories
                </Link>
                <Link to="/favorites" className="mr-4 hover:underline">
                Favorites
                </Link>
                <Link to="/users" className="mr-4 hover:underline">
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
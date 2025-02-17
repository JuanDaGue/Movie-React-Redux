import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaHome, FaUserAlt, FaMoon, FaSun } from 'react-icons/fa'; // Import icons

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen ${isDarkMode ? ' text-gray-100' : 'bg-white text-gray-900'}`}>
            {/* Header */}
            <header className={`p-4 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-yellow-400 mb-2">
                        {title}
                    </h1>
                    <nav className="flex items-center space-x-4">
                        {/* Navigation Links with Icons */}
                        <Link to="/" className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300">
                            <FaHome size={20} />
                        </Link>
                        <Link to="/categories" className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300">
                            Categories
                        </Link>
                        <Link to="/favorites" className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300">
                            Favorites
                        </Link>
                        <Link to="/users" className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300">
                            <FaUserAlt size={20} />
                        </Link>
                        {/* Dark Mode Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                        >
                            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-4">{children}</main>
        </div>
    );
};

export default Layout;

import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark'); // Add dark class
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            document.documentElement.classList.remove('dark'); // Remove dark class
            localStorage.setItem('theme', 'light'); // Save preference
        }
    };

    useEffect(() => {
        // Check localStorage for theme preference on initial load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    return (
        <header className="sticky top-0 z-10 shadow-lg w-full bg-white dark:bg-gray-900 dark:text-white">
            <nav className="mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Small Image */}
                    <img src="me.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
                    <span className="text-xl font-semibold">Portfolio</span>
                </div>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex justify-center flex-grow space-x-8">
                    {/* Navigation Buttons */}
                    <a href="#home" className="hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded">Home</a>
                    <a href="#about" className="hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded">About</a>
                    <a href="#services" className="hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded">Services</a>
                    <a href="#contact" className="hover:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded">Contact</a>
                </div>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-4 space-y-4">
                    <a href="#home" className="block px-4 py-2">Home</a>
                    <a href="#about" className="block px-4 py-2">About</a>
                    <a href="#services" className="block px-4 py-2">Services</a>
                    <a href="#contact" className="block px-4 py-2">Contact</a>
                </div>
            )}
        </header>
    );
}

export default Header;

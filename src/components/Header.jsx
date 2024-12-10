import React, { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import './css/Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    // Menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Dark mode toggle
    const toggleDarkMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.className = theme; // Apply the theme to the body
    }, [theme]);

    return (
        <header className="sticky top-0 z-10 shadow-lg w-full ">
            <nav className="mx-auto p-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img src="me.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
                    <span className="text-xl font-semibold">Portfolio</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center flex-grow space-x-8">
                    <a href="#home" className="px-3 py-2 rounded">
                        Home
                    </a>
                    <a href="#about" className="px-3 py-2 rounded">
                        About
                    </a>
                    <a href="#services" className="px-3 py-2 rounded">
                        Services
                    </a>
                    <a href="#contact" className="px-3 py-2 rounded">
                        Contact
                    </a>
                </div>

                {/* Dark Mode Toggle Button */}
                <button onClick={toggleDarkMode}>
                    {theme === "dark" ? (
                        <FaLightbulb className="p-2 rounded-full text-yellow-400 text-4xl hover:bg-gray-900" title="Light Mode"/>
                    ) : (
                        <FaLightbulb className="p-2 rounded-full text-black text-4xl hover:bg-gray-200" title="Dark Mode"/>
                    )}
                </button>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-4 space-y-4">
                    <a href="#home" className="block px-4 py-2">
                        Home
                    </a>
                    <a href="#about" className="block px-4 py-2">
                        About
                    </a>
                    <a href="#services" className="block px-4 py-2">
                        Services
                    </a>
                    <a href="#contact" className="block px-4 py-2">
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}

                    <div className="flex items-center space-x-3">
                        <img
                            src="src/assets/logo.jpeg"
                            alt="Al Falah Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="text-green-800 font-extrabold text-xl sm:text-2xl">
                            Al Falah <br className="sm:hidden" /> Islamic Centre
                        </span>
                    </div>
                    {/* Hamburger */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-green-800 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Links */}
                    <div className="hidden sm:flex space-x-6 text-sm sm:text-base">
                        <a href="#home" className="text-gray-800 hover:text-green-800">Home</a>
                        <a href="#prayer" className="text-gray-800 hover:text-green-800">Prayer Times</a>
                        <a href="#calendar" className="text-gray-800 hover:text-green-800">Calendar</a>
                        <a href="#donate" className="text-gray-800 hover:text-green-800">Donate</a>
                        <a href="#contact" className="text-gray-800 hover:text-green-800">Contact</a>
                    </div>
                </div>

                {/* Mobile Links */}
                {isOpen && (
                    <div className="sm:hidden mt-2 space-y-2 pb-4">
                        <a href="#home" className="block text-gray-800 hover:text-green-800">Home</a>
                        <a href="#prayer" className="block text-gray-800 hover:text-green-800">Prayer Times</a>
                        <a href="#calendar" className="block text-gray-800 hover:text-green-800">Calendar</a>
                        <a href="#donate" className="block text-gray-800 hover:text-green-800">Donate</a>
                        <a href="#contact" className="block text-gray-800 hover:text-green-800">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    );
}

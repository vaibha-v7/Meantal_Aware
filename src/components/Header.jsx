import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-purple-800">
            MindfulAware
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-700 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-700 font-medium">
            About
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-purple-700 font-medium">
            Resources
          </Link>
          <Link to="/surveys" className="text-gray-700 hover:text-purple-700 font-medium">
            Surveys
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-700 font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/get-help" className="btn">
            Get Help Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link
              to="/surveys"
              className="text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              Surveys
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/get-help"
              className="btn w-full text-center"
              onClick={toggleMenu}
            >
              Get Help Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 
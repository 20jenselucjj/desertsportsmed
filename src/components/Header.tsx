import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/dsm-logo.png" alt="Desert Sports Med Logo" className="h-16" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="text-gray-800 hover:text-dsm-red font-medium">
            About
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-dsm-red font-medium">
            Services
          </Link>
          <div className="relative group" tabIndex={0}>
            <Link to="/programs" className="text-gray-800 hover:text-dsm-red font-medium flex items-center">
              Programs
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 hidden group-hover:block">
              <Link
                to="/programs/performance-therapy"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                1:1 Performance Therapy
              </Link>
              <Link
                to="/programs/sports-performance"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                Sports Performance
              </Link>
              <Link
                to="/programs/semi-private-training"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                Semi-Private Training
              </Link>
              <Link
                to="/programs/small-group-training"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                Small Group Training
              </Link>
              <Link
                to="/programs/online-training"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                Online Training
              </Link>
            </div>
          </div>
          <Link to="/pricing" className="text-gray-800 hover:text-dsm-red font-medium">
            Pricing
          </Link>
          <div className="relative group" tabIndex={0}>
            <Link to="/book-online" className="text-gray-800 hover:text-dsm-red font-medium flex items-center">
              Book Online
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 hidden group-hover:block">
              <Link
                to="/book-online/performance-therapy"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                1:1 Performance Therapy Schedule
              </Link>
              <Link
                to="/book-online/training"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-dsm-red dropdown-item"
              >
                Training Schedule
              </Link>
            </div>
          </div>
        </nav>

        <Link
          to="/free-intro"
          className="hidden md:block dsm-gradient-btn px-6 py-2 rounded-full font-bold text-white"
        >
          Free Intro
        </Link>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-md z-20 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/about" className="text-gray-800 hover:text-dsm-red font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-dsm-red font-medium">
                Services
              </Link>
              <Link to="/programs" className="text-gray-800 hover:text-dsm-red font-medium">
                Programs
              </Link>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  to="/programs/performance-therapy"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  1:1 Performance Therapy
                </Link>
                <Link
                  to="/programs/sports-performance"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  Sports Performance
                </Link>
                <Link
                  to="/programs/semi-private-training"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  Semi-Private Training
                </Link>
                <Link
                  to="/programs/small-group-training"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  Small Group Training
                </Link>
                <Link
                  to="/programs/online-training"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  Online Training
                </Link>
              </div>
              <Link to="/pricing" className="text-gray-800 hover:text-dsm-red font-medium">
                Pricing
              </Link>
              <Link to="/book-online" className="text-gray-800 hover:text-dsm-red font-medium">
                Book Online
              </Link>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  to="/book-online/performance-therapy"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  1:1 Performance Therapy Schedule
                </Link>
                <Link
                  to="/book-online/training"
                  className="text-gray-700 hover:text-dsm-red"
                >
                  Training Schedule
                </Link>
              </div>
              <Link
                to="/free-intro"
                className="dsm-gradient-btn px-6 py-2 rounded-full font-bold text-white text-center"
              >
                Free Intro
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

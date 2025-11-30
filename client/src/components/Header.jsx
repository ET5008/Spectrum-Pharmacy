import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white">
      <div className="py-2">
        <div className="flex flex-row w-screen justify-around items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-blue-600">Spectrum</span>
              <span className="text-green-600"> Rx</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 lg:flex text-center">
            <Link to="/" className="text-gray-700 m-2 p-2 hover:text-blue-600 transition-colors text-lg">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 m-2 p-2 hover:text-blue-600 transition-colors text-lg">
              Services
            </Link>
            <Link to="/delivery" className="text-gray-700 m-2 p-2 hover:text-blue-600 transition-colors text-lg">
              Free Delivery
            </Link>
            <Link to="/about" className="text-gray-700 m-2 p-2 hover:text-blue-600 transition-colors text-lg">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 m-2 p-2 hover:text-blue-600 transition-colors text-lg">
              Contact
            </Link>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/refill"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Refill Prescription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/delivery"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
                onClick={toggleMenu}
              >
                Free Delivery
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <a
                href="tel:+1234567890"
                className="text-blue-600 font-semibold py-2 text-lg"
                aria-label="Call pharmacy"
              >
                (123) 456-7890
              </a>
              <Link
                to="/refill"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                onClick={toggleMenu}
              >
                Refill Prescription
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

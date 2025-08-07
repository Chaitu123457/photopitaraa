import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Instagram } from 'lucide-react'
import logo from '../assets/photopitara_logo.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PhotoPitara" className="h-12 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Portfolio
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to="/wedding" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    Wedding Photography
                  </Link>
                  <Link 
                    to="/commercial" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    Commercial Photography
                  </Link>
                  <Link 
                    to="/filmmaking" 
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    Filmmaking
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/testimonials" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Testimonials
            </Link>
            <a 
              href="https://www.instagram.com/photopitaraa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center"
            >
              <Instagram className="w-4 h-4 mr-1" />
              Instagram
            </a>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/wedding" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Wedding Photography
              </Link>
              <Link 
                to="/commercial" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Commercial Photography
              </Link>
              <Link 
                to="/filmmaking" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Filmmaking
              </Link>
              <Link 
                to="/testimonials" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <a 
                href="https://www.instagram.com/photopitaraa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


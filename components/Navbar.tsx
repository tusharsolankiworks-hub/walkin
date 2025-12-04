import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  // Smart scroll handler
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home, navigate to home and pass the section ID to scroll to
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              WALK<span className="text-brand-600">IN</span>.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
            >
              About
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-500 hover:text-brand-600 transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-4 text-base font-medium rounded-md ${isActive('/') ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md focus:outline-none"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md focus:outline-none"
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
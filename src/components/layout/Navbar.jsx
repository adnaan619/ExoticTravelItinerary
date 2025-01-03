import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { SignupModal } from '../auth/SignupModal';
import { LoginModal } from '../auth/LoginModal';
import { 
  Search, 
  Map, 
  Calendar, 
  Compass, 
  Menu, 
  X,
  Heart
} from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Discover', icon: <Compass className="w-4 h-4" /> },
    { name: 'Itineraries', icon: <Map className="w-4 h-4" /> },
    { name: 'Experiences', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Saved', icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <Logo />
              
              {/* Search Bar */}
              <div className="hidden md:flex items-center">
                <div className="relative group">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full 
                                hover:bg-gray-100 transition-colors cursor-pointer">
                    <Search className="w-4 h-4 text-gray-500" />
                    <input 
                      type="text"
                      placeholder="Explore Sri Lanka..."
                      className="bg-transparent border-none outline-none w-64 
                               placeholder-gray-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 
                           transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
              
              <div className="flex items-center space-x-4">
                <button 
                  className="text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Log in
                </button>
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 
                           hover:to-red-700 text-white px-6 py-2 rounded-full transition-all 
                           transform hover:scale-105"
                  onClick={() => setIsSignupModalOpen(true)}
                >
                  Sign up
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 
                             hover:bg-gray-50 rounded-md text-sm font-medium"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
                <div className="pt-4 border-t">
                  <Button 
                    variant="primary"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white 
                             py-2 rounded-full"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SignupModal 
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};
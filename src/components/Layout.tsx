import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/file_00000000270c61f9961ccc062c1eb43f.png" 
                  alt="BlockOnMate Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BlockOnMate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group"
                >
                  <motion.span
                    className={`px-4 py-3 text-base lg:text-lg font-medium transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                )}
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
            >
              <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 sm:px-6 py-3 sm:py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 sm:pt-20 md:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <img 
                    src="/file_00000000270c61f9961ccc062c1eb43f.png" 
                    alt="BlockOnMate Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl sm:text-2xl font-bold">BlockOnMate</span>
              </div>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg leading-relaxed text-base sm:text-lg">
                Leading blockchain and AI development company providing innovative solutions for Web3, artificial intelligence, and modern web development.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-6 sm:mb-8 text-lg sm:text-xl">Navigation</h3>
              <ul className="space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-6 sm:mb-8 text-lg sm:text-xl">Contact</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-400 text-base sm:text-lg">
                <li className="break-all sm:break-normal">hello@blockonmate.com</li>
                <li>+91 98765 43210</li>
                <li className="leading-relaxed">JMD Mega Polish, Gurugram<br />Sector 48, Haryana, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-8 sm:pt-12 text-center">
            <p className="text-gray-400 text-base sm:text-lg">
              &copy; 2025 BlockOnMate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
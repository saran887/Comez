import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', section: 'about' },
    { name: 'Features', section: 'features' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'FAQs', section: 'faqs' },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 `}>
      <div className="container mx-auto px-">
        <div className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-white">
            Comez
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block bg-[rgba(1,34,50,0.7)] px-50 py-6 shadow-[0px_19px_25px_rgba(0,0,0,0.45)] rounded-full">
            <div className="flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => link.section ? scrollToSection(link.section) : link.action()}
                  className="px-4 py-2 rounded-full text-sm md:text-base font-semibold text-white hover:bg-gray-700/50 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-gray-900/95 rounded-lg p-4 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => link.section ? scrollToSection(link.section) : link.action()}
                className="w-full text-left px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

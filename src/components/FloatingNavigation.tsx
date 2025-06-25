import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';



const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-7xl",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <div className="bg-[rgba(255,255,255,0.7)] backdrop-blur-md rounded-xl px-6 h-[56px] shadow-lg border border-gray-200/20 flex items-center justify-between mt-4 transition-all duration-200 hover:saturate-150 hover:bg-white/80">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse">
              {/* Placeholder for logo */}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-200/80 hover:saturate-150 rounded-lg transition-colors duration-200 relative"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Get Started Button */}
            <button 
              className="px-4 py-2 bg-[#6366F1] text-white rounded-lg font-medium hover:scale-105 hover:shadow-lg hover:bg-[#4f46e5] transition-all duration-200 font-inter hidden sm:block"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            <a href="#hero" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">The Shift</a>
            <a href="#struggle" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">Challenge</a>
            <a href="#solution" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">Solution</a>
            <a href="#platform" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">Platform</a>
            <a href="#proof" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">Results</a>
            <a href="#differentiation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">Why Us</a>
          </nav>

          <button className="w-full px-4 py-2 bg-[#6366F1] text-white rounded-lg font-medium hover:bg-[#5355E8] transition-colors duration-200 sm:hidden">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingNavigation;

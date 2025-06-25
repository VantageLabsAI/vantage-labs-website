
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'The Shift' },
  { id: 'struggle', label: 'Challenge' },
  { id: 'solution', label: 'Solution' },
  { id: 'platform', label: 'Platform' },
  { id: 'proof', label: 'Results' },
  { id: 'differentiation', label: 'Why Us' },
  { id: 'cta', label: 'Get Started' },
];

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeSection === item.id
                  ? "bg-indigo text-white shadow-md"
                  : "text-slate hover:text-midnight hover:bg-gray-100/50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavigation;

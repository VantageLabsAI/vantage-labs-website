import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  const scrollToCompanionSection = () => {
    const companionSection = document.getElementById('companion');
    if (companionSection) {
      companionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutionSection = () => {
    const solutionSection = document.getElementById('solution');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStruggleSection = () => {
    const struggleSection = document.getElementById('struggle');
    if (struggleSection) {
      struggleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F9FAFB]"
    >
      {/* Animated particle background */}
      <AnimatedBackground />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight leading-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          Unlock Competitive Advantage with AI That Thinks and Scales<br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-300">
            Like Your Best People
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl text-indigo-500 leading-relaxed max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We build and deploy AI Companions that automate critical thinking, insights, and decisions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-24 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={scrollToCompanionSection}
            className="group px-6 py-3 bg-[#6366F1] text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our AI Companions
          </motion.button>

          <motion.button
            onClick={scrollToSolutionSection}
            className="group px-6 py-3 bg-[#6366F1] text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See the Platform in Action
          </motion.button>

          <motion.button
            onClick={scrollToStruggleSection}
            className="group px-6 py-3 bg-[#6366F1] text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Why AI, Why Now?
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

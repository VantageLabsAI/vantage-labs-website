
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-indigo-300 rounded-full blur-2xl opacity-5 animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-blue-200 rounded-full blur-2xl opacity-5 animate-float-slower" />
        <div className="absolute top-2/3 right-1/2 w-4 h-4 bg-purple-300 rounded-full blur-xl opacity-5 animate-float-slowest" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 section-padding container-wide pt-12 md:pt-16">
        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center min-h-[80vh]">
          {/* Left Side - Text Block */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              Unlock Competitive Advantage with AI That{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
                Thinks and Scales
              </span>{' '}
              Like Your Best People
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl text-slate leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We build and deploy AI Companions that automate critical thinking, insights, and decisions — then govern them through a platform that scales AI across your enterprise with speed and security.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                onClick={scrollToCompanionSection}
                className="group px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our AI Companions
              </motion.button>
              
              <motion.button 
                onClick={scrollToSolutionSection}
                className="group px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See the Platform in Action
              </motion.button>
              
              <motion.button 
                onClick={scrollToStruggleSection}
                className="group px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Why AI, Why Now?
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - AI Companion Visual */}
          <div className="flex items-center justify-center">
            <motion.div
              className="w-full max-w-2xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full filter drop-shadow-2xl"
              >
                <defs>
                  {/* Gradients for the AI Companion */}
                  <radialGradient id="companionGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                  </radialGradient>
                  
                  <linearGradient id="threadGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                  </linearGradient>
                  
                  <radialGradient id="orbGlow" cx="50%" cy="50%" r="30%">
                    <stop offset="0%" stopColor="#F0F9FF" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
                
                <g transform="translate(300 300)">
                  {/* Background ethereal glow */}
                  <motion.circle
                    r="250"
                    fill="url(#companionGlow)"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: [0.3, 0.1, 0.3] }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating data streams */}
                  {[...Array(8)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M${Math.cos(i * Math.PI / 4) * 120} ${Math.sin(i * Math.PI / 4) * 120} Q${Math.cos(i * Math.PI / 4) * 80} ${Math.sin(i * Math.PI / 4) * 80} ${Math.cos(i * Math.PI / 4) * 160} ${Math.sin(i * Math.PI / 4) * 160}`}
                      stroke="url(#threadGlow)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0.5, 0.8, 0.5],
                        strokeDashoffset: [0, -24, -48]
                      }}
                      transition={{ 
                        duration: 4,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  ))}
                  
                  {/* Orbiting elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.g
                      key={i}
                      initial={{ rotate: i * 60 }}
                      animate={{ rotate: i * 60 + 360 }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.circle
                        cx="140"
                        cy="0"
                        r="8"
                        fill="#6366F1"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{ filter: 'drop-shadow(0 0 8px #6366F1)' }}
                      />
                    </motion.g>
                  ))}
                  
                  {/* Central AI Companion orb */}
                  <motion.circle
                    r="60"
                    fill="url(#orbGlow)"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      filter: [
                        'drop-shadow(0 0 20px #8B5CF6)',
                        'drop-shadow(0 0 40px #6366F1)',
                        'drop-shadow(0 0 20px #8B5CF6)'
                      ]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Inner core */}
                  <motion.circle
                    r="25"
                    fill="#F0F9FF"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.9, 0.7, 0.9]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ filter: 'drop-shadow(0 0 12px #8B5CF6)' }}
                  />
                </g>
                
                {/* Abstract enterprise elements */}
                <g opacity="0.3">
                  {/* Floating platforms */}
                  <motion.rect
                    x="50"
                    y="100"
                    width="80"
                    height="20"
                    rx="10"
                    fill="#6366F1"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: [100, 80, 100], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.rect
                    x="470"
                    y="450"
                    width="80"
                    height="20"
                    rx="10"
                    fill="#10B981"
                    initial={{ y: 450, opacity: 0 }}
                    animate={{ y: [450, 470, 450], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-pearl to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

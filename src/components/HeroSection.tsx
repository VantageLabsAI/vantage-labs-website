import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { cn } from '@/lib/utils';
import { Brain, Network, Workflow } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl">
      {/* Animated background dots/waves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full animate-bg-waves opacity-10" />
        {/* Add floating dots */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-indigo-300 rounded-full blur-2xl opacity-10 animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-blue-200 rounded-full blur-2xl opacity-10 animate-float-slower" />
        <div className="absolute top-2/3 right-1/2 w-4 h-4 bg-purple-300 rounded-full blur-xl opacity-10 animate-float-slowest" />
      </div>
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 section-padding container-wide pt-12 md:pt-16">
        {/* Main headline - Full width */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-midnight mb-8 leading-tight text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          The way enterprises{' '}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 animate-gradient-x">create value</span>{' '}
          is changing.
        </motion.h1>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
          {/* Left Column - Animated Bullet Points */}
          <div className="space-y-10 flex flex-col justify-center">
            {[{
              text: "Work is being reimagined.",
              icon: Workflow,
              className: "text-[#b07f4f] font-medium text-2xl md:text-3xl",
              delay: 0
            }, {
              text: "Intelligence is becoming infrastructure.",
              icon: Network,
              className: "text-[#a06e42] font-medium text-2xl md:text-3xl",
              delay: 0.5
            }, {
              text: "AI isn't just a tool — it's the decision layer.",
              icon: Brain,
              className: "text-[#1c1c1c] font-semibold text-2xl md:text-3xl",
              delay: 1
            }].map(({ text, icon: Icon, className, delay }, index) => (
              <motion.div 
                key={text}
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-white shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />
                </motion.div>
                <div>
                  <motion.p 
                    className={className}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.2 }}
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Enhanced AI Illustration */}
          <div className="flex items-center justify-center">
            <motion.div
              className="w-full max-w-lg relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Radial glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-radial from-indigo-300/30 via-indigo-100/10 to-transparent blur-2xl z-0 pointer-events-none" />
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full filter drop-shadow-2xl z-10 relative"
              >
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <g transform="translate(200 200)">
                  {/* Outer pulse ring */}
                  <motion.circle
                    r="160"
                    fill="url(#pulse)"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: [0.5, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Main glow circle */}
                  <motion.circle
                    r="120"
                    fill="url(#glow)"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1.1 }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  {/* Connected nodes with hover pulse */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.g key={angle} transform={`rotate(${angle})`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <motion.circle
                        cx="0"
                        cy="-80"
                        r="12"
                        fill="#4f46e5"
                        className="group-hover:animate-pulse-node"
                        style={{ filter: 'drop-shadow(0 0 12px #818cf8)' }}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 4
                        }}
                      />
                      <motion.line
                        x1="0"
                        y1="-70"
                        x2="0"
                        y2="0"
                        stroke="#4f46e5"
                        strokeWidth="3"
                        strokeDasharray="4 4"
                        className="group-hover:stroke-indigo-400"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ 
                          duration: 1.5,
                          delay: 0.5 + i * 0.1
                        }}
                      />
                    </motion.g>
                  ))}
                  {/* Central node with drop shadow */}
                  <motion.circle
                    r="38"
                    fill="#4f46e5"
                    style={{ filter: 'drop-shadow(0 0 32px #818cf8)' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  />
                </g>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
         <motion.div 
           className="mt-4 text-center"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 3.5 }}
         >
           <motion.button 
             onClick={() => {
               // Scroll to the next section after #hero
               const heroSection = document.getElementById('hero');
               if (heroSection) {
                 let nextSection = heroSection.nextElementSibling;
                 if (nextSection && nextSection.querySelector && nextSection.querySelector('section')) {
                   nextSection = nextSection.querySelector('section');
                 }
                 if (nextSection) {
                   const yOffset = -80;
                   const y = nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                   window.scrollTo({ top: y, behavior: 'smooth' });
                 }
               }
             }}
             className="group inline-flex items-center gap-3 text-xl md:text-2xl text-indigo-600 font-semibold bg-white/60 rounded-full px-8 py-3 shadow-md hover:bg-indigo-50 transition-all duration-200 animate-fade-in"
             whileHover={{ scale: 1.08 }}
             whileTap={{ scale: 0.96 }}
           >
             <span className="border-b-2 border-indigo-200 group-hover:border-indigo-300 transition-colors">
               Discover what's possible
             </span>
             <motion.span 
               className="inline-block text-2xl ml-2"
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
             >
               ↓
             </motion.span>
           </motion.button>
         </motion.div>
       </div>

        {/* Bottom fade */}
         <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-pearl to-transparent pointer-events-none" />
        </section>
      );
};

export default HeroSection;

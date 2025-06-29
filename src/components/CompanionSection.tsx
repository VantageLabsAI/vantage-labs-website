
import React from 'react';
import { motion, useInView } from 'framer-motion';

const BACKGROUND_IMG = '/companion-bg.jpg'; // Place the image in public/ as companion-bg.jpg

const phrases = [
  'making a decision',
  'planning a move',
  'analyzing data',
  'writing a report',
  'leading a team',
];

const CompanionSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Phrase cycling state
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx((idx) => (idx + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToCapabilitiesSection = () => {
    const capabilitiesSection = document.getElementById('capabilities');
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="companion"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMG}
          alt="AI Companion handshake cityscape"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.85) blur(0.8px)' }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-purple-900/20" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Floating orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-indigo-400/10 to-purple-400/10 backdrop-blur-sm"
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
        
        {/* Neural network lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent"
            style={{
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main content container with enhanced styling */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-8">
        
        {/* Line 1: Enhanced small caps with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="text-lg md:text-xl font-light tracking-[0.25em] uppercase mb-2"
               style={{ 
                 color: '#E8E8E6', 
                 textShadow: '0 0 20px rgba(99, 102, 241, 0.3), 0 2px 4px rgba(0,0,0,0.8)',
                 letterSpacing: '0.2em'
               }}>
            You've worked with tools. You've chatted with bots.
          </div>
          {/* Subtle underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent mx-auto"
            style={{ width: '60%' }}
          />
        </motion.div>

        {/* Line 2: Dramatically enhanced hero text */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-7xl mx-auto mb-12"
        >
          {/* Main text with enhanced styling */}
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
               style={{ 
                 fontFamily: 'Space Grotesk, system-ui, sans-serif',
                 background: 'linear-gradient(135deg, #FFFFFF 0%, #E8E8E6 50%, #D1D5DB 100%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text',
                 textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                 filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.15))'
               }}>
            Now meet your AI Companion — a thoughtful ally that understands your goals, anticipates what matters, and takes action when it counts.
          </div>
          
          {/* Glowing background accent */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600/10 via-purple-600/5 to-pink-600/10 blur-3xl rounded-full transform scale-110" />
        </motion.h2>

        {/* Line 3: Enhanced dynamic text with better styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-5xl"
             style={{ 
               color: '#E8E8E6',
               textShadow: '0 2px 12px rgba(0,0,0,0.6)',
               letterSpacing: '0.01em'
             }}>
            Your Companion is always present, always aligned. Whether you're{' '}
            <span className="relative inline-block">
              {/* Enhanced phrase container with glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-lg transform scale-110" />
              
              <motion.span
                key={phraseIdx}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative font-bold px-4 py-2 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #F4E4BC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  minWidth: '12em',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                {phrases[phraseIdx]}
              </motion.span>
              
              {/* Enhanced cursor with glow */}
              <motion.span
                animate={{ 
                  opacity: [1, 0, 1],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="ml-2 font-bold"
                style={{ 
                  color: '#D4AF37',
                  textShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                  filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))'
                }}
              >
                |
              </motion.span>
            </span>
          </p>
        </motion.div>
      </div>

      {/* Enhanced CTA button */}
      <div className="absolute bottom-16 w-full flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToCapabilitiesSection}
            className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold rounded-full shadow-2xl text-lg overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              See What Makes It So Capable
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </span>
            </span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B'][i % 4]})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 6px ${['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B'][i % 4]}`,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanionSection;

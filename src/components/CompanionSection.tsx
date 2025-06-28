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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      {/* Full-screen background image */}
      <img
        src={BACKGROUND_IMG}
        alt="AI Companion handshake cityscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(1.04) blur(0.5px)' }}
      />
      
      {/* Semi-transparent overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Main content container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
        
        {/* Line 1: Small caps, light weight */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-lg font-light tracking-widest mb-6"
          style={{ color: '#E0E0DC', letterSpacing: '0.15em' }}
        >
          You've worked with tools. You've chatted with bots.
        </motion.div>

        {/* Line 2: Large hero-style line */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-7xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          style={{ 
            fontFamily: 'Space Grotesk, system-ui, sans-serif', 
            color: '#FFFFFF',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)'
          }}
        >
          Now meet your AI Companion — a thoughtful ally that understands your goals, anticipates what matters, and takes action when it counts.  
          {/* Now meet your AI Companion — a thoughtful ally that listens, reasons, and grows with you. */}
        </motion.h2>

        {/* Line 3: Medium font with dynamic blinking text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed"
          style={{ 
            color: '#E0E0DC',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Your Companion is always present, always aligned. Whether you're{' '}
          <span className="relative inline-block">
            <motion.span
              key={phraseIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-semibold"
              style={{
                color: '#D4AF37',
                textShadow: '0 0 8px rgba(212, 175, 55, 0.3)',
                padding: '0 0.25em',
                background: 'rgba(0,0,0,0.1)',
                borderRadius: '0.25em',
                display: 'inline-block',
                minWidth: '8.5em',
              }}
            >
              {phrases[phraseIdx]}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 font-bold"
              style={{ color: '#D4AF37' }}
            >
              |
            </motion.span>
          </span>
          {/* … */}
        </motion.p>
      </div>

      {/* Explore Companion Capabilities CTA at the bottom */}
      <div className="w-full flex justify-center z-20" style={{ position: 'absolute', bottom: '2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm font-light uppercase tracking-widest flex items-center gap-2"
          style={{ textAlign: 'center', color: '#4A90E2', letterSpacing: '0.08em' }}
        >
          <motion.button
            onClick={scrollToCapabilitiesSection}
            className="group px-6 py-3 bg-[#6366F1] text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See What Makes It So Capable
            {/* Explore Companion Capabilities */}
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanionSection;

/* Add this to your global CSS if not present:
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
.animate-bounce-slow {
  animation: bounce-slow 1.6s infinite;
}
*/

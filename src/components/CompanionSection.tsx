import React from 'react';
import { motion, useInView } from 'framer-motion';

const BACKGROUND_IMG = '/companion-bg.jpg'; // Place the image in public/ as companion-bg.jpg

const phrases = [
  'solving a problem',
  'making a decision',
  'running your day',
];

const CompanionSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Phrase cycling state
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx((idx) => (idx + 1) % phrases.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollToProofSection = () => {
    const proofSection = document.getElementById('proof');
    if (proofSection) {
      proofSection.scrollIntoView({ behavior: 'smooth' });
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
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Muted Header - centered, near top */}
      <div className="w-full flex justify-center z-20" style={{ position: 'absolute', top: '8rem' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-2 text-indigo-400"
        >
          <span role="img" aria-label="wave">👋</span> Meet your Companion
        </motion.div>
      </div>

      {/* Primary Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto mb-8 drop-shadow-xl"
        style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#E0E0DC' }}
      >
        A new kind of partner — one that listens, reasons, and works with you.
      </motion.h2>

      {/* Optional Subheadline with animated phrase and new line for the rest */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-20 text-lg md:text-xl text-center max-w-2xl mx-auto"
        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.32)', color: '#E0E0DC' }}
      >
        Whether you're{' '}
        <span
          className="font-semibold"
          style={{
            color: '#D4AF37',
            textShadow: '0 0 8px #8CB4F1, 0 0 16px #D4AF37',
            padding: '0 0.25em',
            background: 'rgba(0,0,0,0.08)',
            borderRadius: '0.25em',
            display: 'inline-block',
            minWidth: '8.5em',
            transition: 'color 0.3s',
          }}
        >
          {phrases[phraseIdx]}
        </span>
        <br />
        — your Companion is right beside you, thinking through it all.
      </motion.p>

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
            onClick={scrollToProofSection}
            className="group px-6 py-3 bg-[#6366F1] text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Companion Capabilities
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

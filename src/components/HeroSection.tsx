import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import AnimatedBackground from './AnimatedBackground';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';

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
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-[81rem] mx-auto">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight leading-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          AI, Reimagined for the Enterprise
        </motion.h1>

        {/* Subtext - Core Proposition */}
        <motion.p
          className="text-xl md:text-2xl text-[#434349] leading-relaxed max-w-[700px] mx-auto mt-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Meet intelligent AI Companions that think strategically, act responsibly, and deliver business outcomes — just like your best teams. */}
          Meet intelligent AI Companions that understand your business, reason through complexity, act responsibly, and drive real outcomes — just like your best teams.
        </motion.p>

        {/* Supporting Line - Tagline */}
        <motion.p
          className="text-base md:text-lg text-[#666] mt-5 font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Purpose-built for enterprises that expect more from AI.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            onClick={scrollToCompanionSection}
            className="group px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover What Makes It Different →
          </motion.button>
        </motion.div>

        {/* Secondary CTA as hyperlink text below the main button */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <span
                className="text-base text-gray-500 underline cursor-pointer hover:text-indigo-600 transition-colors"
                style={{ display: 'inline-block' }}
              >
                How AI Will Reshape Enterprise Performance
              </span>
            </DialogTrigger>
            <DialogContent className="w-full max-w-3xl h-screen flex flex-col justify-center items-center bg-white">
              <h2 className="text-2xl font-bold mb-4 text-midnight text-center">How AI Will Reshape Enterprise Performance</h2>
              <div className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                {/* Replace this with your actual content/answer */}
                <p>
                  AI is fundamentally transforming how enterprises operate, compete, and deliver value. By embedding intelligence into every layer of the organization, AI enables faster decision-making, deeper insights, and more adaptive execution. From automating routine tasks to augmenting strategic thinking, AI will reshape performance benchmarks and unlock new sources of competitive advantage.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

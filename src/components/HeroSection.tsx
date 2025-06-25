
import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl">
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center section-padding container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-midnight mb-8 leading-tight">
            The way enterprises{' '}
            <span className="text-gradient">create value</span>{' '}
            is changing.
          </h1>
          
          {/* Subheadline */}
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-slate leading-relaxed">
            <p className="font-medium">
              The most ambitious companies are reshaping how work gets done.
            </p>
            <p>
              Intelligence is becoming infrastructure.
            </p>
            <p className="text-midnight font-semibold">
              AI isn't just a tool anymore — it's the new decision layer.
            </p>
          </div>

          {/* Subtle CTA hint */}
          <div className="mt-16 animate-float">
            <div className="inline-flex items-center text-indigo font-medium">
              <span className="mr-2">Discover what's possible</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent" />
    </section>
  );
};

export default HeroSection;

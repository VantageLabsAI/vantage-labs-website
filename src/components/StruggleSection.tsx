
import React, { useEffect, useRef, useState } from 'react';

const StruggleSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const painPoints = [
    "Siloed data.",
    "Standalone pilots.",
    "Black-box copilots.",
    "AI that doesn't connect to how work actually happens.",
    "Insights without action.",
    "Dashboards without outcomes."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal lines with staggered timing
            painPoints.forEach((_, index) => {
              setTimeout(() => {
                setVisibleLines(prev => [...prev, index]);
              }, index * 600);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="struggle" 
      className="min-h-screen bg-midnight relative overflow-hidden"
    >
      {/* Fragmented background elements */}
      <div className="absolute inset-0">
        {/* Broken grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full gap-4 p-8">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i}
                className={`bg-white/20 rounded ${Math.random() > 0.6 ? 'opacity-100' : 'opacity-30'}`}
                style={{
                  height: `${Math.random() * 100 + 20}px`,
                  transform: `rotate(${Math.random() * 10 - 5}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Diagonal fragments */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-indigo/10 transform rotate-45" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-slate/10 transform -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white/20 transform rotate-12" />
      </div>

      {/* Main content with diagonal layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-padding container-wide w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Main headline with diagonal emphasis */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 border border-white/20 transform rotate-45" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                But most efforts{' '}
                <span className="relative">
                  fall short.
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo to-transparent" />
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-xl text-slate/80 leading-relaxed max-w-md">
                Enterprise AI initiatives struggle with fragmentation, 
                creating isolated solutions that never connect to real business impact.
              </p>
            </div>

            {/* Right side - Animated pain points */}
            <div className="relative">
              <div className="space-y-6">
                {painPoints.map((point, index) => (
                  <div 
                    key={index}
                    className={`transform transition-all duration-700 ${
                      visibleLines.includes(index)
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative group">
                      <div className="absolute -left-4 top-1/2 w-2 h-2 bg-indigo transform -translate-y-1/2 rotate-45" />
                      <p className="text-lg md:text-xl font-medium text-white pl-8 leading-relaxed">
                        {point}
                      </p>
                      
                      {/* Glitch effect overlay */}
                      <div className="absolute inset-0 bg-white/5 transform skew-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative broken elements */}
              <div className="absolute -right-8 top-0 w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="absolute -right-12 top-16 w-4 h-4 border border-white/30 transform rotate-45" />
              <div className="absolute -right-6 bottom-8 w-2 h-16 bg-white/10 transform -skew-y-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom parallax element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
    </section>
  );
};

export default StruggleSection;


import React, { useEffect, useRef, useState } from 'react';

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
      id="solution" 
      className="min-h-screen bg-pearl relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-padding container-wide w-full">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold text-midnight mb-8 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              We bring intelligence into{' '}
              <span className="text-gradient">the fabric of execution.</span>
            </h2>
          </div>

          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Key messaging */}
            <div className={`space-y-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              
              {/* Three key points */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-indigo rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-medium text-midnight leading-relaxed">
                    AI Companions that <strong>reason, recommend, and act</strong>
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-indigo rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-medium text-midnight leading-relaxed">
                    Built on a <strong>composable, governed platform</strong> — not glued-on plugins
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-indigo rounded-full mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-medium text-midnight leading-relaxed">
                    Not assistants. Not copilots. <strong>True business partners</strong>
                  </p>
                </div>
              </div>

              {/* Supporting text */}
              <div className="border-l-4 border-indigo/20 pl-6">
                <p className="text-slate text-lg leading-relaxed">
                  Intelligence as Infrastructure means your AI doesn't just process data — 
                  it understands context, connects insights, and drives outcomes across your entire organization.
                </p>
              </div>
            </div>

            {/* Right side - Product showcase */}
            <div className={`relative transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              
              {/* Main product image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/8a6b3b3b-1090-469c-883e-133cfc1908e5.png"
                  alt="Vantage Labs Intelligence Dashboard"
                  className="w-full h-auto"
                />
                
                {/* Interactive callouts */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-midnight">Real-time Analysis</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/3 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-midnight">Multi-modal Interface</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-midnight rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-midnight">Actionable Recommendations</span>
                    </div>
                  </div>
                </div>

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>

              {/* Supporting visual elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-indigo/20 rounded-lg transform rotate-12" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-emerald/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent" />
    </section>
  );
};

export default SolutionSection;

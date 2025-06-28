import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Target } from 'lucide-react';

const ValueUnlockSection = () => {
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

  // const pillars = [
  //   {
  //     title: "Better, Faster Decisions",
  //     subhead: "Make smarter decisions with less delay and more confidence.",
  //     examples: [
  //       "From data hunting → to instant, contextual answers from any system",
  //       "From siloed insights → to cross-functional recommendations",
  //       "From reactive reviews → to proactive nudges on emerging trends"
  //     ],
  //     icon: <Target className="w-6 h-6 text-blue-500" />,
  //     color: "border-blue-200 bg-blue-50/30"
  //   },
  //   {
  //     title: "Operational Efficiency at Scale",
  //     subhead: "Save time, reduce costs, and eliminate friction across workflows.",
  //     examples: [
  //       "From form fills and approvals → to automated task execution",
  //       "From follow-ups and status checks → to intelligent progress tracking",
  //       "From manual processes → to orchestrated workflows with zero UI"
  //     ],
  //     icon: <Zap className="w-6 h-6 text-orange-500" />,
  //     color: "border-orange-200 bg-orange-50/30"
  //   },
  //   {
  //     title: "Intelligence in Every Role",
  //     subhead: "Empower every team member with real-time, AI-native support.",
  //     examples: [
  //       "From AI as a tool → to AI as a daily teammate",
  //       "From central analytics → to distributed intelligence across teams",
  //       "From support tickets → to in-flow resolution inside the tools they use"
  //     ],
  //     icon: <Users className="w-6 h-6 text-purple-500" />,
  //     color: "border-purple-200 bg-purple-50/30"
  //   },
  //   {
  //     title: "Strategic Agility and Control",
  //     subhead: "Respond faster, adapt easier, and maintain control in dynamic environments.",
  //     examples: [
  //       "From monthly planning → to daily scenario simulations",
  //       "From lagging metrics → to always-on performance monitoring",
  //       "From top-down reviews → to AI-generated boardroom narratives"
  //     ],
  //     icon: <TrendingUp className="w-6 h-6 text-green-500" />,
  //     color: "border-green-200 bg-green-50/30"
  //   }
  // ];

  const pillars = [
    {
      title: "Smarter Decisions, Less Delay",
      subhead: "Decide with clarity and confidence — before it’s too late.",
      examples: [
        "From data hunting → to instant, contextual answers in one view",
        "From siloed insights → to aligned, cross-functional intelligence",
        "From lagging reviews → to proactive nudges that surface what matters"
      ],
      icon: <Target className="w-6 h-6 text-blue-500" />,
      color: "border-blue-200 bg-blue-50/30"
    },
    {
      title: "Efficiency Without Friction",
      subhead: "Automate the busywork. Streamline what truly matters.",
      examples: [
        "From form fills and approvals → to automated task execution",
        "From scattered updates → to intelligent progress tracking",
        "From manual workarounds → to orchestrated workflows with zero UI"
      ],
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      color: "border-orange-200 bg-orange-50/30"
    },
    {
      title: "AI That Empowers Every Role",
      subhead: "Put intelligence in everyone’s corner — not just the analyst’s.",
      examples: [
        "From AI as a tool → to AI as a daily teammate",
        "From centralized reports → to in-the-flow intelligence across teams",
        "From support tickets → to instant resolution inside the tools they use"
      ],
      icon: <Users className="w-6 h-6 text-purple-500" />,
      color: "border-purple-200 bg-purple-50/30"
    },
    {
      title: "Agility with Control, At Last",
      subhead: "Stay ahead, adapt faster — and never lose the bigger picture.",
      examples: [
        "From static planning → to daily scenario simulations",
        "From lagging metrics → to real-time performance foresight",
        "From top-down reviews → to AI-generated boardroom narratives"
      ],
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      color: "border-green-200 bg-green-50/30"
    }
  ];  

  return (
    <section
      ref={sectionRef}
      id="value-unlock"
      className="bg-gradient-to-b from-white to-pearl py-16 md:py-20 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A1F36 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container-wide section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-4 text-indigo-400">
            {/* <span role="img" aria-label="unlock">🔓</span> Strategic Outcomes */}
            <span role="img" aria-label="unlock">🔓</span> What Your Companion Unlocks
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-4 md:mb-6">
          From AI to ROI
          {/* Better Decisions, Smarter Operations, and a More Agile Business */}
            {/* What Your Companion Can Unlock */}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Your AI Companion doesn’t just respond — it drives meaningful change in how your business thinks, operates, and grows.
          {/* Your AI Companion delivers more than answers — it improves how your business thinks, operates, and evolves. */}
            {/* From decision-making to execution, discover the real business value of a truly intelligent assistant. */}
          </p>
        </motion.div>

        {/* Pillar Cards - Horizontal 4x1 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full p-6 md:p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${pillar.color} hover:scale-[1.02] min-h-[400px] flex flex-col`}>
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-midnight mb-3 leading-tight">
                  {pillar.title}
                </h3>

                {/* Subhead */}
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {pillar.subhead}
                </p>

                {/* Examples */}
                <div className="flex-1 space-y-3">
                  {pillar.examples.map((example, exampleIndex) => (
                    <motion.div
                      key={exampleIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + exampleIndex * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <ArrowRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0 group-hover/item:text-indigo-500 transition-colors" />
                      <p className="text-sm text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        {example}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 active:scale-95">
            See These Outcomes in Action
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueUnlockSection; 
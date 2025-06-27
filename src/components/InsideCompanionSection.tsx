
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, ChevronDown } from 'lucide-react';

const InsideCompanionSection = () => {
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

  const companions = [
    {
      title: "HR Companion",
      subtitle: "Hire Smarter. Engage Deeper.",
      icon: "👥",
      color: "bg-rose-50 border-rose-200"
    },
    {
      title: "Operations Companion", 
      subtitle: "Streamline Every Step.",
      icon: "⚙️",
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Finance Companion",
      subtitle: "From Budgeting to Boardrooms.",
      icon: "💰",
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  const agents = [
    "Budget Planner", "Risk Assessor", "Process Automator", "Recruitment Ranker",
    "Forecasting Agent", "Compliance Agent", "Performance Tracker", "Inventory Optimizer"
  ];

  const tools = [
    "RPA", "Reporting", "Gmail Integration", "Slack Bot", "GSheet API", "SAP Connect",
    "Salesforce", "Data Pipeline", "OCR Engine", "Role Engine", "Workflow Builder", "API Gateway"
  ];

  return (
    <section
      ref={sectionRef}
      id="inside-companion"
      className="min-h-screen bg-gradient-to-b from-white to-pearl py-12 relative overflow-hidden flex items-center"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #1A1F36 1px, transparent 0)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container-wide section-padding relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-slate bg-white/80 px-3 py-1.5 rounded-full border border-slate/10 mb-4 text-sm">
            <Eye className="w-3 h-3" />
            <span className="font-medium">Inside Your AI Companion</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-3">
            Enterprise-Grade Intelligence,<br />
            <span className="text-indigo">Modular by Design</span>
          </h2>
          
          <p className="text-slate text-sm max-w-2xl mx-auto">
            Every AI Companion is powered by a layered architecture of agents and tools.
          </p>
        </motion.div>

        {/* Main Layered Architecture */}
        <div className="max-w-6xl mx-auto">
          
          {/* Layer 1: AI Companions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-12 gap-6 items-center mb-6"
          >
            {/* Left Label */}
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-indigo/30 via-indigo/50 to-transparent"></div>
                <div className="pl-4">
                  <h3 className="font-bold text-lg text-midnight mb-1">AI Companions</h3>
                  <p className="text-slate text-sm">Your user-facing domain experts.</p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-span-12 md:col-span-9">
              <div className="bg-slate/5 backdrop-blur-sm rounded-xl border border-slate/10 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {companions.map((companion, index) => (
                    <motion.div
                      key={companion.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className={`${companion.color} p-4 rounded-lg border text-center hover:shadow-md transition-all duration-300`}
                    >
                      <div className="text-2xl mb-2">{companion.icon}</div>
                      <h4 className="font-semibold text-sm text-midnight mb-1">{companion.title}</h4>
                      <p className="text-xs text-slate">{companion.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flow Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex justify-center mb-6"
          >
            <ChevronDown className="w-4 h-4 text-slate/40" />
          </motion.div>

          {/* Layer 2: AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-12 gap-6 items-center mb-6"
          >
            {/* Left Label */}
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-slate/30 via-slate/50 to-transparent"></div>
                <div className="pl-4">
                  <h3 className="font-bold text-lg text-midnight mb-1">AI Agents</h3>
                  <p className="text-slate text-sm">Specialized modules that drive intelligent action.</p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-span-12 md:col-span-9">
              <div className="bg-slate/5 backdrop-blur-sm rounded-xl border border-slate/15 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {agents.map((agent, index) => (
                    <motion.div
                      key={agent}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      className="bg-white/80 border border-slate/20 px-3 py-2 rounded-md text-center text-xs font-medium text-midnight hover:bg-white hover:shadow-sm transition-all duration-200"
                    >
                      {agent}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flow Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex justify-center mb-6"
          >
            <ChevronDown className="w-4 h-4 text-slate/40" />
          </motion.div>

          {/* Layer 3: Enterprise Tools & Functions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-12 gap-6 items-center mb-8"
          >
            {/* Left Label */}
            <div className="col-span-12 md:col-span-3">
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-slate/30 via-slate/50 to-transparent"></div>
                <div className="pl-4">
                  <h3 className="font-bold text-lg text-midnight mb-1">Enterprise Tools & Functions</h3>
                  <p className="text-slate text-sm">Integrates deeply with your existing systems.</p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-span-12 md:col-span-9">
              <div className="bg-midnight/5 backdrop-blur-sm rounded-xl border border-slate/20 p-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.02 }}
                      className="bg-white/70 border border-slate/25 px-2 py-1.5 rounded text-center text-xs font-medium text-slate hover:border-indigo/40 hover:text-indigo hover:bg-white transition-all duration-200"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <button className="group inline-flex items-center gap-2 bg-indigo hover:bg-indigo/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm">
            Explore the Platform That Powers It All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsideCompanionSection;

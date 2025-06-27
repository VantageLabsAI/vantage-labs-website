
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';

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
      color: "bg-rose-50 border-rose-200 shadow-rose-100"
    },
    {
      title: "Operations Companion", 
      subtitle: "Streamline Every Step.",
      icon: "⚙️",
      color: "bg-orange-50 border-orange-200 shadow-orange-100"
    },
    {
      title: "Finance Companion",
      subtitle: "From Budgeting to Boardrooms.",
      icon: "💰",
      color: "bg-indigo-50 border-indigo-200 shadow-indigo-100"
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
      className="min-h-screen bg-gradient-to-b from-white to-pearl py-16 relative overflow-hidden flex items-center"
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

      <div className="container-wide section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-slate bg-white/80 px-4 py-2 rounded-full border border-slate/10 mb-8">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Inside Your AI Companion</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-midnight">
            Enterprise-Grade Intelligence,<br />
            <span className="text-indigo">Modular by Design</span>
          </h2>
        </motion.div>

        {/* Main Visual Architecture - Three Distinct Layers */}
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Layer 1: AI Companions - Top Priority */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Layer Background Container */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate/10 p-8 shadow-lg shadow-slate/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {companions.map((companion, index) => (
                  <motion.div
                    key={companion.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className={`${companion.color} p-8 rounded-xl border-2 text-center hover:shadow-xl transition-all duration-300 shadow-lg`}
                  >
                    <div className="text-4xl mb-4">{companion.icon}</div>
                    <h4 className="font-bold text-xl text-midnight mb-3">{companion.title}</h4>
                    <p className="text-sm text-slate font-medium">{companion.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-px h-12 bg-gradient-to-b from-slate/20 via-slate/30 to-slate/20"></div>
          </motion.div>

          {/* Layer 2: AI Agents - Middle Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Layer Background Container */}
            <div className="bg-slate/5 backdrop-blur-sm rounded-2xl border border-slate/15 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {agents.map((agent, index) => (
                  <motion.div
                    key={agent}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                    className="bg-white/80 border border-slate/20 px-4 py-3 rounded-lg text-center text-sm font-medium text-midnight hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    {agent}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center"
          >
            <div className="w-px h-12 bg-gradient-to-b from-slate/20 via-slate/30 to-slate/20"></div>
          </motion.div>

          {/* Layer 3: Enterprise Tools & Functions - Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative"
          >
            {/* Layer Background Container */}
            <div className="bg-midnight/5 backdrop-blur-sm rounded-2xl border border-slate/20 p-8">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-6xl mx-auto">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.03 }}
                    className="bg-white/70 border border-slate/25 px-3 py-2.5 rounded text-center text-xs font-medium text-slate hover:border-indigo/40 hover:text-indigo hover:bg-white transition-all duration-200"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-16"
        >
          <button className="group inline-flex items-center gap-2 bg-indigo hover:bg-indigo/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
            Explore the Platform That Powers It All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsideCompanionSection;

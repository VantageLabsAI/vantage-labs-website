
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
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #1A1F36 1px, transparent 0)
          `,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-wide section-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-slate bg-white/80 px-4 py-2 rounded-full border border-slate/10 mb-6">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Inside Your AI Companion</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
            Enterprise-Grade Intelligence,<br />
            <span className="text-indigo">Modular by Design</span>
          </h2>
        </motion.div>

        {/* Main Visual Block - Three Layers */}
        <div className="max-w-6xl mx-auto">
          
          {/* Layer 1: AI Companions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {companions.map((companion, index) => (
                <motion.div
                  key={companion.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`${companion.color} p-6 rounded-xl border-2 text-center hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-3xl mb-3">{companion.icon}</div>
                  <h4 className="font-bold text-lg text-midnight mb-2">{companion.title}</h4>
                  <p className="text-sm text-slate">{companion.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="w-px h-8 bg-gradient-to-b from-slate/30 to-transparent"></div>
          </motion.div>

          {/* Layer 2: AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  className="bg-slate/5 border border-slate/10 px-4 py-3 rounded-lg text-center text-sm font-medium text-midnight hover:bg-slate/10 transition-colors"
                >
                  {agent}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-px h-8 bg-gradient-to-b from-slate/30 to-transparent"></div>
          </motion.div>

          {/* Layer 3: Tools & Functions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-12"
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.03 }}
                  className="bg-white border border-slate/15 px-3 py-2 rounded text-center text-xs font-medium text-slate hover:border-indigo/30 hover:text-indigo transition-all"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <button className="group inline-flex items-center gap-2 bg-indigo hover:bg-indigo/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105">
            Explore the Platform That Powers It All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsideCompanionSection;

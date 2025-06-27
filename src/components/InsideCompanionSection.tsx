
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Zap, Shield, Cog, Users } from 'lucide-react';

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
      title: "Retail Companion",
      subtitle: "Understand Demand. Optimize Every Shelf.",
      icon: "🛍️",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Finance Companion", 
      subtitle: "From Budgeting to Boardrooms.",
      icon: "💰",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "HR Companion",
      subtitle: "Hire Smarter. Engage Deeper.",
      icon: "👥",
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Operations Companion",
      subtitle: "Streamline Every Step.",
      icon: "⚙️",
      color: "from-orange-500 to-amber-600"
    }
  ];

  const agents = [
    "Forecasting Agent", "Compliance Agent", "Budget Planner", "Recruitment Ranker",
    "Inventory Optimizer", "Risk Assessor", "Performance Tracker", "Process Automator"
  ];

  const tools = [
    { name: "SAP", icon: "sap" },
    { name: "Salesforce", icon: "salesforce" },
    { name: "Slack", icon: "slack" },
    { name: "Gmail", icon: "gmail" },
    { name: "Google Drive", icon: "google-drive" },
    { name: "RPA", icon: "rpa" },
    { name: "Reports", icon: "report" }
  ];

  const badges = [
    "SAP-Compatible",
    "50+ Enterprise Tools", 
    "100+ Business Functions",
    "Modular & Secure",
    "Configurable to Your Stack"
  ];

  return (
    <section
      ref={sectionRef}
      id="inside-companion"
      className="min-h-screen bg-gradient-to-b from-white to-pearl py-20 relative overflow-hidden"
    >
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-slate mb-4">
            <Eye className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Inside Your AI Companion</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
            Enterprise-Grade Intelligence,<br />
            <span className="text-indigo">Modular by Design</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate">
            <p>
              Every Companion is powered by a layered system of AI Agents and enterprise tools — built for scalability, security, and precision.
            </p>
            <p>
              From domain-specific expertise to SAP-compatible automation, your Companion is engineered to think, act, and integrate — just like a world-class team.
            </p>
          </div>
        </motion.div>

        {/* Layer 1: AI Companions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-midnight mb-2">AI Companions</h3>
            <p className="text-slate">User-facing intelligent partners for every domain</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companions.map((companion, index) => (
              <motion.div
                key={companion.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${companion.color} p-6 rounded-2xl text-white cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-3xl mb-3">{companion.icon}</div>
                <h4 className="font-bold text-lg mb-2">{companion.title}</h4>
                <p className="text-sm opacity-90">{companion.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connector Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="w-px h-12 bg-gradient-to-b from-indigo to-transparent"></div>
        </motion.div>

        {/* Layer 2: AI Agents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-midnight mb-2">AI Agents</h3>
            <p className="text-slate">Specialized modules powering each Companion</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {agents.map((agent, index) => (
              <motion.div
                key={agent}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-midnight/10 hover:bg-midnight/20 px-4 py-2 rounded-full text-midnight font-medium text-sm cursor-pointer transition-all duration-200"
              >
                {agent}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connector Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-px h-12 bg-gradient-to-b from-indigo to-transparent"></div>
        </motion.div>

        {/* Layer 3: Tools & Functions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-midnight mb-2">Enterprise Tools & Functions</h3>
            <p className="text-slate">Deep integrations with your existing tech stack</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="w-10 h-10 bg-indigo/10 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-indigo font-bold text-xs">{tool.name.slice(0, 3).toUpperCase()}</span>
                </div>
                <span className="text-sm font-medium text-midnight">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <button className="group inline-flex items-center gap-2 bg-indigo hover:bg-indigo/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105">
            Explore the Platform That Powers It All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Badges */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {badges.map((badge, index) => (
              <div key={badge} className="flex items-center gap-1 text-emerald-600 font-medium">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InsideCompanionSection;

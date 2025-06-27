import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, ChevronDown, User, Bot, Brain, Users, Hand, Sparkles, Mail, FileText, MessageCircle, Cloud, BarChart2, ScanLine, Settings2, Workflow, Database, ShieldCheck, Zap, Layers3, Link2, Users2, Wrench, Sparkle } from 'lucide-react';
import clsx from 'clsx';

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

  // Icon map for tools
  const toolIcons = {
    'Gmail Integration': Mail,
    'OCR Engine': ScanLine,
    'Slack Bot': Bot,
    'Salesforce': Cloud,
    'Reporting': BarChart2,
    'GSheet API': FileText,
    'SAP Connect': Database,
    'RPA': Zap,
    'Role Engine': Users,
    'Workflow Builder': Workflow,
    'API Gateway': Link2,
    'Data Pipeline': Layers3,
  };

  // Humanized icons for companions
  const companionIcons = [
    <Users className="w-8 h-8 text-indigo-500" />, // HR
    <Hand className="w-8 h-8 text-yellow-500" />, // Ops
    <Sparkles className="w-8 h-8 text-pink-500" />, // Finance
  ];

  // Uniform agent icon
  const AgentIcon = <Brain className="w-5 h-5 text-blue-400 mr-1" />;

  // Mini icons for layer titles
  const layerTitleIcons = [
    <Users2 className="w-5 h-5 text-indigo-400 mr-2 inline-block align-middle" />, // Companions
    <Brain className="w-5 h-5 text-blue-400 mr-2 inline-block align-middle" />, // Agents
    <Wrench className="w-5 h-5 text-purple-400 mr-2 inline-block align-middle" />, // Tools
  ];

  return (
    <section
      ref={sectionRef}
      id="inside-companion"
      className="bg-gradient-to-b from-white to-pearl py-6 md:py-8 relative overflow-hidden flex items-center min-h-[700px] md:min-h-[800px]"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A1F36 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container-wide section-padding relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 text-slate bg-white/80 px-3 py-1.5 rounded-full border border-slate/10 mb-3 text-sm">
            <Eye className="w-3 h-3" />
            <span className="font-medium">Inside Your AI Companion</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-midnight mb-2 md:mb-3">
            Enterprise-Grade Intelligence,<br />
            <span className="text-indigo">Modular by Design</span>
          </h2>
          <p className="text-slate text-sm max-w-2xl mx-auto">
            Every AI Companion is powered by a layered architecture of agents and tools.
          </p>
        </motion.div>

        {/* Main Layered Architecture - no arrows, tighter spacing */}
        <div className="relative max-w-6xl mx-auto flex flex-col gap-y-5">
          {/* Layer 1: AI Companions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl bg-[#FAF7F3] border border-yellow-100 overflow-hidden"
          >
            {/* Left Label */}
            <div className="w-full md:w-[320px] flex flex-col justify-start px-6 py-7 md:py-8 bg-gradient-to-b from-[#F6EDE3] to-[#FAF7F3] border-b md:border-b-0 md:border-r border-yellow-100 relative">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-700">Layer 1</div>
              <div className="flex items-center mb-1 gap-2">
                {layerTitleIcons[0]}
                <h3 className="font-bold text-lg md:text-xl text-midnight">AI Companions</h3>
              </div>
              <p className="text-slate text-xs leading-tight ml-[32px]">What you see. Strategic & contextual collaborators.</p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center px-3 md:px-8 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {companions.map((companion, index) => (
                  <motion.div
                    key={companion.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col justify-between h-full p-5 rounded-xl border-2 shadow-2xl bg-white hover:border-yellow-400 hover:shadow-2xl hover:scale-[1.04] transition-all duration-200 min-h-[140px]"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="flex-shrink-0 mt-1">{companionIcons[index]}</span>
                      <div>
                        <h4 className="font-semibold text-base text-midnight mb-0.5">{companion.title}</h4>
                        <p className="text-xs text-slate leading-tight font-normal">{companion.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Layer 2: AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl bg-[#F3F7FD] border border-blue-100 overflow-hidden"
          >
            {/* Left Label */}
            <div className="w-full md:w-[320px] flex flex-col justify-start px-6 py-7 md:py-8 bg-gradient-to-b from-[#E6ECF5] to-[#F3F7FD] border-b md:border-b-0 md:border-r border-blue-100 relative">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700">Layer 2</div>
              <div className="flex items-center mb-1 gap-2">
                {layerTitleIcons[1]}
                <h3 className="font-bold text-lg md:text-xl text-midnight">AI Agents</h3>
              </div>
              <p className="text-slate text-xs leading-tight ml-[32px]">What they know. Expert intelligence in motion.</p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center px-3 md:px-8 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                {agents.map((agent, index) => (
                  <motion.div
                    key={agent}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F7FD] border border-blue-100 shadow-sm text-sm font-medium text-midnight backdrop-blur-md hover:bg-blue-50 hover:shadow-md transition-all duration-200 min-h-[48px] cursor-help"
                    title={`What does ${agent} do?`}
                  >
                    <span className="flex-shrink-0"><Brain className="w-5 h-5 text-blue-400" /></span>
                    <span className="truncate">{agent}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Enterprise Tools & Functions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl bg-[#F9F6FB] border border-purple-100 overflow-hidden"
          >
            {/* Left Label */}
            <div className="w-full md:w-[320px] flex flex-col justify-start px-6 py-7 md:py-8 bg-gradient-to-b from-[#E7E3F6] to-[#F9F6FB] border-b md:border-b-0 md:border-r border-purple-100 relative">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-700">Layer 3</div>
              <div className="flex items-center mb-1 gap-2">
                {layerTitleIcons[2]}
                <h3 className="font-bold text-lg md:text-xl text-midnight">Enterprise Tools & Functions</h3>
              </div>
              <p className="text-slate text-xs leading-tight ml-[32px]">What they use. Interfaces to your systems & data.</p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center px-3 md:px-8 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 w-full">
                {tools.map((tool, index) => {
                  const Icon = toolIcons[tool] || Settings2;
                  return (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.02 }}
                      className="flex flex-col items-center justify-center px-3 py-2 rounded-lg bg-[#F9F6FB] border border-purple-100 shadow text-sm font-medium text-slate-700 backdrop-blur-md hover:bg-purple-50 hover:shadow-md transition-all duration-200 min-h-[48px] cursor-help"
                      title={`What does ${tool} do?`}
                    >
                      <Icon className="w-5 h-5 mb-1 text-purple-400" />
                      {tool}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-6 md:mt-8"
        >
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 active:scale-95">
            Explore the Platform That Powers It All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsideCompanionSection;

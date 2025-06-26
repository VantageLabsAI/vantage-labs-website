
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, User, Book, Plug, Globe, Shield } from 'lucide-react';

const DefiningSection = () => {
  const capabilities = [
    {
      icon: Brain,
      label: 'Internal Memory',
      subtext: 'Remembers and learns across interactions'
    },
    {
      icon: User,
      label: 'Role Awareness',
      subtext: 'Tailored to user roles and enterprise context'
    },
    {
      icon: Book,
      label: 'Domain Expertise',
      subtext: 'Trained on your business, not generic data'
    },
    {
      icon: Plug,
      label: 'Tool Integration',
      subtext: 'Connects seamlessly with enterprise tools'
    },
    {
      icon: Globe,
      label: 'External Context Awareness',
      subtext: 'Understands data and environment in real time'
    },
    {
      icon: Shield,
      label: 'Enterprise Governance',
      subtext: 'Compliant, secure, and controllable'
    }
  ];

  return (
    <section id="defining" className="relative py-24 bg-gradient-to-b from-pearl to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-200 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 section-padding container-wide">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Optional Header */}
          <motion.p 
            className="text-sm uppercase tracking-wider text-slate font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Enterprise AI Companion
          </motion.p>

          {/* Primary Definition */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            An AI Companion is a specialized, agentic system that understands context, reasons through decisions, and delivers measurable business outcomes — securely and at scale.
          </motion.h2>

          {/* 2x3 Capability Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={capability.label}
                  className="group flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-white/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-midnight">
                    {capability.label}
                  </h3>
                  
                  <p className="text-sm text-slate leading-relaxed max-w-xs">
                    {capability.subtext}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Optional Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-slate leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Each Companion is domain-specific, role-aware, and designed to act autonomously or collaboratively — with seamless integration into your enterprise workflows and systems.
          </motion.p>

        </div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default DefiningSection;

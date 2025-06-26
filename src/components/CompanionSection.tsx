
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, User, BookOpen, Plug, Globe, Shield } from 'lucide-react';

const CompanionSection = () => {
  const traits = [
    { icon: Brain, label: "Internal Memory" },
    { icon: User, label: "Role Awareness" },
    { icon: BookOpen, label: "Domain Expertise" },
    { icon: Plug, label: "Tool Integration" },
    { icon: Globe, label: "External Context" },
    { icon: Shield, label: "Enterprise Governance" }
  ];

  return (
    <section
      id="companion"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background with subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6B7280 1px, transparent 1px),
            linear-gradient(to bottom, #6B7280 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-6xl mx-auto">
        
        {/* Muted header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">
            👋 Meet your Companion →
          </span>
        </motion.div>

        {/* Primary headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight leading-tight mb-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A new kind of partner — one that listens, reasons, and works with you.
        </motion.h2>

        {/* Optional subheadline */}
        <motion.p
          className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Whether you're solving a problem, making a decision, or running your day — your Companion is right beside you, thinking through it all.
        </motion.p>

        {/* Trait icons grid - faded and subtle */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 w-full max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {traits.map((trait, index) => (
            <motion.div
              key={trait.label}
              className="flex flex-col items-center space-y-3 opacity-30 hover:opacity-60 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + (index * 0.1),
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ opacity: 0.6 }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <trait.icon className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-slate-500 text-center">
                {trait.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanionSection;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, UserCheck, Briefcase, Plug, Globe, ShieldCheck } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

interface MetricCardProps {
  number: string;
  label: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ number, label, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo to-emerald bg-clip-text text-transparent">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-midnight">{label}</h3>
        <p className="text-slate">{description}</p>
      </div>
    </motion.div>
  );
};

const QuoteCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-indigo/5 to-emerald/5 rounded-2xl p-8 shadow-lg"
  >
    <blockquote className="text-xl md:text-2xl text-midnight italic mb-6">
      "Our teams now engage directly with performance insights — no delays, no dependencies."
    </blockquote>
    <cite className="text-slate not-italic">— Business Lead, Coromandel</cite>
  </motion.div>
);

const traits = [
  {
    icon: <BookOpen size={36} strokeWidth={1.5} />, 
    label: 'Internal Memory',
    desc: 'Remembers and learns across interactions',
  },
  {
    icon: <UserCheck size={36} strokeWidth={1.5} />, 
    label: 'Role Awareness',
    desc: 'Tailored to user roles and enterprise context',
  },
  {
    icon: <Briefcase size={36} strokeWidth={1.5} />, 
    label: 'Domain Expertise',
    desc: 'Trained on your business, not generic data',
  },
  {
    icon: <Plug size={36} strokeWidth={1.5} />, 
    label: 'Tool Integration',
    desc: 'Connects to your internal systems to take real action',
  },
  {
    icon: <Globe size={36} strokeWidth={1.5} />, 
    label: 'External Context Awareness',
    desc: 'Tracks real-world inputs and trends to stay relevant',
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} />, 
    label: 'Enterprise Governance',
    desc: 'Transparent, controllable, and fully auditable',
  },
];

const CompanionHighlights = () => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-100px' });

  return (
    <section
      id="companion-highlights"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#F9FAFB]"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      {/* Warm animated background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 via-orange-50/40 to-transparent" />
      </div>

      {/* Section header, styled like 'Meet your Companion' */}
      <div className="w-full flex justify-center z-20" style={{ position: 'absolute', top: '5.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-2 text-indigo-400"
        >
          <span role="img" aria-label="brain">🧠</span> Understand its capabilities
        </motion.div>
      </div>

      {/* Definition */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative z-10 text-center max-w-3xl mx-auto mt-20 mb-4"
      >
        <h2
          className="font-bold text-midnight"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', fontSize: '2.3rem' }}
        >
          An AI Companion is your organization's Agentic AI partner — built to understand, reason, and act across business contexts.
        </h2>
      </motion.div>

      {/* Trait Highlights */}
      <div className="relative z-10 w-full flex justify-center mt-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {traits.map((trait, idx) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + idx * 0.15 }}
              className="bg-white/80 rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-slate-100"
              style={{ backdropFilter: 'blur(2px)' }}
            >
              <div className="mb-4" style={{ color: '#D4AF37' }}>{trait.icon}</div>
              <div className="text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#2D2D2D' }}>{trait.label}</div>
              <div className="text-base" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#5A5A5A' }}>{trait.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button at the bottom */}
      <div className="w-full flex justify-center z-20" style={{ position: 'absolute', bottom: '2rem' }}>
        <a
          href="#engagement-modes"
          className="px-8 py-3 bg-[#6366F1] text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-200 text-base"
          style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
        >
          View Engagement Modes
        </a>
      </div>
    </section>
  );
};

export default CompanionHighlights;
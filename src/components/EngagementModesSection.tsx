import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bell, MessageCircle, LayoutDashboard, CheckCircle, Share2 } from 'lucide-react';

const MODES = [
  {
    icon: <Bell size={40} />, 
    title: 'Proactive Alerts',
    desc: 'Surface what matters — exactly when it matters. Your Companion spots patterns, flags issues, and nudges decisions.',
    visual: <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center text-4xl text-yellow-600">[Alert Visual]</div>,
  },
  {
    icon: <MessageCircle size={40} />, 
    title: 'Conversational Interface',
    desc: 'Ask, discuss, decide — in natural language. Your Companion reasons, explains, and assists like a domain expert.',
    visual: <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-4xl text-blue-600">[Chat Visual]</div>,
  },
  {
    icon: <LayoutDashboard size={40} />, 
    title: 'Contextual Dashboards',
    desc: 'Dynamic dashboards generated in real time, personalized to roles, tasks, and scenarios.',
    visual: <div className="w-full h-64 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center text-4xl text-emerald-600">[Dashboard Visual]</div>,
  },
  {
    icon: <CheckCircle size={40} />, 
    title: 'Task Support',
    desc: 'Execute precise actions — from updating records to generating reports — securely and autonomously.',
    visual: <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center text-4xl text-indigo-600">[Task Visual]</div>,
  },
  {
    icon: <Share2 size={40} />, 
    title: 'Workflow Orchestration',
    desc: 'Join or lead multi-step processes. The Companion can coordinate tools, people, and data flows.',
    visual: <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center text-4xl text-orange-600">[Workflow Visual]</div>,
  },
];

const ModeStep = ({ mode, inView }: { mode: typeof MODES[0]; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
    className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full max-w-6xl mx-auto px-4"
    style={{ scrollSnapAlign: 'start' }}
  >
    {/* Left: Mode content */}
    <div className="flex-1 flex flex-col justify-center items-center md:items-end pr-0 md:pr-12 max-w-md">
      <div className="mb-4 flex items-center gap-4">
        <span className="text-3xl" style={{ color: '#D4AF37' }}>{mode.icon}</span>
        <span className="text-xl md:text-2xl font-bold text-midnight">{mode.title}</span>
      </div>
      <div className="text-slate-600 text-lg mb-2">{mode.desc}</div>
    </div>
    {/* Right: Visual illustration */}
    <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-12 mt-8 md:mt-0 w-full">
      {mode.visual}
    </div>
  </motion.div>
);

const EngagementModesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const modeRefs = MODES.map(() => useRef<HTMLDivElement>(null));
  const inViews = modeRefs.map((ref) => useInView(ref, { amount: 0.5, once: false }));

  return (
    <section id="engagement-modes" className="relative min-h-screen bg-white flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto" style={{ scrollSnapType: 'y mandatory' }}>
      {/* Sticky Section Intro */}
      <div
        ref={headerRef}
        className="w-full max-w-4xl mx-auto text-center pt-24 pb-12 bg-white z-10 sticky top-0"
        style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.03)' }}
      >
        <div className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-2 text-indigo-400">
          <span role="img" aria-label="wave">🤝</span> How You Engage With Your Companion
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-4">Five Companion Engagement Modes</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your AI Companion doesn't just respond — it thinks, assists, and executes. Each mode represents a way your Companion collaborates with your team, amplifying productivity and decision-making across functions.
        </p>
      </div>

      {/* Vertical Scroll Steps */}
      <div className="w-full flex-1 flex flex-col items-center justify-start" style={{ position: 'relative' }}>
        {MODES.map((mode, i) => (
          <div
            key={mode.title}
            ref={modeRefs[i]}
            className="w-full"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ModeStep mode={mode} inView={inViews[i]} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngagementModesSection; 
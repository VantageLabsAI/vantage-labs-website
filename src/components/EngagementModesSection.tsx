import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const EngagementModesSection = () => {
  const [step, setStep] = useState(0);

  // Scroll handler for desktop (simulate scroll steps)
  React.useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && step < MODES.length - 1) {
        setStep((s) => Math.min(s + 1, MODES.length - 1));
      } else if (e.deltaY < 0 && step > 0) {
        setStep((s) => Math.max(s - 1, 0));
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [step]);

  return (
    <section id="engagement-modes" className="relative min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden">
      {/* Section Intro */}
      <div className="w-full max-w-4xl mx-auto text-center pt-24 pb-12">
        <div className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-2 text-indigo-400">
          <span role="img" aria-label="wave">🤝</span> How You Engage With Your Companion
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-4">Five Companion Engagement Modes</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your AI Companion doesn't just respond — it thinks, assists, and executes. Each mode represents a way your Companion collaborates with your team, amplifying productivity and decision-making across functions.
        </p>
      </div>

      {/* Scroll Steps */}
      <div className="w-full flex-1 flex flex-col md:flex-row items-stretch justify-center max-w-6xl mx-auto min-h-[60vh]">
        {/* Left: Mode content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-end pr-0 md:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-3xl" style={{ color: '#D4AF37' }}>{MODES[step].icon}</span>
                <span className="text-xl md:text-2xl font-bold text-midnight">{MODES[step].title}</span>
              </div>
              <div className="text-slate-600 text-lg mb-2">{MODES[step].desc}</div>
              {/* Progress dots */}
              <div className="flex gap-2 mt-8 justify-start">
                {MODES.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full border-2 ${i === step ? 'bg-indigo-400 border-indigo-500' : 'bg-slate-200 border-slate-300'} transition-all`}
                    onClick={() => setStep(i)}
                    aria-label={`Go to mode ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Right: Visual illustration */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-12 mt-8 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {MODES[step].visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EngagementModesSection; 
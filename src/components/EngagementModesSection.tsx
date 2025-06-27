
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bell, Workflow, TrendingUp, CheckSquare } from 'lucide-react';

const MODES = [
  {
    id: 'conversational',
    title: 'Conversational',
    subtitle: 'Natural dialogue and reasoning',
    icon: <MessageCircle size={20} />,
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex flex-col justify-center">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm text-gray-700">"What's our Q3 performance looking like?"</p>
          </div>
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-sm max-w-xs ml-auto">
            <p className="text-sm">Revenue is up 12% compared to Q2, with strong growth in enterprise segments. Would you like me to analyze the key drivers?</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm text-gray-700">"Yes, show me the breakdown"</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'proactive-alerts',
    title: 'Proactive Alerts',
    subtitle: 'Surface critical insights automatically',
    icon: <Bell size={20} />,
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 flex items-center justify-center">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="font-semibold text-gray-800">Critical Alert</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">Customer churn risk detected</p>
          <p className="text-xs text-gray-500">3 enterprise accounts showing usage decline</p>
          <button className="mt-3 text-xs bg-orange-400 text-white px-3 py-1 rounded">View Details</button>
        </motion.div>
      </div>
    )
  },
  {
    id: 'workflow-companion',
    title: 'Workflow Companion',
    subtitle: 'Orchestrate multi-step processes',
    icon: <Workflow size={20} />,
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 flex items-center justify-center">
        <div className="space-y-4 w-full max-w-sm">
          {[
            { step: 1, text: 'Gather requirements', status: 'complete' },
            { step: 2, text: 'Analyze stakeholders', status: 'complete' },
            { step: 3, text: 'Generate proposal', status: 'active' },
            { step: 4, text: 'Schedule review', status: 'pending' }
          ].map(({ step, text, status }) => (
            <div key={step} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                status === 'complete' ? 'bg-green-400 text-white' :
                status === 'active' ? 'bg-purple-400 text-white animate-pulse' :
                'bg-gray-200 text-gray-500'
              }`}>
                {step}
              </div>
              <span className={`text-sm ${status === 'pending' ? 'text-gray-400' : 'text-gray-700'}`}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'insight-generator',
    title: 'Insight Generator',
    subtitle: 'Discover patterns and opportunities',
    icon: <TrendingUp size={20} />,
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-cyan-100 rounded-2xl p-8 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm">
          <h4 className="font-semibold text-gray-800 mb-4">Key Insights</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
              <span className="text-sm text-gray-700">Revenue Growth</span>
              <span className="text-emerald-600 font-semibold">+23%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-sm text-gray-700">Customer Satisfaction</span>
              <span className="text-blue-600 font-semibold">94%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <span className="text-sm text-gray-700">Market Opportunity</span>
              <span className="text-orange-600 font-semibold">High</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'task-automator',
    title: 'Task Automator',
    subtitle: 'Execute actions autonomously',
    icon: <CheckSquare size={20} />,
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm">
          <h4 className="font-semibold text-gray-800 mb-4">Automated Tasks</h4>
          <div className="space-y-3">
            {[
              'Update CRM records',
              'Generate weekly report',
              'Schedule follow-up meetings',
              'Send status notifications'
            ].map((task, index) => (
              <motion.div 
                key={task}
                className="flex items-center gap-3 p-2"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-4 h-4 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, delay: index * 0.3, repeat: Infinity }}
                />
                <span className="text-sm text-gray-700">{task}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

const EngagementModesSection = () => {
  const [selectedMode, setSelectedMode] = useState(MODES[0].id);

  const currentMode = MODES.find(mode => mode.id === selectedMode) || MODES[0];

  return (
    <section 
      id="engagement-modes" 
      className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Section Header */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <div className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-4 text-indigo-400">
          <span role="img" aria-label="handshake">🤝</span> How You Engage With Your Companion
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">
          Five Companion Engagement Modes
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your AI Companion doesn't just respond — it thinks, assists, and executes across multiple interaction patterns.
        </p>
      </div>

      {/* Dynamic Split View */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Column: Mode Selection */}
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          <div className="space-y-2">
            {MODES.map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  selectedMode === mode.id 
                    ? 'bg-indigo-50 border-2 border-indigo-200 shadow-sm' 
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${selectedMode === mode.id ? 'text-indigo-600' : 'text-gray-400'}`}>
                    {mode.icon}
                  </div>
                  <h3 className={`font-semibold ${
                    selectedMode === mode.id ? 'text-indigo-900' : 'text-gray-700'
                  }`}>
                    {mode.title}
                  </h3>
                </div>
                <p className={`text-sm ${
                  selectedMode === mode.id ? 'text-indigo-700' : 'text-gray-500'
                }`}>
                  {mode.subtitle}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Panel */}
        <div className="flex-1">
          <motion.div 
            key={selectedMode}
            className="h-96 lg:h-full min-h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {currentMode.visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModesSection;

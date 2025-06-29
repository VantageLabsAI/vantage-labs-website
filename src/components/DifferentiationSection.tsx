
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Puzzle, TrendingUp, Shield, ArrowRight } from 'lucide-react';

interface CommitmentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const CommitmentCard: React.FC<CommitmentCardProps> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex flex-col items-start gap-6">
      <div className="text-indigo p-3 bg-indigo/5 rounded-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-midnight mb-3">{title}</h3>
        <p className="text-slate">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface TimelinePhaseProps {
  title: string;
  outcome: string;
  timeframe: string;
  delay?: number;
  isLast?: boolean;
}

const TimelinePhase: React.FC<TimelinePhaseProps> = ({ title, outcome, timeframe, delay = 0, isLast = false }) => (
  <div className="flex-1 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      {/* Phase Circle */}
      <div className="relative z-10 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>
      
      {/* Phase Content */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 mx-4">
        <h4 className="text-lg font-bold text-midnight mb-2">{title}</h4>
        <p className="text-sm text-slate-600 mb-4 italic">{outcome}</p>
        <div className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
          {timeframe}
        </div>
      </div>
    </motion.div>
    
    {/* Connecting Line */}
    {!isLast && (
      <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-300 to-indigo-400 transform translate-x-6 z-0"></div>
    )}
  </div>
);

const DifferentiationSection = () => {
  const commitments = [
    {
      icon: <Handshake size={24} />,
      title: "True Partnership Model",
      description: "We co-build with you — staying aligned to outcomes, not just deliverables."
    },
    {
      icon: <Puzzle size={24} />,
      title: "Tailored to Your Workflows",
      description: "Every solution is designed around how your teams think, decide, and act."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Embedded Enablement",
      description: "We continuously evolve the solution with your business — not a handover, but an alliance."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise-Grade Control",
      description: "Governance, security, and interoperability are baked in from Day 1."
    }
  ];

  const timelinePhases = [
    {
      title: "Rapid Alignment",
      outcome: "Strategic clarity from Day 1",
      timeframe: "2 Hours"
    },
    {
      title: "Feasibility & Fit",
      outcome: "Make it real, fast",
      timeframe: "2–3 Days"
    },
    {
      title: "Pilot in Production",
      outcome: "Real work. Real results.",
      timeframe: "8–12 Weeks"
    },
    {
      title: "Scale for Impact",
      outcome: "Expand, refine, multiply value",
      timeframe: "3–6 Months"
    }
  ];

  return (
    <section id="how-we-work" className="bg-gradient-to-b from-white to-pearl py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1A1F36 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container-wide section-padding relative z-10">
        {/* Header - Matching Value Unlock Section Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-4 text-indigo-400">
            <span role="img" aria-label="partnership">🤝</span> How Partnership Translates Into Progress
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-4 md:mb-6">
            We don't just ship AI — we build capability with you.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every AI solution is designed around your goals, embedded in your workflows, and evolved together for real-world adoption.
          </p>
        </motion.div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {commitments.map((commitment, index) => (
            <CommitmentCard
              key={commitment.title}
              icon={commitment.icon}
              title={commitment.title}
              description={commitment.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Timeline Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-midnight mb-4">
              Our Execution Journey
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From strategic alignment to scaled impact — a proven path that delivers results at every phase.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative flex items-start justify-between max-w-6xl mx-auto">
            {timelinePhases.map((phase, index) => (
              <TimelinePhase
                key={phase.title}
                title={phase.title}
                outcome={phase.outcome}
                timeframe={phase.timeframe}
                delay={0.6 + index * 0.1}
                isLast={index === timelinePhases.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;

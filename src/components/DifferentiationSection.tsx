import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Puzzle, TrendingUp, Shield } from 'lucide-react';

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

  return (
    <section id="differentiation" className="min-h-screen bg-white py-20">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
            We don't just ship AI — we build capability.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default DifferentiationSection;
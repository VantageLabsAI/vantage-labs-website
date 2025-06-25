import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const ProofSection = () => {
  const metrics = [
    {
      number: "4×",
      label: "Increased Engagement",
      description: "Higher business team participation and interaction",
    },
    {
      number: "100%",
      label: "Live Tracking",
      description: "Real-time performance monitoring across finance",
    },
    {
      number: "3",
      label: "Domain Expansion",
      description: "New business areas transformed in under 3 months",
    },
  ];

  return (
    <section id="proof" className="min-h-screen bg-pearl py-20">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
            Real businesses. Real results. Real change.
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Coromandel, one of India's largest agro-chemical companies, transformed how decisions
            are made with our AI Companion — starting in Finance, now expanding across the enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              number={metric.number}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <QuoteCard />
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
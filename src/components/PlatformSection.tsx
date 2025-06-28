import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from "lucide-react";

interface LayerProps {
  title: string;
  items: Array<{
    name: string;
    description: string;
  }>;
  className?: string;
}

const Layer: React.FC<LayerProps> = ({ title, items, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`rounded-2xl bg-white p-6 shadow-lg ${className}`}
  >
    <h3 className="text-xl font-semibold text-midnight mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="p-4 rounded-lg bg-pearl hover:bg-indigo/5 transition-colors cursor-pointer"
        >
          <h4 className="font-medium text-indigo mb-2">{item.name}</h4>
          <p className="text-sm text-slate">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const PlatformSection = () => {
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

  const applicationLayer = [
    { name: "Finance AI", description: "Intelligent financial analysis and forecasting" },
    { name: "Sales AI", description: "Smart sales insights and opportunity detection" },
    { name: "Ops AI", description: "Automated operations optimization" },
    { name: "Custom AI", description: "Tailored AI solutions for your needs" }
  ];

  const platformLayer = [
    { name: "Governance Engine", description: "Centralized control and compliance" },
    { name: "Control Hub", description: "Unified management interface" },
    { name: "Knowledge Base", description: "Shared enterprise intelligence" },
    { name: "Performance Analytics", description: "Real-time monitoring and insights" }
  ];

  const systemsLayer = [
    { name: "Data Sources", description: "Connect to existing databases" },
    { name: "APIs", description: "Integration with current tools" },
    { name: "Infrastructure", description: "Built on your tech stack" },
    { name: "Security", description: "Enterprise-grade protection" }
  ];

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pearl to-white py-20"
    >
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="text-sm font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-4 text-indigo-400">
            <Layers size={16} strokeWidth={1.5} />
            The Platform That Powers Every Companion
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
          Built to Scale AI. Designed to Multiply Impact.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI Nexus is your enterprise’s control center — making it easy to manage, evolve, and orchestrate intelligent Companions across teams, functions, and data systems.
          </p>
        </motion.div>

        <div className="space-y-6">
          <Layer
            title="Application Layer"
            items={applicationLayer}
            className="border-t-4 border-emerald"
          />
          <Layer
            title="AI Nexus Platform"
            items={platformLayer}
            className="border-t-4 border-indigo"
          />
          <Layer
            title="Client Systems"
            items={systemsLayer}
            className="border-t-4 border-midnight"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
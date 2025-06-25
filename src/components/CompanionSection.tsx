
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BarChart3, MessageSquare, TrendingUp, Globe } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
  >
    <div className="flex flex-col gap-4">
      <div className="text-indigo p-3 bg-indigo/5 rounded-xl w-fit group-hover:bg-indigo/10 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-midnight mb-2">{title}</h3>
        <p className="text-indigo font-medium italic mb-3">{subtitle}</p>
        <p className="text-slate leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const CompanionSection = () => {
  const features = [
    {
      icon: <BarChart3 size={24} />,
      title: "AI-Generated Business Dashboards",
      subtitle: "Anticipate. Prioritize. Take Action.",
      description: "Dynamic dashboards tailored to user roles — blending critical KPIs with emerging signals. No more blind spots or lag. Just timely, focused visibility."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Conversational Problem Solver",
      subtitle: "Ask, Analyze, Act — All in One Chat",
      description: "Describe any business issue in natural language and get instant answers — explanations, insights, and actions. No tools to juggle, just clarity."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Always-On Insight Engine",
      subtitle: "See What Changed, Why It Changed, and What to Do Next",
      description: "AI continuously scans for anomalies, trends, or shifts — and tells you what's driving them. Users are alerted the moment something moves."
    },
    {
      icon: <Globe size={24} />,
      title: "Integrated External Intelligence",
      subtitle: "Put Market Signals Next to Internal Metrics",
      description: "The companion enriches your view with market data — like commodity prices, demand forecasts, or weather trends — wherever relevant."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="companion" className="min-h-screen bg-pearl py-20">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
            Enterprise AI Companions to Supercharge How You Run, Learn, and Decide
          </h2>
          <p className="text-xl text-slate max-w-4xl mx-auto leading-relaxed">
            Your AI Companion brings together dashboards, insights, and chat — helping your teams 
            anticipate, analyze, and act — faster, smarter, and with greater confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate italic mb-8 text-lg">
            AI isn't a tool bolted on — it's the new connective tissue of the enterprise.
          </p>
          <Button 
            onClick={() => scrollToSection('solution')}
            className="bg-indigo hover:bg-indigo/90 text-white px-8 py-3 text-lg font-medium rounded-xl transition-all hover:scale-105"
          >
            Explore How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanionSection;

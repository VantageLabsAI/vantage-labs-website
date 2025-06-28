
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Rocket, Lightbulb, TrendingUp, Building } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    position: 'above',
    icon: Brain,
    title: '🧠 Business Challenge',
    bullets: [
      { icon: '🔍', text: 'Fragmented data systems' },
      { icon: '📊', text: 'Inconsistent product performance visibility' },
      { icon: '🧑‍💼', text: 'Dependency on analysts for key sales insights' },
      { icon: '⏳', text: 'Slowed retail decision-making and front-line responsiveness' },
    ],
  },
  {
    id: 2,
    position: 'below',
    icon: Rocket,
    title: '🚀 AI Companion Deployed',
    bullets: [
      { icon: '🤖', text: 'Domain-trained Retail AI Companion embedded in sales/product ecosystem' },
      { icon: '💬', text: 'Business users ask product, pricing, margin, and inventory questions in natural language' },
      { icon: '⚡', text: 'Contextual answers delivered instantly' },
    ],
  },
  {
    id: 3,
    position: 'above',
    icon: Lightbulb,
    title: '💡 Capabilities Introduced',
    bullets: [
      { icon: '🗣️', text: 'Natural language Q&A on product performance and pricing' },
      { icon: '📈', text: 'Instant analysis of margins, volumes, and movement patterns' },
      { icon: '🎯', text: 'Sales-facing insights for proactive promotion and bundling' },
    ],
  },
  {
    id: 4,
    position: 'below',
    icon: TrendingUp,
    title: '📈 Impact Delivered',
    bullets: [
      { icon: '✅', text: '65% faster turnaround for product and pricing queries' },
      { icon: '✅', text: '2.5x increase in business user engagement with sales data' },
      { icon: '✅', text: 'Companion became the default analytics interface for retail decision-makers' },
    ],
  },
  {
    id: 5,
    position: 'above',
    icon: Building,
    title: '🧱 What Next',
    bullets: [
      { icon: '🔄', text: 'Deploying the same AI Companion across Inventory, Marketing, and Planning' },
      { icon: '🧩', text: 'Unified decision-making layer using shared platform architecture' },
    ],
  },
];

// Animation variants with proper TypeScript compatibility
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const RetailCaseStudy: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-8 px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Header - Reduced spacing */}
        <div className="text-center mb-8">
          <div className="text-xs font-light uppercase tracking-widest flex items-center justify-center gap-2 mb-3 text-indigo-400">
            <span role="img" aria-label="unlock">🔓</span> From Pilot to Real-World Impact
          </div>
          <motion.h2
            variants={headerVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            How a Leading Indian Agro-Chemicals Company
          </motion.h2>
          <motion.h3
            variants={headerVariants}
            className="text-xl md:text-2xl font-bold text-indigo-600 mb-4"
          >
            Transformed Retail with AI
          </motion.h3>
          <motion.div
            variants={headerVariants}
            className="border-l-4 border-indigo-500 pl-6 text-base text-gray-600 italic max-w-3xl mx-auto"
          >
            Turning a business-critical domain into a proving ground for scalable, production-grade AI.
          </motion.div>
        </div>

        {/* Timeline Container - Adjusted positioning and spacing */}
        <div className="relative py-12">
          {/* Central Timeline Line - Positioned to cut through icon centers */}
          <motion.div
            variants={timelineVariants}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-indigo-400 to-gray-300 transform -translate-y-1/2 z-0"
          />
          
          {/* Timeline Content */}
          <div className="relative grid grid-cols-5 gap-2">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* Timeline Node - Centered on the line */}
                  <motion.div
                    variants={{
                      hidden: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="relative z-10 w-10 h-10 bg-white rounded-full border-4 border-indigo-500 flex items-center justify-center shadow-lg"
                  >
                    <IconComponent className="w-4 h-4 text-indigo-600" />
                  </motion.div>

                  {/* Card - Positioned with proper spacing */}
                  <motion.div
                    variants={cardVariants}
                    className={`absolute w-56 ${
                      item.position === 'above'
                        ? 'bottom-8 mb-2'
                        : 'top-8 mt-2'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-sm font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                            <span className="text-sm mt-0.5 flex-shrink-0">{bullet.icon}</span>
                            <span>{bullet.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Connector Line */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 ${
                        item.position === 'above'
                          ? 'top-full h-2'
                          : 'bottom-full h-2'
                      }`}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - Reduced spacing */}
        <motion.div
          variants={ctaVariants}
          className="text-center mt-8"
        >
          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg text-base font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Explore Your AI Companion Journey
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RetailCaseStudy;

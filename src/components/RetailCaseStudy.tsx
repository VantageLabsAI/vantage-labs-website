
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Rocket, Bulb, TrendingUp, Building } from 'lucide-react';

const RetailCaseStudy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const timelineData = [
    {
      id: 1,
      position: 'above',
      icon: Brain,
      title: '🧠 Business Challenge',
      content: 'Fragmented data systems, inconsistent product performance visibility, and dependency on analysts for key sales insights were slowing down retail decision-making and front-line responsiveness.'
    },
    {
      id: 2,
      position: 'below',
      icon: Rocket,
      title: '🚀 AI Companion Deployed',
      content: 'A domain-trained Retail AI Companion was embedded into the company\'s sales and product performance ecosystem. It enabled business users to ask product, pricing, margin, and inventory questions in natural language — and receive contextual answers instantly.'
    },
    {
      id: 3,
      position: 'above',
      icon: Bulb,
      title: '💡 Capabilities Introduced',
      content: [
        'Natural language Q&A on product performance and pricing',
        'Instant analysis of margins, volumes, and movement patterns',
        'Sales-facing insights for proactive promotion and bundling'
      ]
    },
    {
      id: 4,
      position: 'below',
      icon: TrendingUp,
      title: '📈 Impact Delivered',
      content: [
        '✅ 65% faster turnaround for product and pricing queries',
        '✅ 2.5x increase in business user engagement with sales data',
        '✅ Companion became the default analytics interface for retail decision-makers'
      ]
    },
    {
      id: 5,
      position: 'above',
      icon: Building,
      title: '🧱 What\'s Next',
      content: 'Building on the retail success, the company is now deploying the same AI Companion across Inventory, Marketing, and Planning — using the shared platform architecture.'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={cardVariants}
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-4"
          >
            From Pilot to Real-World Impact
          </motion.div>
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How a Leading Indian Agro-Chemicals Company
          </motion.h2>
          <motion.h3
            variants={cardVariants}
            className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6"
          >
            Transformed Retail with AI
          </motion.h3>
          <motion.div
            variants={cardVariants}
            className="border-l-4 border-indigo-500 pl-6 text-lg text-gray-600 italic max-w-3xl mx-auto"
          >
            Turning a business-critical domain into a proving ground for scalable, production-grade AI.
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            variants={cardVariants}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-indigo-400 to-gray-300 transform -translate-y-1/2"
          />

          {/* Timeline Content */}
          <div className="relative grid grid-cols-5 gap-8 py-24">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* Card - positioned above or below based on position */}
                  <motion.div
                    variants={cardVariants}
                    className={`absolute w-80 ${
                      item.position === 'above' 
                        ? 'bottom-16 mb-8' 
                        : 'top-16 mt-8'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      {Array.isArray(item.content) ? (
                        <ul className="space-y-2">
                          {item.content.map((point, idx) => (
                            <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                    
                    {/* Connector Line */}
                    <div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 ${
                        item.position === 'above' 
                          ? 'top-full h-8' 
                          : 'bottom-full h-8'
                      }`}
                    />
                  </motion.div>

                  {/* Timeline Node */}
                  <motion.div
                    variants={nodeVariants}
                    className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-indigo-500 flex items-center justify-center shadow-lg"
                  >
                    <IconComponent className="w-7 h-7 text-indigo-600" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={cardVariants}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Explore Your AI Companion Journey
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RetailCaseStudy;

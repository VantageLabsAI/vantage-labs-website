import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Mail, Shield } from 'lucide-react';

const CTASection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-24 px-6">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9]
              }
            }
          }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Let's explore your highest-impact opportunity.
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9]
              }
            }
          }}
          className="text-lg text-gray-600 space-y-4 mb-12"
        >
          <p>Every engagement begins with a conversation, not a contract.</p>
          <p>We listen, map, and explore how AI can be embedded where it matters most.</p>
          <p>If it's a fit, we co-build. If not, you walk away with insight.</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96] // Using cubic bezier for easing
              }
            }
          }}
          className="space-y-6"
        >
          <button
            onClick={() => window.open('https://calendly.com/your-calendar-link', '_blank')}
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Book a Discovery Call"
          >
            <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
            Book a Discovery Call
          </button>

          <div className="pt-12">
            <button
              onClick={() => window.location.href = 'mailto:contact@your-domain.com'}
              className="inline-flex items-center px-6 py-3 text-gray-700 rounded-lg text-base hover:text-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Contact Us via Email"
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }
          }}
          className="mt-16 flex items-center justify-center text-sm text-gray-500"
        >
          <Shield className="w-4 h-4 mr-2" />
          Built on secure cloud infrastructure
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
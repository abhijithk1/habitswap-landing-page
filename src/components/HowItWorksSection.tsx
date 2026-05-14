import React from 'react';
import { motion } from 'motion/react';

const HowItWorksSection = () => {
  const steps = [
    {
      emoji: "⚡",
      title: "Feel the urge",
      description: "Hit the big button the moment you feel the pull."
    },
    {
      emoji: "🎯",
      title: "Do the swap task",
      description: "Quick activities that interrupt and replace the pattern."
    },
    {
      emoji: "🧠",
      title: "Watch your brain rewire",
      description: "Track progress as new neural pathways form."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-surface-deep/30 border-y border-purple">
      <div className="max-w-[640px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary-light font-light text-lg mb-3 tracking-[0.03em]">Simple by design</p>
          <h2 className="text-white font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.01em]">Three steps to a rewired brain</h2>
        </div>

        <div className="space-y-4 relative ml-4 md:ml-0 md:flex md:flex-col md:items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex md:flex-col md:items-center relative">
              {/* Connector line - except for the last item */}
              {idx !== steps.length - 1 && (
                <div className="absolute left-[17px] top-[40px] bottom-[-20px] w-[2px] bg-border md:left-1/2 md:-translate-x-1/2" />
              )}
              
              <div className="flex md:flex-col md:items-center w-full">
                {/* Number Circle */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.15, duration: 0.4 }}
                  className="w-[36px] h-[36px] rounded-full bg-primary text-white font-extrabold flex items-center justify-center flex-shrink-0 relative z-10"
                >
                  {idx + 1}
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: (idx * 0.15) + 0.1, duration: 0.4 }}
                  className="ml-6 md:ml-0 md:mt-6 md:text-center pb-12 w-full max-w-[320px]"
                >
                  <div className="flex items-center gap-3 md:justify-center mb-2">
                    <span className="text-[28px] leading-none">{step.emoji}</span>
                    <h3 className="text-white font-bold text-[18px]">{step.title}</h3>
                  </div>
                  <p className="text-primary-light text-[14px] leading-relaxed md:px-4">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

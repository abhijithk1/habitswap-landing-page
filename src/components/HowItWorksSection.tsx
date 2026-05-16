import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, BrainCircuit } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Zap,
      title: "Feel the urge",
      description: "Hit the big button the moment you feel the pull. No thinking required."
    },
    {
      icon: Target,
      title: "Do the swap task",
      description: "Specific activities scientifically designed to interrupt and replace."
    },
    {
      icon: BrainCircuit,
      title: "Watch your brain rewire",
      description: "Track your progress as new neural pathways form before your eyes."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-black z-0" />
      
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-black text-[clamp(2.5rem,5vw,5rem)] tracking-tighter leading-none"
          >
            Three steps.<br />
            <span className="text-gray-500">Perfectly simple.</span>
          </motion.h2>
        </div>

        <div className="space-y-12 relative flex flex-col md:flex-row md:space-y-0 md:justify-between">
          <div className="hidden md:block absolute top-[24px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex md:flex-col md:items-center relative z-10 w-full md:w-1/3">
              
              <div className="flex md:flex-col items-start md:items-center w-full">
                {/* Number Circle */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.8, type: "spring" }}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/80 backdrop-blur-md text-white font-semibold flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <span className="text-xl">{idx + 1}</span>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx * 0.15) + 0.2, duration: 0.8 }}
                  className="ml-6 md:ml-0 md:mt-8 md:text-center w-full"
                >
                  <div className="flex flex-col items-start md:items-center gap-3 mb-4">
                    <span className="text-gray-300 w-10 h-10 rounded-2xl bg-[#111] border border-[#222] flex items-center justify-center shadow-inner">
                      <step.icon strokeWidth={1.5} className="w-5 h-5 text-purple-400" />
                    </span>
                    <h3 className="text-white font-bold text-2xl tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed font-light md:px-2 max-w-[280px]">
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

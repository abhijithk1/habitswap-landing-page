import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, Brain, ShieldAlert, Award, ActivitySquare, Share2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MousePointerClick,
      title: "Instant Swap Button",
      description: "Large, pulsing trigger. No friction — just tap and swap instantly."
    },
    {
      icon: Brain,
      title: "Smart Swap Selection",
      description: "Context-aware tasks matched to your urge type, time, and location."
    },
    {
      icon: ShieldAlert,
      title: "Streak Protector",
      description: "2-hour grace period. Protect your progress without guilt or shame."
    },
    {
      icon: Award,
      title: "Streak Milestones",
      description: "Animated celebrations at 3, 7, 14, and 30-day streak achievements."
    },
    {
      icon: ActivitySquare,
      title: "Neural Dashboard",
      description: "7-day heatmap, danger window insights, and interactive progress."
    },
    {
      icon: Share2,
      title: "Social Accountability",
      description: "Share progress cards with friends and stay on track together."
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-extrabold text-[clamp(3rem,6vw,5rem)] tracking-tighter leading-none mb-2"
          >
            Rewire by <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500">design.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto font-light tracking-wide"
          >
            Every feature is meticulously crafted to seamlessly intercept your patterns and build healthier neural pathways.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group bg-[#0A0A0B] rounded-[32px] p-10 border border-[#2A2A2E] transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.1)] relative overflow-hidden"
            >
              {/* Hover sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-[20px] bg-black border border-white/5 flex items-center justify-center text-gray-300 mb-8 shadow-inner group-hover:scale-110 group-hover:text-purple-400 transition-all duration-500">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

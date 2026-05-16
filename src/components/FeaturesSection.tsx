import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, Brain, ShieldAlert, Award, ActivitySquare, Share2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MousePointerClick,
      title: "Instant Swap Button",
      description: "Large, pulsing trigger. No friction — just tap and swap."
    },
    {
      icon: Brain,
      title: "Smart Swap Selection",
      description: "Context-aware tasks matched to your urge type, time, and location."
    },
    {
      icon: ShieldAlert,
      title: "Streak Protector",
      description: "2-hour grace period. Protect your progress without guilt."
    },
    {
      icon: Award,
      title: "Streak Milestones",
      description: "Animated celebrations at 3, 7, 14, and 30-day streaks."
    },
    {
      icon: ActivitySquare,
      title: "Brain Rewire Dashboard",
      description: "7-day heatmap, danger window insights, and animated arc progress."
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Share progress cards with friends and stay accountable."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.01em] mb-4"
          >
            Rewire by <span className="text-gradient">Design</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-pale text-lg max-w-2xl mx-auto opacity-80 font-light"
          >
            Every feature is meticulously crafted to seamlessly intercept your patterns and build healthier neural pathways.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group glass-card rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-surface-deep border border-purple flex items-center justify-center text-primary-light mb-6 shadow-[0_0_15px_rgba(124,58,237,0.2)] group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-primary-pale leading-relaxed text-sm opacity-80">
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

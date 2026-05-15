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
    <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-primary-light font-light text-lg mb-3 tracking-[0.03em]">Everything you need</p>
        <h2 className="text-white font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.01em]">Built to rewire your brain</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-surface border-2 border-transparent hover:border-primary-bright rounded-[20px] p-8 transition-all duration-250 ease-out hover:-translate-y-1 shadow-card"
          >
            <div className="text-primary-light mb-6">
              <feature.icon className="w-10 h-10" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
            <p className="text-primary-pale leading-relaxed text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

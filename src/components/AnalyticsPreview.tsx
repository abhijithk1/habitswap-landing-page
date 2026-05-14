import React from 'react';
import { motion } from 'motion/react';

const AnalyticsPreview = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-white font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.01em]">Track every rewire</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[480px] mx-auto bg-surface border border-purple rounded-[24px] p-8 shadow-card"
      >
        {/* Brain Rewire Header / Arc */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-[160px] h-[160px] flex items-center justify-center">
            <svg width="160" height="160" className="absolute -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="rgba(139,92,246,0.15)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="var(--color-primary-bright)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 70}
                  initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 70 * (1 - 0.632) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
            </svg>
            <div className="text-center mt-2">
              <div className="text-3xl font-extrabold text-white">63%</div>
              <div className="text-xs font-semibold text-primary-light uppercase tracking-wider">Rewired</div>
            </div>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-[#1F1535] border-2 border-primary rounded-[20px] p-4 mb-8 shadow-amber relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent-amber/5 group-hover:bg-accent-amber/10 transition-colors" />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <div className="text-primary-pale text-sm font-semibold mb-1">Current Streak</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span className="text-white font-bold text-xl">7 Days</span>
              </div>
            </div>
            <div className="bg-surface-deep px-3 py-1.5 rounded-full border border-purple flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-green shadow-green animate-pulse" />
              <span className="text-xs text-primary-pale font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* 7-Day Heatmap */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-3">
             <h4 className="text-white font-bold text-md">Activity Heatmap</h4>
             <span className="text-xs text-muted">Last 7 days</span>
          </div>
          <div className="flex justify-between gap-1">
            {/* Generating random-looking opacities for the heatmap, matching a dark theme */}
            {[0.2, 0.4, 0.1, 0.8, 1, 0.6, 0.5].map((opacity, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full aspect-square rounded-[8px]" 
                  style={{ backgroundColor: `rgba(139,92,246,${opacity})`}}
                />
                <span className="text-[10px] text-muted font-medium mt-1">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Urges */}
        <div>
          <h4 className="text-white font-bold text-md mb-4">Top Urges Prevented</h4>
          <div className="space-y-4">
            {[
              { label: "Doomscrolling", percent: 65, value: "14 swaps" },
              { label: "Junk Food", percent: 25, value: "5 swaps" },
              { label: "Biting Nails", percent: 10, value: "2 swaps" }
            ].map((urge, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-pale font-medium">{urge.label}</span>
                  <span className="text-muted">{urge.value}</span>
                </div>
                <div className="h-2 w-full bg-surface-deep rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${urge.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default AnalyticsPreview;

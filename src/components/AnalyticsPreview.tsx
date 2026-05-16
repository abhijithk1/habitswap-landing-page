import React from 'react';
import { motion } from 'motion/react';
import { Flame, Activity, Zap, TrendingUp } from 'lucide-react';

const AnalyticsPreview = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary-bright/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 5, rotateX: 5, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-[420px] mx-auto lg:ml-auto glass-card rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] relative"
            >
              {/* Fake phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-deep rounded-b-2xl" />

              {/* Header */}
              <div className="flex justify-between items-center mb-8 mt-4">
                <h3 className="text-white font-bold text-xl">Dashboard</h3>
                <div className="w-8 h-8 rounded-full bg-surface-deep flex items-center justify-center border border-purple">
                  <Activity className="w-4 h-4 text-primary-light" />
                </div>
              </div>

              {/* Arc */}
              <div className="flex flex-col items-center mb-10">
                <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                  <svg width="180" height="180" className="absolute -rotate-90">
                      <defs>
                        <linearGradient id="arcGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--color-primary-light)" />
                          <stop offset="100%" stopColor="var(--color-primary-bright)" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="90"
                        cy="90"
                        r="80"
                        stroke="rgba(139,92,246,0.1)"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="90"
                        cy="90"
                        r="80"
                        stroke="url(#arcGradient2)"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 80}
                        initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 80 * (1 - 0.72) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.5))" }}
                      />
                  </svg>
                  <div className="text-center mt-2">
                    <div className="text-4xl font-extrabold text-white tracking-tight">72<span className="text-2xl">%</span></div>
                    <div className="text-[10px] font-bold text-primary-light uppercase tracking-[0.2em] mt-1">Rewired</div>
                  </div>
                </div>
              </div>

              {/* Streak Card */}
              <div className="bg-gradient-to-r from-surface-deep to-surface border border-purple rounded-2xl p-5 mb-8 flex justify-between items-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-amber/5 group-hover:bg-accent-amber/10 transition-colors" />
                <div className="relative z-10">
                  <div className="text-primary-pale text-xs font-semibold uppercase tracking-wider mb-1">Current Streak</div>
                  <div className="text-white font-bold text-2xl flex items-center gap-2">
                    14 Days
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent-amber/20 border border-accent-amber flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  <Flame className="w-6 h-6 text-accent-amber fill-current" />
                </div>
              </div>

              {/* Heatmap */}
               <div>
                <div className="flex justify-between items-end mb-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider text-muted">Weekly Activity</h4>
                  <TrendingUp className="w-4 h-4 text-primary-light" />
                </div>
                <div className="flex justify-between gap-2">
                  {[0.1, 0.3, 0.2, 0.8, 1, 0.6, 0.4].map((opacity, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${opacity * 100}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                        className="w-full rounded-md bg-gradient-to-t from-primary to-primary-bright relative group"
                        style={{ minHeight: '8px', height: `${opacity * 60}px` }}
                      >
                         <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
                      </motion.div>
                      <span className="text-[10px] text-muted font-semibold">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple bg-surface/50 backdrop-blur-md mb-6">
                  <Zap className="w-4 h-4 text-primary-bright" />
                  <span className="text-primary-pale text-xs font-semibold tracking-wider uppercase">Visual Progress</span>
                </div>
                <h2 className="text-white font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.02em] leading-tight mb-6">
                  Watch your <br />
                  <span className="text-gradient">brain rewire</span>
                </h2>
                <p className="text-primary-pale text-lg max-w-xl font-light leading-relaxed mb-8 opacity-80">
                  Every time you swap an urge, you strengthen a new neural pathway. Our beautiful dashboard visualizes your progress in real-time. See the science working.
                </p>
                <ul className="space-y-4">
                  {[
                    "Interactive weekly heatmaps",
                    "Danger-window analysis & insights",
                    "Milestone celebrations and streaks",
                    "Real-time neuroplasticity modeling"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary">
                        <div className="w-2 h-2 rounded-full bg-primary-bright" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;

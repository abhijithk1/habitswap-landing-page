import React from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Brain, Lock, Flame } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background Gradient & Animated Blobs */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(21,16,37,1) 0%, #0B0914 100%)' }}
      />
      <div className="blob-bg w-[600px] h-[600px] top-[-100px] right-[-100px]" />
      <div className="blob-bg w-[400px] h-[400px] bottom-[-200px] left-[-100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Copy */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple bg-surface/50 backdrop-blur-md mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary-bright pulse-glow" />
              <span className="text-primary-pale text-xs font-semibold tracking-wider uppercase">Habit Swap is Live</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-white font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Master your mind.<br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full -z-10"></span>
                <span className="text-gradient">Rewire your brain.</span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-primary-pale text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-light opacity-90"
            >
              Habit Swap intercepts your urges with neuroscience-backed alternatives. Break the cycle, form new pathways, and reclaim your time.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button 
                onClick={() => {
                  const element = document.getElementById('download');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative group bg-primary text-white font-bold py-4 px-8 rounded-full shadow-cta overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary-bright to-primary transition-all duration-300 group-hover:scale-105" />
                <span className="relative text-lg">Start Rewiring</span>
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted text-sm font-medium"
            >
              <div className="flex items-center gap-[-10px] mr-1">
                 <div className="w-8 h-8 rounded-full border-2 border-bg bg-surface-deep overflow-hidden">
                   <img src="https://i.pravatar.cc/100?img=1" className="w-full h-full object-cover" alt="User" />
                 </div>
                 <div className="w-8 h-8 rounded-full border-2 border-bg bg-surface-deep overflow-hidden -ml-3">
                   <img src="https://i.pravatar.cc/100?img=2" className="w-full h-full object-cover" alt="User" />
                 </div>
                 <div className="w-8 h-8 rounded-full border-2 border-bg bg-surface-deep overflow-hidden -ml-3">
                   <img src="https://i.pravatar.cc/100?img=3" className="w-full h-full object-cover" alt="User" />
                 </div>
              </div>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-accent-amber fill-current" /> 4.9/5 from early users</span>
            </motion.div>
          </div>

          {/* Right Column - Premium SWAP IT Interactive Element */}
          <div className="relative flex justify-center items-center h-[500px] lg:h-[600px] float-animation">
             {/* Center Swap Button Context */}
             <div className="relative group perspective-1000">
               {/* Pulsing Outer Rings */}
               <div className="absolute inset-0 rounded-full bg-primary/20 pulse-glow scale-[1.3]" />
               <div className="absolute inset-0 rounded-full border border-primary/30 scale-[1.1] animate-spin-slow" style={{ animationDuration: '20s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} />
               
               {/* SVG Progress Arc */}
               <svg width="340" height="340" className="absolute -inset-[50px] -rotate-90">
                 <defs>
                   <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="var(--color-primary-light)" />
                     <stop offset="100%" stopColor="var(--color-primary-bright)" />
                   </linearGradient>
                 </defs>
                 <circle
                   cx="170"
                   cy="170"
                   r="150"
                   stroke="rgba(139,92,246,0.1)"
                   strokeWidth="3"
                   fill="transparent"
                 />
                 <motion.circle
                   cx="170"
                   cy="170"
                   r="150"
                   stroke="url(#arcGradient)"
                   strokeWidth="6"
                   strokeLinecap="round"
                   fill="transparent"
                   strokeDasharray={2 * Math.PI * 150}
                   initial={{ strokeDashoffset: 2 * Math.PI * 150 }}
                   animate={{ strokeDashoffset: 2 * Math.PI * 150 * (1 - 0.72) }}
                   transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
                   style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))" }}
                 />
               </svg>

               {/* Center Button */}
               <motion.div 
                 whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
                 whileTap={{ scale: 0.95 }}
                 className="relative z-10 w-[240px] h-[240px] rounded-full bg-gradient-to-br from-primary-bright to-[#5B21B6] shadow-[0_0_50px_rgba(124,58,237,0.5),inset_0_2px_10px_rgba(255,255,255,0.3)] flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 border border-primary-light/50"
               >
                 <span className="text-white font-extrabold tracking-[0.1em] text-3xl drop-shadow-md">SWAP IT</span>
                 <span className="text-primary-ghost text-xs tracking-widest mt-2 uppercase opacity-80">Stop the urge</span>
               </motion.div>
             </div>

             {/* Floating Stat Cards (Glassmorphism) */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
               className="glass-card absolute top-[20%] right-[-5%] sm:right-[10%] rounded-2xl px-5 py-3 z-20 flex items-center gap-3 backdrop-blur-xl"
             >
               <div className="w-8 h-8 rounded-full bg-accent-amber/20 flex items-center justify-center border border-accent-amber/30">
                 <Flame className="w-4 h-4 text-accent-amber fill-current" />
               </div>
               <div>
                 <div className="text-white font-bold text-sm">14 day streak</div>
                 <div className="text-muted text-xs">Top 5% of users</div>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
               className="glass-card absolute bottom-[20%] left-[-5%] sm:left-[5%] rounded-2xl px-5 py-3 z-20 flex items-center gap-3 backdrop-blur-xl"
             >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                 <Brain className="w-4 h-4 text-primary-light" />
               </div>
               <div>
                 <div className="text-white font-bold text-sm">72% Rewired</div>
                 <div className="text-muted text-xs">Pathways forming</div>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

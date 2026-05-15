import React from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Brain, Lock, Flame } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Copy */}
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary-light font-light text-lg mb-4 tracking-[0.03em]"
            >
              feeling the urge?
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white font-extrabold text-[clamp(3rem,6vw,5rem)] leading-[1.1] tracking-[-0.02em] mb-6"
            >
              Replace urges.<br />
              <span className="relative inline-block">
                <span className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full -z-10"></span>
                <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-primary-pale drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]">Rewire your brain.</span>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-pale text-xl leading-relaxed mb-10 max-w-xl"
            >
              Habit Swap intercepts your urges and gives you instant, science-backed alternatives that rewire your brain over time.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="bg-primary text-white font-bold py-4 px-8 rounded-[16px] shadow-cta hover:scale-[1.03] hover:bg-[#8B5CF6] transition-all text-lg">
                Download on App Store
              </button>
              <button className="bg-transparent border-2 border-primary border-opacity-30 text-white font-bold py-4 px-8 rounded-[16px] hover:border-opacity-100 transition-all text-lg tracking-wide">
                Get it on Google Play
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-muted text-sm font-medium"
            >
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-accent-amber fill-current" /> 4.9 rating</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Brain className="w-4 h-4" /> 10,000+ brains rewired</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> No data sold</span>
            </motion.div>
          </div>

          {/* Right Column - SWAP IT Hero Animation */}
          <div className="relative flex justify-center items-center h-[500px] lg:h-[600px]">
             {/* Center Swap Button Context */}
             <div className="relative group">
               {/* Pulsing Outer Ring */}
               <div className="absolute inset-0 rounded-full bg-primary/15 pulse-glow scale-[1.3] group-hover:animation-paused" />
               
               {/* SVG Progress Arc */}
               <svg width="320" height="320" className="absolute -inset-[40px] -rotate-90">
                 <circle
                   cx="160"
                   cy="160"
                   r="140"
                   stroke="rgba(139,92,246,0.15)" /* track */
                   strokeWidth="8"
                   fill="transparent"
                 />
                 <motion.circle
                   cx="160"
                   cy="160"
                   r="140"
                   stroke="var(--color-primary-bright)"
                   strokeWidth="8"
                   strokeLinecap="round"
                   fill="transparent"
                   strokeDasharray={2 * Math.PI * 140}
                   initial={{ strokeDashoffset: 2 * Math.PI * 140 }}
                   animate={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - 0.632) }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                 />
               </svg>

               {/* Center Button */}
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="relative z-10 w-[240px] h-[240px] rounded-full bg-primary shadow-cta flex items-center justify-center cursor-pointer transition-transform duration-300"
               >
                 <span className="text-white font-extrabold tracking-[2px] text-3xl">SWAP IT</span>
               </motion.button>
             </div>

             {/* Stat Chips */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1, duration: 0.5 }}
               className="absolute top-10 right-0 sm:right-10 bg-accent-amber/15 border border-accent-amber rounded-full px-5 py-2.5 shadow-amber z-20 backdrop-blur-sm flex items-center gap-2"
             >
               <Flame className="w-4 h-4 text-accent-amber fill-current" />
               <span className="text-white font-semibold text-sm">7 day streak</span>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2, duration: 0.5 }}
               className="absolute bottom-10 left-0 sm:left-10 bg-primary/15 border border-purple rounded-full px-5 py-2.5 z-20 backdrop-blur-sm"
             >
               <span className="text-white font-semibold text-sm">63.2% brain rewired</span>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

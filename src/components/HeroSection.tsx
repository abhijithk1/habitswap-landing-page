import React from 'react';
import { motion } from 'motion/react';
import { Star, Flame, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-24 overflow-hidden bg-black text-white">
      {/* Background Gradient & Animated Blobs - Deep Cinematic Look */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30,10,60,0.8) 0%, transparent 100%)' }}
      />
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Tiny pill label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">Now Available</span>
        </motion.div>

        {/* Apple-style ultra large headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1, duration: 1, ease: "circOut" }}
          className="text-white font-black text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tighter mb-8 max-w-5xl"
        >
          Master your mind.<br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-gray-500 [text-shadow:0_0_80px_rgba(168,85,247,0.3)]">Rewire your brain.</span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-gray-400 text-xl sm:text-2xl leading-relaxed mb-12 max-w-3xl font-light tracking-wide"
        >
          Habit Swap intercepts your urges with neuroscience-backed alternatives. Break the cycle, form new pathways, and reclaim your time.
        </motion.p>
        
        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-8 mb-16"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('download');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative group bg-white text-black font-extrabold py-5 px-10 rounded-[28px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <span className="relative text-xl tracking-wide z-10 block">Start Rewiring</span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          </button>
        </motion.div>

        {/* Social Proof Row inline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-8 p-6 rounded-full glass-card border border-white/5"
        >
          <div className="flex items-center gap-[-15px]">
              <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-2 border-black object-cover relative z-30" alt="User" />
              <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full border-2 border-black object-cover relative z-20 -ml-4" alt="User" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-12 h-12 rounded-full border-2 border-black object-cover relative z-10 -ml-4" alt="User" />
          </div>
          <div className="h-10 w-px bg-white/10 hidden sm:block" />
          <div className="text-left flex flex-col items-center sm:items-start">
            <span className="flex items-center gap-1.5 text-white font-bold text-lg"><Star className="w-5 h-5 text-yellow-400 fill-current" /> 4.9/5</span>
            <span className="text-gray-500 text-sm font-medium tracking-wide">from early beta users</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

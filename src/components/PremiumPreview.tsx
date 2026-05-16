import React from 'react';
import { motion } from 'motion/react';
import { Activity, Brain, Shield, ChevronRight } from 'lucide-react';

const PremiumPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg z-0" />
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-3/4 h-[400px] bg-primary-bright/10 blur-[150px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple bg-surface-deep/80 mb-6"
          >
            <Shield className="w-4 h-4 text-primary-light" />
            <span className="text-primary-pale text-xs font-semibold tracking-wider uppercase">Premium Experience</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.01em] mb-4"
          >
            A look inside the <span className="text-gradient">Habit Swap</span> app.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-pale text-lg max-w-2xl mx-auto font-light"
          >
            Beautifully designed. Neuroscience-backed. Built to help you break bad habits and reclaim your mind.
          </motion.p>
        </div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Mockup (Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000 md:mt-12"
          >
            <div className="glass-card rounded-[40px] p-2 border-[6px] border-surface-deep shadow-2xl relative overflow-hidden bg-bg/80 backdrop-blur-xl h-[600px] w-full max-w-[280px] mx-auto group">
              {/* Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                <div className="w-[100px] h-[24px] bg-black rounded-b-3xl" />
              </div>
              
              {/* Screen Content - Dashboard */}
              <div className="bg-[#0B0914] w-full h-full rounded-[30px] p-5 pt-14 flex flex-col items-center relative overflow-hidden">
                <div className="absolute -top-10 left-10 w-40 h-40 bg-purple/20 blur-3xl rounded-full pointer-events-none" />
                
                <h3 className="text-white text-2xl font-bold self-start leading-tight mb-8 z-10 w-3/4">Brain Rewire Dashboard</h3>
                
                {/* Progress Circle */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-6 z-10">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="76" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                    <circle cx="80" cy="80" r="76" stroke="#7C3AED" strokeWidth="8" fill="none" strokeDasharray="477" strokeDashoffset="450" strokeLinecap="round" />
                  </svg>
                  <div className="text-center">
                    <span className="text-primary-light text-4xl font-extrabold tracking-tighter">5.6%</span>
                    <p className="text-primary-pale/60 text-[10px] leading-tight mt-1 max-w-[80px] mx-auto">neural pathways rewired</p>
                  </div>
                </div>

                {/* Streak Card */}
                <div className="w-full bg-[#1A1428] border border-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg mb-6 z-10 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🔥</span>
                    <span className="text-white text-3xl font-extrabold">2</span>
                  </div>
                  <span className="text-primary-pale text-xs">day streak</span>
                </div>

                {/* This Week */}
                <div className="w-full self-start z-10">
                  <h4 className="text-white text-sm font-semibold mb-3">This Week</h4>
                  <div className="flex justify-between gap-1">
                    {[
                      { l: 'W', v: null }, { l: 'T', v: null }, { l: 'F', v: null }, 
                      { l: 'S', v: null }, { l: 'S', v: null }, 
                      { l: 'M', v: '4', active: true }, { l: 'T', v: '1', active: true }
                    ].map((d, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                        <div className={`w-full aspect-square rounded-md flex items-center justify-center text-xs font-bold ${d.active ? 'bg-[#9333EA] text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]' : 'border border-white/10 bg-transparent text-transparent'}`}>
                          {d.v}
                        </div>
                        <span className="text-white/40 text-[9px] font-medium">{d.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 rounded-[40px] pointer-events-none transform -skew-x-12 scale-105 opacity-50" />
          </motion.div>

          {/* Center Mockup (Swap Interaction) */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-20 perspective-1000 md:-mt-8"
          >
            <div className="glass-card rounded-[40px] p-2 border-[6px] border-surface-deep shadow-[0_20px_50px_rgba(124,58,237,0.3)] relative overflow-hidden bg-bg/90 backdrop-blur-xl h-[640px] w-full max-w-[300px] mx-auto group">
              {/* Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                <div className="w-[100px] h-[24px] bg-black rounded-b-3xl" />
              </div>
              
              <div className="bg-[#0B0914] w-full h-full rounded-[30px] p-6 pt-12 flex flex-col items-center relative overflow-hidden">
                {/* Subtle ambient light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                
                <header className="w-full flex justify-between items-center z-10 mb-10 pt-4">
                  <span className="text-white font-bold mx-auto text-lg tracking-wide">Habit Swap</span>
                </header>

                <div className="text-center z-10 mb-8 mt-4">
                  <p className="text-primary-pale text-sm mb-1">feeling the urge?</p>
                  <p className="text-[#A855F7] text-2xl font-bold tracking-tight"><span className="text-4xl">5.6%</span> <span className="text-sm font-normal text-primary-pale">brain rewired</span></p>
                </div>

                <div className="relative w-56 h-56 flex items-center justify-center cursor-pointer transform transition-transform group-hover:scale-105 z-10 mb-12">
                  {/* Outer Progress Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[1.03]">
                    <circle cx="112" cy="112" r="106" stroke="rgba(255,255,255,0.03)" strokeWidth="6" fill="none" />
                    <circle cx="112" cy="112" r="106" stroke="#9333EA" strokeWidth="6" strokeDasharray="666" strokeDashoffset="630" strokeLinecap="round" fill="none" />
                  </svg>
                  
                  {/* Inner Big Button */}
                  <div className="w-full h-full rounded-full bg-[#7C3AED] flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.4)]">
                    <span className="text-white font-extrabold tracking-widest text-2xl drop-shadow-md">SWAP IT</span>
                  </div>
                </div>

                <div className="text-center z-10 mt-auto pb-6">
                  <p className="text-white font-medium mb-3 text-lg">1 swaps today</p>
                  <p className="text-[#A855F7] text-sm flex items-center justify-center gap-1 hover:underline cursor-pointer transition-colors hover:text-white">
                    view dashboard <ChevronRight className="w-3.5 h-3.5" />
                  </p>
                </div>
              </div>
            </div>
            {/* Center phone glow block */}
            <div className="absolute -inset-10 bg-primary/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Right Mockup (Neuro Insights) */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateY: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative perspective-1000 md:mt-12"
          >
            <div className="glass-card rounded-[40px] p-2 border-[6px] border-surface-deep shadow-2xl relative overflow-hidden bg-bg/80 backdrop-blur-xl h-[600px] w-full max-w-[280px] mx-auto group">
              {/* Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                <div className="w-[100px] h-[24px] bg-black rounded-b-3xl" />
              </div>

              <div className="bg-[#0B0914] w-full h-full rounded-[30px] p-6 pt-14 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
                
                <h3 className="text-white font-bold text-sm absolute top-14 z-10">Swap Task</h3>

                <div className="flex-1 flex flex-col items-center justify-center w-full z-10 mt-10">
                  <div className="text-7xl mb-4 transform transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] filter brightness-110">
                    🧠
                  </div>
                  
                  <h2 className="text-white text-5xl font-extrabold mb-8 tracking-tight">Amazing!</h2>

                  <div className="bg-[#10B981] w-full rounded-[24px] p-6 shadow-[0_0_40px_rgba(16,185,129,0.35)] mb-8 transform transition-transform group-hover:-translate-y-1">
                    <p className="text-emerald-950 font-extrabold text-[11px] tracking-widest uppercase mb-1 opacity-70">Rewire Points</p>
                    <p className="text-white text-6xl font-black">+14</p>
                  </div>

                  <p className="text-[#A855F7] text-sm font-medium mb-12 flex items-center justify-center gap-1.5">
                    Your brain is rewiring <span className="text-lg">🔥</span>
                  </p>

                  <div className="w-full space-y-3 mt-auto pb-4">
                    <button className="w-full bg-[#10B981] text-white font-bold py-4 rounded-2xl text-[15px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:bg-[#059669] transition-colors">
                      View Brain Rewire <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="w-full bg-[#7C3AED] text-white font-bold py-4 rounded-2xl text-[15px] hover:bg-[#6D28D9] transition-colors">
                      Return Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 rounded-[40px] pointer-events-none transform -skew-x-12 scale-105 opacity-50" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default PremiumPreview;

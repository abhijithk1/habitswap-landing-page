import React from 'react';
import { motion } from 'motion/react';

const CtaSection = () => {
  return (
    <section id="download" className="w-full py-40 px-4 relative flex justify-center text-center overflow-hidden bg-[#000000]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#050505] to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl relative z-10 space-y-8 pb-10">
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 font-semibold tracking-widest uppercase text-sm"
        >
          Start today — it's free
        </motion.p>
        <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white font-black text-[clamp(3.5rem,8vw,6rem)] tracking-tighter leading-[0.95]"
        >
          Your brain is ready <br />to be rewired.
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-2xl pb-10 font-light"
        >
          Join thousands who've already made the swap.
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* App Store Button - Apple Style */}
          <button className="bg-white text-black border border-white rounded-[24px] py-4 px-10 w-full sm:w-auto hover:scale-105 transition-transform flex items-center justify-center gap-4 group">
             <svg viewBox="0 0 384 512" className="h-8 w-8 fill-black"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
             <div className="flex flex-col items-start leading-none gap-1">
                 <span className="text-[11px] text-gray-600 uppercase font-bold tracking-wider">Download on the</span>
                 <span className="text-black font-black text-2xl leading-none">App Store</span>
             </div>
          </button>
          
          {/* Google Play Button - Apple Style */}
          <button className="bg-[#111111] text-white border border-[#333] rounded-[24px] py-4 px-10 w-full sm:w-auto hover:bg-[#1A1A1A] hover:border-gray-500 hover:scale-105 transition-all flex items-center justify-center gap-4 group shadow-2xl">
             <svg viewBox="0 0 512 512" className="h-8 w-8 fill-white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
             <div className="flex flex-col items-start leading-none gap-1">
                 <span className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Get it on</span>
                 <span className="text-white font-black text-2xl leading-none">Google Play</span>
             </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

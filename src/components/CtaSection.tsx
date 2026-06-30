import React from 'react';
import { motion } from 'motion/react';

const CtaSection = () => {
  return (
    <section id="download" className="relative py-40 bg-black overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Deep violet bloom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 65%, rgba(88,28,135,0.40) 0%, transparent 70%)',
      }} />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Ambient floating orb — mirrors hero */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '20%', left: '10%', width: 280, height: 280 }}
        animate={{ y: [0, -18, 0], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-purple-600 blur-[100px]" />
      </motion.div>
      <motion.div
        className="absolute pointer-events-none"
        style={{ bottom: '15%', right: '8%', width: 220, height: 220 }}
        animate={{ y: [0, 16, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <div className="w-full h-full rounded-full bg-violet-700 blur-[90px]" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400/55 text-[11px] font-bold tracking-[0.3em] uppercase mb-6"
        >
          Now Available
        </motion.p>

        {/* ── Main headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[0.90] tracking-tighter mb-6"
          style={{ fontSize: 'clamp(3rem, 7.5vw, 7rem)', fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          <span className="text-white">Your next urge</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 35%, #c4b5fd 65%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            is the last one.
          </span>
        </motion.h2>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-purple-200/38 text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Habit Swap is now live on the Google Play store. Get the app today and start rewiring your brain.
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex justify-center mb-14 relative"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.abhijithk.habitswap"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white text-black py-4 px-10 rounded-[26px] text-lg tracking-wide transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(255,255,255,0.12)] block"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
            <span className="relative z-10">Get it on Google Play</span>
          </a>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.38 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          {['Free to download', 'No spam ever', 'Google Play Store'].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-purple-500/50" />
              <span className="text-purple-300/35 text-[13px] font-medium">{t}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CtaSection;
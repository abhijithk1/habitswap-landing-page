import React from 'react';
import { motion } from 'motion/react';

const CtaSection = () => (
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
        Start today — it's free
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

      {/* ── Urgency stat ── */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-purple-200/38 text-lg font-light leading-relaxed mb-12 max-w-md mx-auto"
      >
        Join <span className="text-purple-300/70 font-medium">2,000+ people</span> already rewiring.
        No subscription. No ads. Just science.
      </motion.p>

      {/* ── Store buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
      >
        {/* App Store */}
        <a
          href="#"
          className="group relative overflow-hidden flex items-center gap-3.5 bg-white text-black py-4 px-7 rounded-2xl hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.08)]"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/8 to-transparent skew-x-12" />
          <svg className="w-6 h-6 flex-shrink-0 relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left relative z-10">
            <div className="text-[10px] font-semibold opacity-55 leading-none mb-0.5">Download on the</div>
            <div className="text-[15px] leading-none" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>App Store</div>
          </div>
        </a>

        {/* Google Play */}
        <a
          href="#"
          className="group flex items-center gap-3.5 bg-white/[0.055] border border-white/[0.09] text-white py-4 px-7 rounded-2xl hover:scale-[1.03] hover:bg-white/[0.08] transition-all duration-300"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76c.37.2.8.22 1.21.04l12.71-7.34-2.83-2.83-11.09 10.13zm-1.04-20.3A2.02 2.02 0 002 4.95v14.1c0 .56.2 1.07.52 1.47L14.38 8.56 2.14 3.46zM20.3 9.6l-2.8-1.62-3.14 3.14 3.14 3.14 2.83-1.63c.8-.46.8-1.57-.03-2.03zM4.39.2C3.98.02 3.55.04 3.18.24L14.38 11.44 17.21 8.6 4.39.2z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] font-semibold opacity-45 leading-none mb-0.5">Get it on</div>
            <div className="text-[15px] leading-none" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>Google Play</div>
          </div>
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
        {['Free forever', 'No ads ever', 'No account needed', 'iOS & Android'].map((t, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-purple-500/50" />
            <span className="text-purple-300/35 text-[13px] font-medium">{t}</span>
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default CtaSection;
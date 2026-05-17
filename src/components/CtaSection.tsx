import React from 'react';
import { motion } from 'motion/react';

const CtaSection = () => (
  <section id="download" className="relative py-36 bg-black overflow-hidden">

    {/* Horizontal rule top */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

    {/* Deep violet bloom — signature colour */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(88,28,135,0.35) 0%, transparent 70%)' }} />

    {/* Grid texture */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-purple-400/60 text-[11px] font-bold tracking-[0.3em] uppercase mb-6"
      >
        Get started today
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-white font-black tracking-tighter leading-[0.92] mb-7"
        style={{ fontSize: 'clamp(3rem,7vw,6.5rem)' }}
      >
        Your next urge<br />
        <span style={{
          background: 'linear-gradient(135deg, #e9d5ff 0%, #ffffff 40%, #a78bfa 80%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          is the last one.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-purple-200/40 text-xl font-light leading-relaxed mb-14 max-w-xl mx-auto"
      >
        Download free. No subscription. No ads. Just the science that actually works.
      </motion.p>

      {/* Store buttons */}
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
          className="group flex items-center gap-3.5 bg-white text-black font-extrabold py-4 px-7 rounded-2xl hover:scale-[1.03] transition-transform duration-300 overflow-hidden relative"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12" />
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] font-semibold opacity-60 leading-none mb-0.5">Download on the</div>
            <div className="text-base font-extrabold leading-none">App Store</div>
          </div>
        </a>

        {/* Google Play */}
        <a
          href="#"
          className="group flex items-center gap-3.5 bg-white/[0.06] border border-white/10 text-white font-extrabold py-4 px-7 rounded-2xl hover:scale-[1.03] hover:bg-white/[0.09] transition-all duration-300"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76c.37.2.8.22 1.21.04l12.71-7.34-2.83-2.83-11.09 10.13zm-1.04-20.3A2.02 2.02 0 002 4.95v14.1c0 .56.2 1.07.52 1.47L14.38 8.56 2.14 3.46zM20.3 9.6l-2.8-1.62-3.14 3.14 3.14 3.14 2.83-1.63c.8-.46.8-1.57-.03-2.03zM4.39.2C3.98.02 3.55.04 3.18.24L14.38 11.44 17.21 8.6 4.39.2z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] font-semibold opacity-50 leading-none mb-0.5">Get it on</div>
            <div className="text-base font-extrabold leading-none">Google Play</div>
          </div>
        </a>
      </motion.div>

      {/* Trust line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex items-center justify-center gap-6 flex-wrap"
      >
        {['Free forever', 'No ads ever', 'No account needed', 'iOS & Android'].map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-purple-500/60" />
            <span className="text-purple-300/40 text-sm font-medium">{t}</span>
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default CtaSection;
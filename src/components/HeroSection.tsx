import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

// Animated grain overlay via canvas — gives the hero a film-like texture
const GrainOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    const draw = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.random() * 255;
        imageData.data[i]     = v;
        imageData.data[i + 1] = v;
        imageData.data[i + 2] = v;
        imageData.data[i + 3] = 18; // very subtle
      }
      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-40" />;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-28 overflow-hidden bg-black text-white">

      {/* ── Layered background ── */}
      {/* Deep violet mesh — the signature colour of the app */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(88,28,135,0.45) 0%, transparent 70%)',
        }} />
        {/* secondary bloom bottom-right */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px]"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
        {/* noise grain */}
        <GrainOverlay />
      </div>

      {/* ── Decorative rule lines — editorial feel ── */}
      <div className="absolute left-0 right-0 top-[38%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none z-0" />
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none z-0 hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-20 flex flex-col items-center text-center">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 border border-purple-500/20 bg-purple-950/30 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-purple-200/80 text-xs font-semibold tracking-[0.18em] uppercase">
            Now Available on iOS & Android
          </span>
        </motion.div>

        {/* Headline — large, tight, dramatic */}
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-[0.92] tracking-tighter mb-7 max-w-5xl"
          style={{ fontSize: 'clamp(3.8rem,10.5vw,9rem)' }}
        >
          <span className="text-white">Master your</span>
          <br />
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #e9d5ff 0%, #ffffff 40%, #a78bfa 70%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            urges.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 1, ease: 'easeOut' }}
          className="text-purple-200/50 text-xl sm:text-2xl leading-relaxed mb-14 max-w-2xl font-light tracking-wide"
        >
          Habit Swap intercepts your urges with neuroscience-backed
          alternatives. Break the cycle — one swap at a time.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          {/* Primary */}
          <button
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-white text-black font-extrabold py-4 px-9 rounded-[26px] text-lg tracking-wide transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            <span className="relative z-10">Start Rewiring — Free</span>
          </button>

          {/* Ghost */}
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-purple-300/60 font-medium text-base hover:text-purple-200/90 transition-colors duration-200 tracking-wide"
          >
            See how it works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        {/* Social proof card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-5 px-7 py-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
        >
          {/* Avatars */}
          <div className="flex">
            {[1, 5, 3, 8].map((n, i) => (
              <img
                key={n}
                src={`https://i.pravatar.cc/80?img=${n}`}
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
                style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: 4 - i }}
                alt=""
              />
            ))}
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-white font-bold text-sm ml-1">4.9</span>
            </div>
            <span className="text-purple-300/40 text-xs font-medium tracking-wide">
              Loved by 2,000+ early users
            </span>
          </div>
        </motion.div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
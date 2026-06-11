import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

// ── Film grain canvas — adds tactile depth to the hero background
const GrainOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const img = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = Math.random() * 255;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 14;
      }
      ctx.putImageData(img, 0, 0);
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-50" />;
};

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-28 overflow-hidden bg-black text-white">

    {/* ── Background layers ── */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Primary violet bloom from top */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 100% 65% at 50% -5%, rgba(88,28,135,0.55) 0%, transparent 68%)',
      }} />
      {/* Secondary cooler bloom bottom-right */}
      <div className="absolute bottom-0 right-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px]" style={{
        background: 'radial-gradient(circle, rgba(67,20,180,0.10) 0%, transparent 70%)',
      }} />
      {/* Grain */}
      <GrainOverlay />
    </div>

    {/* ── Ambient floating orbs — living motion in hero ── */}
    <motion.div
      className="absolute pointer-events-none z-0"
      style={{ top: '18%', left: '12%', width: 320, height: 320 }}
      animate={{ y: [0, -24, 0], opacity: [0.06, 0.10, 0.06] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="w-full h-full rounded-full bg-purple-600 blur-[120px]" />
    </motion.div>
    <motion.div
      className="absolute pointer-events-none z-0"
      style={{ bottom: '20%', right: '8%', width: 260, height: 260 }}
      animate={{ y: [0, 20, 0], opacity: [0.05, 0.09, 0.05] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    >
      <div className="w-full h-full rounded-full bg-violet-700 blur-[100px]" />
    </motion.div>

    {/* ── Editorial vertical rules ── */}
    <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none z-0 hidden xl:block" />
    <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none z-0 hidden xl:block" />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-20 flex flex-col items-center text-center">

      {/* ── Status pill ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border border-purple-500/20 bg-purple-950/25 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-purple-200/80 text-[11px] font-semibold tracking-[0.2em] uppercase">
          Private Beta Now Open
        </span>
      </motion.div>

      {/* ── Headline — Syne, emotionally resonant ── */}
      <motion.h1
        initial={{ opacity: 0, y: 32, filter: 'blur(14px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.1, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="leading-[0.90] tracking-tighter mb-6 max-w-5xl"
        style={{ fontSize: 'clamp(3.6rem, 10vw, 9rem)', fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
      >
        {/* Line 1 — plain white, the problem */}
        <span className="text-white block">Your brain is</span>
        {/* Line 2 — gradient, the hook */}
        <span
          className="block"
          style={{
            background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 30%, #c4b5fd 60%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          stuck in a loop.
        </span>
      </motion.h1>

      {/* ── Sub-headline ── */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 1, ease: 'easeOut' }}
        className="text-purple-200/45 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12 max-w-xl font-light"
      >
        Habit Swap intercepts the urge the moment it hits —
        and rewires your brain with one tap.
      </motion.p>

      {/* ── CTA buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
      >
        {/* Primary */}
        <button
          onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative overflow-hidden bg-white text-black py-4 px-9 rounded-[26px] text-lg tracking-wide transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(255,255,255,0.12)]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
          <span className="relative z-10">Join the Waitlist</span>
        </button>

        {/* Ghost */}
        <button
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-purple-300/55 font-medium text-base hover:text-purple-200/80 transition-colors duration-200"
        >
          See how it works
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </motion.div>

      {/* ── Social proof ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.9 }}
        className="flex flex-col sm:flex-row items-center gap-5 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] backdrop-blur-sm"
      >
        <div className="flex">
          {[1, 5, 3, 8].map((n, i) => (
            <img
              key={n}
              src={`https://i.pravatar.cc/80?img=${n}`}
              className="w-9 h-9 rounded-full border-2 border-black object-cover"
              style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 4 - i }}
              alt=""
            />
          ))}
        </div>
        <div className="h-7 w-px bg-white/10 hidden sm:block" />
        <div className="flex flex-col items-center sm:items-start gap-0.5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white font-bold text-xs ml-1">4.9</span>
          </div>
          <span className="text-purple-300/35 text-[11px] font-medium tracking-wide">
            2,000+ urges swapped this week
          </span>
        </div>
      </motion.div>

    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
  </section>
);

export default HeroSection;
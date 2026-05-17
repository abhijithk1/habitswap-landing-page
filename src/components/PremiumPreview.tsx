import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { ChevronRight, Share2, Flame, ArrowLeft, Check, TrendingUp } from 'lucide-react';

// ─── Spring configs ────────────────────────────────────────────────────────────
const springCfg = { stiffness: 55, damping: 22, restDelta: 0.001 };
const btnSpring  = { stiffness: 260, damping: 22 };

// ─── Screen 1: SWAP IT ────────────────────────────────────────────────────────
// Designed for 310px desktop phone. On mobile (260px) the phone is scaled via
// CSS transform on the wrapper, so these pixel values stay correct.
const Screen1 = ({
  opacity,
  buttonScale,
}: {
  opacity: MotionValue<number>;
  buttonScale: MotionValue<number>;
}) => (
  <motion.div
    style={{ opacity }}
    className="absolute inset-0 bg-[#070410] flex flex-col items-center pt-14 px-5 pb-6"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

    {/* Status bar */}
    <div className="w-full flex justify-between items-center mb-6 relative z-10">
      <span className="text-white/80 font-semibold text-[11px] tracking-widest uppercase">Habit Swap</span>
      <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,1)]" />
    </div>

    {/* Neural % */}
    <div className="text-center relative z-10 mb-3">
      <p className="text-purple-300/50 text-[9px] font-bold tracking-[0.25em] uppercase mb-1">Neural Status</p>
      <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-pink-200 to-purple-400 text-[44px] font-black tracking-tighter leading-none">5.6%</p>
      <p className="text-purple-400/40 text-[9px] font-semibold tracking-wider mt-0.5">brain rewired</p>
    </div>

    {/* SWAP button — sized to fit 310px phone comfortably */}
    <div className="relative z-10 flex-1 flex items-center justify-center w-full">
      <motion.div style={{ scale: buttonScale }} className="relative w-[190px] h-[190px] flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 190 190">
          <circle cx="95" cy="95" r="88" stroke="rgba(255,255,255,0.04)" strokeWidth="2" fill="none" />
          <circle cx="95" cy="95" r="88" stroke="url(#s1ring)" strokeWidth="2"
            strokeDasharray="553" strokeDashoffset="110" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="s1ring" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="w-[164px] h-[164px] rounded-full bg-gradient-to-br from-[#100820] to-[#070410] border border-purple-500/25 flex items-center justify-center shadow-[inset_0_0_50px_rgba(139,92,246,0.18),0_0_50px_rgba(139,92,246,0.18)]">
          <span className="text-white font-black text-[18px] tracking-[0.18em] [text-shadow:0_0_24px_rgba(255,255,255,0.5)]">SWAP IT</span>
        </div>
      </motion.div>
    </div>

    {/* Bottom hint */}
    <div className="relative z-10 flex items-center gap-1.5 pb-1">
      <span className="text-purple-300/40 text-[10px] font-semibold tracking-[0.2em] uppercase">Intercept urge</span>
      <ChevronRight className="w-3 h-3 text-purple-400/40" />
    </div>
  </motion.div>
);

// ─── Screen 2: Task ────────────────────────────────────────────────────────────
const Screen2 = ({
  opacity,
  buttonScale,
}: {
  opacity: MotionValue<number>;
  buttonScale: MotionValue<number>;
}) => (
  <motion.div
    style={{ opacity }}
    className="absolute inset-0 bg-[#060310] flex flex-col items-center pt-12 px-5 pb-5"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />

    <div className="w-full text-center mb-4 relative z-10">
      <span className="text-white font-bold text-[14px] tracking-wide">Swap Task</span>
    </div>

    {/* Timer ring */}
    <div className="relative w-[130px] h-[130px] flex items-center justify-center mb-4 relative z-10">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r="58" stroke="rgba(139,92,246,0.12)" strokeWidth="5" fill="none" />
        <circle cx="65" cy="65" r="58" stroke="#9333EA" strokeWidth="5"
          strokeDasharray="364" strokeDashoffset="70" strokeLinecap="round" fill="none"
          style={{ filter: 'drop-shadow(0 0 8px rgba(147,51,234,0.7))' }} />
      </svg>
      <span className="text-purple-300 font-extrabold text-[30px] tracking-tighter">1:28</span>
    </div>

    {/* Task card */}
    <div className="w-full bg-gradient-to-b from-[#160c2e] to-[#0d0720] border border-purple-500/20 rounded-2xl p-4 text-center mb-auto shadow-[0_16px_40px_rgba(0,0,0,0.6)] relative z-10">
      <div className="w-8 h-8 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mx-auto mb-2">
        <span className="text-base">🧘</span>
      </div>
      <h4 className="text-white font-extrabold text-[15px] mb-1.5 leading-tight tracking-tight">Body Scan Meditation</h4>
      <p className="text-purple-200/55 text-[11px] leading-relaxed font-medium">
        Close your eyes. Slowly scan from head to toe, noticing each sensation.
      </p>
    </div>

    {/* Buttons */}
    <div className="w-full flex flex-col gap-2 pt-3.5 relative z-10">
      <motion.div
        style={{ scale: buttonScale }}
        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-xl py-3 flex items-center justify-center gap-1.5 text-emerald-950 font-black text-[13px] tracking-wide shadow-[0_6px_20px_rgba(52,211,153,0.35)]"
      >
        <Check className="w-3.5 h-3.5" strokeWidth={3} /> I did it
      </motion.div>
      <div className="w-full border border-purple-700/25 rounded-xl py-2.5 flex items-center justify-center text-purple-300/60 font-semibold text-[12px] tracking-wide">
        Try a different swap
      </div>
      <div className="w-full py-1.5 flex items-center justify-center text-gray-600 font-medium text-[11px]">Skip</div>
    </div>
  </motion.div>
);

// ─── Screen 3: Dashboard ───────────────────────────────────────────────────────
const Screen3 = ({ opacity }: { opacity: MotionValue<number> }) => {
  const urges = [
    { label: 'Doomscrolling', pct: 78, color: '#A855F7' },
    { label: 'Snacking',      pct: 54, color: '#7C3AED' },
    { label: 'Procrastinating', pct: 41, color: '#6D28D9' },
  ];
  const days = [
    { d: 'T', v: null }, { d: 'F', v: null }, { d: 'S', v: null }, { d: 'S', v: null },
    { d: 'M', v: 4 }, { d: 'T', v: 2 }, { d: 'W', v: 4 },
  ];

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 bg-[#060310] flex flex-col pt-9 px-4 pb-3 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Row 1: back + share */}
      <div className="flex justify-between items-center mb-2.5 relative z-10">
        <div className="flex items-center gap-1.5 bg-[#160D2A] border border-purple-900/30 rounded-full px-2.5 py-1">
          <ArrowLeft className="w-3 h-3 text-purple-400" />
          <span className="text-purple-200/80 font-semibold text-[10px] tracking-wide">Habit Swap</span>
        </div>
        <div className="bg-[#22C55E] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-[0_0_12px_rgba(34,197,94,0.3)]">
          <span className="text-emerald-950 font-extrabold text-[9px] tracking-wider uppercase">Share</span>
          <Share2 className="w-3 h-3 text-emerald-950" strokeWidth={2.5} />
        </div>
      </div>

      {/* Row 2: title */}
      <div className="mb-3 relative z-10">
        <h2 className="text-white font-extrabold text-[18px] leading-[1.05] tracking-tight">
          Brain Rewire<br />Dashboard
        </h2>
      </div>

      {/* Row 3: progress ring — properly sized so text fits inside circle */}
      {/*
        Ring math (310px phone scale):
        Container 160×160 → SVG cx/cy=80 r=68 strokeWidth=9
        Inner clear diameter = (68−4.5)×2 = 127px
        Text: ~28px number + 4px gap + ~22px label = ~54px → fits with 36px margin each side ✓
      */}
      <div className="relative w-[140px] h-[140px] mx-auto flex flex-col items-center justify-center gap-1 mb-3 relative z-10">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="60" stroke="#1A0F30" strokeWidth="8" fill="none" />
          <circle cx="70" cy="70" r="60" stroke="url(#dashGrad)" strokeWidth="8"
            strokeDasharray="377" strokeDashoffset="353" strokeLinecap="round" fill="none"
            style={{ filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.6))' }} />
          <defs>
            <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
        {/* gap-1 on parent centers these precisely — no margin offsets needed */}
        <span className="text-purple-400 font-black text-[26px] tracking-tighter leading-none">6.6%</span>
        <span className="text-purple-200/55 text-[8px] text-center leading-[1.3] max-w-[64px] font-medium tracking-wide">
          neural pathways<br />rewired
        </span>
      </div>

      {/* Row 4: streak — full width */}
      <div className="w-full bg-[#1A0F30] border border-purple-500/20 rounded-xl p-3 flex items-center justify-center mb-2.5 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 blur-xl opacity-50 pointer-events-none" />
        <div className="flex items-center gap-2.5 z-10">
          <Flame className="w-6 h-6 text-orange-500 fill-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
          <span className="text-white text-[28px] font-black tracking-tight leading-none">3</span>
          <span className="text-purple-300 font-semibold text-[12px] tracking-wide">day streak</span>
        </div>
      </div>

      {/* Row 5: This Week */}
      <div className="w-full mb-2.5 relative z-10">
        <h4 className="text-white font-bold text-[11px] mb-1.5 tracking-wide">This Week</h4>
        <div className="flex justify-between gap-1 w-full">
          {days.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold
                ${item.v !== null
                  ? 'bg-[#A855F7] text-white shadow-[0_3px_10px_rgba(168,85,247,0.35)]'
                  : 'bg-[#1A0F30] border border-purple-900/40 text-transparent'
                }`}>
                {item.v}
              </div>
              <span className="text-purple-200/45 text-[9px] font-black">{item.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 6: Danger Window */}
      <div className="w-full mb-2 relative z-10">
        <h4 className="text-white font-bold text-[11px] mb-1.5 tracking-wide">Danger Window</h4>
        <div className="w-full h-8 bg-[#1A0F30] border border-orange-500/20 rounded-xl flex items-center justify-center gap-1.5">
          <Flame className="w-3 h-3 text-orange-500/50" />
          <span className="text-orange-300/50 text-[10px] font-semibold tracking-wide">8pm – 11pm</span>
        </div>
      </div>

      {/* Row 7: Top Urges */}
      <div className="w-full relative z-10">
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="text-white font-bold text-[11px] tracking-wide">Top Urges</h4>
          <TrendingUp className="w-3 h-3 text-purple-400/50" />
        </div>
        <div className="flex flex-col gap-1.5">
          {urges.map((u, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-purple-200/70 text-[10px] font-semibold">{u.label}</span>
                <span className="text-purple-300/50 text-[9px] font-bold">{u.pct}%</span>
              </div>
              <div className="w-full h-[4px] bg-[#1A0F30] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{
                  width: `${u.pct}%`,
                  background: `linear-gradient(90deg, ${u.color}, ${u.color}cc)`,
                  boxShadow: `0 0 5px ${u.color}60`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Phone frame component — shared between mobile and desktop layouts ─────────
const PhoneFrame = ({
  children,
  width,
  height,
  radius,
  islandW,
  islandH,
}: {
  children: React.ReactNode;
  width: number;
  height: number;
  radius: number;
  islandW: number;
  islandH: number;
}) => (
  <div
    className="relative flex-shrink-0"
    style={{ width, height }}
  >
    <div
      className="absolute inset-0 bg-gradient-to-b from-[#252528] to-[#0d0d0f] border border-[#303035] p-[5px] shadow-[0_40px_80px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.07)]"
      style={{ borderRadius: radius }}
    >
      {/* Dynamic island */}
      <div className="absolute top-[10px] inset-x-0 flex justify-center z-50 pointer-events-none">
        <div className="bg-black rounded-full" style={{ width: islandW, height: islandH }} />
      </div>
      {/* Screen */}
      <div
        className="bg-[#070410] w-full h-full relative overflow-hidden border border-black/50 isolate"
        style={{ borderRadius: radius - 6 }}
      >
        {children}
      </div>
    </div>
    {/* Under-glow */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-purple-700/15 blur-2xl rounded-full pointer-events-none" />
  </div>
);

// ─── MOBILE LAYOUT ────────────────────────────────────────────────────────────
// Entirely separate from desktop. Vertical stack:
//   title (fades out) → phone (centered, stays put) → step caption (fades)
// No side-to-side movement — instead the phone entrance scales up, and the
// section is shorter (300vh) since there's no travel distance.
const MobileLayout = ({
  scrollYProgress,
}: {
  scrollYProgress: any;
}) => {
  // ── Mobile scroll timeline (300vh) ──
  // 0.00–0.08  Title visible, phone scales in
  // 0.08–0.14  Title fades
  // 0.14–0.32  IDLE: SWAP IT. Step 1 caption below.
  // 0.28–0.34  SWAP button press
  // 0.32–0.42  Screen 1→2 crossfade
  // 0.42–0.62  IDLE: Task. Step 2 caption below.
  // 0.56–0.64  "I did it" press + Screen 2→3 crossfade
  // 0.64–1.00  IDLE: Dashboard. Step 3 caption below.

  const titleOp  = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const titleY   = useTransform(scrollYProgress, [0.08, 0.15], ['0px', '-20px']);

  const rawScale = useTransform(scrollYProgress, [0, 0.08], [0.9, 1]);
  const phoneScale = useSpring(rawScale, springCfg);

  // Screens
  const s1Op = useTransform(scrollYProgress, [0, 0.32, 0.42], [1, 1, 0]);
  const s2Op = useTransform(scrollYProgress, [0.35, 0.44, 0.56, 0.64], [0, 1, 1, 0]);
  const s3Op = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  const rawSwap = useTransform(scrollYProgress, [0.28, 0.30, 0.32, 0.34], [1, 0.82, 0.82, 1]);
  const swapBtn = useSpring(rawSwap, btnSpring);
  const rawDone = useTransform(scrollYProgress, [0.56, 0.58, 0.60, 0.62], [1, 0.82, 0.82, 1]);
  const doneBtn = useSpring(rawDone, btnSpring);

  // Step captions — 3 separate captions, shown one at a time
  const cap1Op = useTransform(scrollYProgress, [0.08, 0.18, 0.32, 0.40], [0, 1, 1, 0]);
  const cap2Op = useTransform(scrollYProgress, [0.38, 0.46, 0.56, 0.64], [0, 1, 1, 0]);
  const cap3Op = useTransform(scrollYProgress, [0.62, 0.70, 1], [0, 1, 1]);

  // Step dots
  const d1 = useTransform(scrollYProgress, [0, 0.12, 0.40], [0.3, 1, 0]);
  const d2 = useTransform(scrollYProgress, [0.35, 0.44, 0.62, 0.68], [0, 1, 1, 0]);
  const d3 = useTransform(scrollYProgress, [0.60, 0.70, 1], [0, 1, 1]);

  return (
    <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>

      {/* ── Title — above phone, fades as scroll starts ── */}
      <motion.div
        style={{ opacity: titleOp, y: titleY }}
        className="absolute top-0 left-0 right-0 flex flex-col items-center pt-[calc(env(safe-area-inset-top)+56px)] z-40 pointer-events-none"
      >
        <p className="text-purple-400/50 text-[9px] font-bold tracking-[0.3em] uppercase mb-1.5">
          The anatomy of a swap
        </p>
        <h2 className="text-white font-black text-[1.75rem] tracking-tight leading-none text-center mb-1">
          How it works.
        </h2>
        <p className="text-gray-600 text-[11px] font-light">Scroll to see each step.</p>
      </motion.div>

      {/* ── Phone — centered, scales in, stays put ── */}
      <motion.div style={{ scale: phoneScale }}>
        <PhoneFrame width={262} height={524} radius={44} islandW={82} islandH={22}>
          <div className="absolute inset-0" style={{ zIndex: 10 }}>
            <Screen1 opacity={s1Op} buttonScale={swapBtn} />
          </div>
          <div className="absolute inset-0" style={{ zIndex: 20 }}>
            <Screen2 opacity={s2Op} buttonScale={doneBtn} />
          </div>
          <div className="absolute inset-0" style={{ zIndex: 30 }}>
            <Screen3 opacity={s3Op} />
          </div>
        </PhoneFrame>
      </motion.div>

      {/* ── Step captions — fixed below phone ── */}
      <div className="absolute bottom-14 left-0 right-0 px-8 pointer-events-none z-30">
        <div className="relative h-[72px]">

          {/* Caption 1: SWAP IT */}
          <motion.div
            style={{ opacity: cap1Op }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-[1.5px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              <span className="text-purple-400/70 text-[9px] font-bold tracking-[0.25em] uppercase">Step 1</span>
              <div className="w-5 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <h3 className="text-white font-bold text-[15px] tracking-tight mb-0.5">Feel the urge. Tap SWAP IT.</h3>
            <p className="text-gray-600 text-[11px] font-light">One tap intercepts the urge pathway instantly.</p>
          </motion.div>

          {/* Caption 2: Task */}
          <motion.div
            style={{ opacity: cap2Op }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-[1.5px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              <span className="text-violet-400/70 text-[9px] font-bold tracking-[0.25em] uppercase">Step 2</span>
              <div className="w-5 h-[1.5px] bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
            </div>
            <h3 className="text-white font-bold text-[15px] tracking-tight mb-0.5">Do the swap task.</h3>
            <p className="text-gray-600 text-[11px] font-light">Science-backed tasks redirect your dopamine response.</p>
          </motion.div>

          {/* Caption 3: Dashboard */}
          <motion.div
            style={{ opacity: cap3Op }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-[1.5px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              <span className="text-emerald-400/70 text-[9px] font-bold tracking-[0.25em] uppercase">Step 3</span>
              <div className="w-5 h-[1.5px] bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
            </div>
            <h3 className="text-white font-bold text-[15px] tracking-tight mb-0.5">Watch your brain rewire.</h3>
            <p className="text-gray-600 text-[11px] font-light">Track progress, streaks, and danger windows live.</p>
          </motion.div>

        </div>
      </div>

      {/* ── Step dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 pointer-events-none">
        {[d1, d2, d3].map((op, i) => (
          <div key={i} className="relative w-1.5 h-1.5">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <motion.div style={{ opacity: op }} className="absolute inset-0 rounded-full bg-purple-400" />
          </div>
        ))}
      </div>

    </div>
  );
};

// ─── DESKTOP LAYOUT ────────────────────────────────────────────────────────────
// Full scroll-driven storytelling: phone slides left→right with crossfading
// screens and side text panels.
const DesktopLayout = ({
  scrollYProgress,
}: {
  scrollYProgress: any;
}) => {
  // ── Desktop scroll timeline ──
  // 0.00–0.07  Title + phone entrance
  // 0.07–0.12  Title fades
  // 0.12–0.28  IDLE: SWAP IT centered
  // 0.25–0.31  SWAP button press
  // 0.28–0.37  Screen 1→2 + phone slides left
  // 0.37–0.50  IDLE: Task left, right text visible
  // 0.46–0.52  "I did it" press + Screen 2→3 crossfade
  // 0.52–0.61  Phone slides right, left text appears
  // 0.61–1.00  IDLE: Dashboard right

  const titleOp  = useTransform(scrollYProgress, [0, 0.07, 0.13], [1, 1, 0]);
  const titleY   = useTransform(scrollYProgress, [0.07, 0.13], ['0px', '-28px']);

  const rawScale = useTransform(scrollYProgress, [0, 0.07], [0.86, 1]);
  const phoneScale = useSpring(rawScale, springCfg);
  const rawY = useTransform(scrollYProgress, [0, 0.07], ['5vh', '0vh']);
  const phoneY = useSpring(rawY, springCfg);

  const rawPhoneX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.37, 0.52, 0.61, 1],
    ['0vw', '0vw', '-21vw', '-21vw', '21vw', '21vw']
  );
  const phoneX = useSpring(rawPhoneX, springCfg);

  const s1Op = useTransform(scrollYProgress, [0, 0.28, 0.37], [1, 1, 0]);
  const s2Op = useTransform(scrollYProgress, [0.30, 0.38, 0.46, 0.52], [0, 1, 1, 0]);
  const s3Op = useTransform(scrollYProgress, [0.46, 0.53, 1], [0, 1, 1]);

  const rawSwap = useTransform(scrollYProgress, [0.25, 0.27, 0.29, 0.31], [1, 0.82, 0.82, 1]);
  const swapBtn = useSpring(rawSwap, btnSpring);
  const rawDone = useTransform(scrollYProgress, [0.43, 0.45, 0.47, 0.49], [1, 0.82, 0.82, 1]);
  const doneBtn = useSpring(rawDone, btnSpring);

  const rawT2Op = useTransform(scrollYProgress, [0.36, 0.45, 0.46, 0.52], [0, 1, 1, 0]);
  const t2Op = useSpring(rawT2Op, springCfg);
  const rawT2X = useTransform(scrollYProgress, [0.36, 0.45], ['32px', '0px']);
  const t2X = useSpring(rawT2X, springCfg);

  const rawT3Op = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);
  const t3Op = useSpring(rawT3Op, springCfg);
  const rawT3X = useTransform(scrollYProgress, [0.55, 0.65], ['-32px', '0px']);
  const t3X = useSpring(rawT3X, springCfg);

  const d1 = useTransform(scrollYProgress, [0, 0.10, 0.37], [0.3, 1, 0]);
  const d2 = useTransform(scrollYProgress, [0.30, 0.38, 0.50, 0.55], [0, 1, 1, 0]);
  const d3 = useTransform(scrollYProgress, [0.46, 0.55, 1], [0, 1, 1]);

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.09)_0%,transparent_65%)] blur-3xl" />
      </div>

      {/* Title */}
      <motion.div
        style={{ opacity: titleOp, y: titleY }}
        className="absolute top-0 left-0 right-0 flex flex-col items-center pt-16 xl:pt-20 z-40 pointer-events-none"
      >
        <p className="text-purple-400/55 text-[10px] font-bold tracking-[0.35em] uppercase mb-2">The anatomy of a swap</p>
        <h2 className="text-white font-black text-[clamp(2.4rem,4.8vw,4.2rem)] tracking-tight text-center leading-none mb-2">
          How it works.
        </h2>
        <p className="text-gray-600 font-light text-sm text-center">Scroll to watch the rewire happen.</p>
        <div className="mt-6 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-5 h-8 border border-white/10 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/20 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Right text: Intervention */}
      <motion.div style={{ opacity: t2Op, x: t2X }} className="absolute right-[5vw] xl:right-[7vw] top-1/2 -translate-y-1/2 max-w-[300px] pointer-events-none z-20">
        <div className="w-10 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mb-5 rounded-full" />
        <h3 className="text-white font-black text-[2rem] mb-4 tracking-tight leading-[1.05]">Instant<br />Intervention.</h3>
        <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-4">
          When the urge hits, we hit back. Curated tasks redirect your dopamine — without the guilt.
        </p>
        <div className="flex flex-col gap-2">
          {['Backed by neuroscience', 'Context-aware tasks', 'Zero friction design'].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
              <span className="text-gray-600 text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Left text: Dashboard */}
      <motion.div style={{ opacity: t3Op, x: t3X }} className="absolute left-[5vw] xl:left-[7vw] top-1/2 -translate-y-1/2 max-w-[300px] pointer-events-none z-20">
        <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500 mb-5 rounded-full" />
        <h3 className="text-white font-black text-[2rem] mb-4 tracking-tight leading-[1.05]">Watch your<br />brain rewire.</h3>
        <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-4">
          Every swap strengthens a new neural pathway. Danger windows, streaks, top urge patterns — all live.
        </p>
        <div className="flex flex-col gap-2">
          {['Live neural progress', 'Danger window prediction', 'Top urge pattern analysis'].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-gray-600 text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div style={{ x: phoneX, y: phoneY, scale: phoneScale }}>
        <PhoneFrame width={310} height={660} radius={52} islandW={96} islandH={25}>
          <div className="absolute inset-0" style={{ zIndex: 10 }}>
            <Screen1 opacity={s1Op} buttonScale={swapBtn} />
          </div>
          <div className="absolute inset-0" style={{ zIndex: 20 }}>
            <Screen2 opacity={s2Op} buttonScale={doneBtn} />
          </div>
          <div className="absolute inset-0" style={{ zIndex: 30 }}>
            <Screen3 opacity={s3Op} />
          </div>
        </PhoneFrame>
      </motion.div>

      {/* Step dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30 pointer-events-none">
        {[d1, d2, d3].map((op, i) => (
          <div key={i} className="relative w-1.5 h-1.5">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <motion.div style={{ opacity: op }} className="absolute inset-0 rounded-full bg-purple-400" />
          </div>
        ))}
      </div>

    </div>
  );
};

// ─── Root: picks layout, provides separate scroll timelines ───────────────────
const PremiumPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    // Mobile: 360vh (shorter — no side travel, 3 screens × ~1 scroll each)
    // Desktop: 480vh (longer — phone travels left+right + idle on each side)
    <section
      ref={containerRef}
      className="relative bg-black text-white"
      style={{ height: isMobile ? '360vh' : '480vh' }}
    >
      {isMobile
        ? <MobileLayout scrollYProgress={scrollYProgress} />
        : <DesktopLayout scrollYProgress={scrollYProgress} />
      }
    </section>
  );
};

export default PremiumPreview;
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { ChevronRight, Share2, Flame, ArrowLeft, Check, TrendingUp } from 'lucide-react';

// ─── Scroll Timeline (600vh) ──────────────────────────────────────────────────
//
//  0.00–0.07  Phone enters. Title + Screen 1.
//  0.07–0.12  Title fades.
//  0.12–0.28  IDLE: SWAP IT visible centered.
//  0.25–0.30  SWAP IT button press.
//  0.28–0.36  Screen 1 → 2. Phone slides left.
//  0.36–0.50  IDLE: Task visible left. Right text in.
//
//  KEY FIX: "I did it" press + Screen 3 fade-in START at 0.46,
//  so Screen 3 is FULLY opaque (1.0) at 0.52 — BEFORE phone slides right at 0.52.
//  Phone slides right 0.52→0.60. By the time it arrives, dashboard is 100% loaded.
//
//  0.46–0.52  "I did it" press + Screen 2 → Screen 3 crossfade.
//  0.52–0.60  Phone slides right. Right text out. Left text in.
//  0.60–1.00  IDLE: Dashboard right. 40% of scroll!

const springCfg = { stiffness: 55, damping: 22, restDelta: 0.001 };
const btnSpring  = { stiffness: 260, damping: 22 };

// ─── Screen 1 ─────────────────────────────────────────────────────────────────
const Screen1 = ({ opacity, buttonScale }: { opacity: MotionValue<number>; buttonScale: MotionValue<number> }) => (
  <motion.div style={{ opacity }} className="absolute inset-0 bg-[#070410] flex flex-col items-center pt-16 px-6 pb-8">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
    <div className="w-full flex justify-between items-center mb-8 relative z-10">
      <span className="text-white/80 font-semibold text-[12px] tracking-widest uppercase">Habit Swap</span>
      <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,1)]" />
    </div>
    <div className="text-center relative z-10 mb-4">
      <p className="text-purple-300/50 text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5">Neural Status</p>
      <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-pink-200 to-purple-400 text-[52px] font-black tracking-tighter leading-none">5.6%</p>
      <p className="text-purple-400/40 text-[10px] font-semibold tracking-wider mt-1">brain rewired</p>
    </div>
    <div className="relative z-10 flex-1 flex items-center justify-center w-full">
      <motion.div style={{ scale: buttonScale }} className="relative w-[210px] h-[210px] flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 210 210">
          <circle cx="105" cy="105" r="98" stroke="rgba(255,255,255,0.04)" strokeWidth="2.5" fill="none" />
          <circle cx="105" cy="105" r="98" stroke="url(#s1ring)" strokeWidth="2.5" strokeDasharray="616" strokeDashoffset="120" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="s1ring" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" /><stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#100820] to-[#070410] border border-purple-500/25 flex items-center justify-center shadow-[inset_0_0_50px_rgba(139,92,246,0.18),0_0_50px_rgba(139,92,246,0.18)]">
          <span className="text-white font-black text-[20px] tracking-[0.18em] [text-shadow:0_0_24px_rgba(255,255,255,0.5)]">SWAP IT</span>
        </div>
      </motion.div>
    </div>
    <div className="relative z-10 flex items-center gap-1.5 pb-2">
      <span className="text-purple-300/40 text-[11px] font-semibold tracking-[0.2em] uppercase">Intercept urge</span>
      <ChevronRight className="w-3 h-3 text-purple-400/40" />
    </div>
  </motion.div>
);

// ─── Screen 2 ─────────────────────────────────────────────────────────────────
const Screen2 = ({ opacity, buttonScale }: { opacity: MotionValue<number>; buttonScale: MotionValue<number> }) => (
  <motion.div style={{ opacity }} className="absolute inset-0 bg-[#060310] flex flex-col items-center pt-14 px-6 pb-6">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
    <div className="w-full text-center mb-5 relative z-10">
      <span className="text-white font-bold text-[15px] tracking-wide">Swap Task</span>
    </div>
    <div className="relative w-[148px] h-[148px] flex items-center justify-center mb-5 relative z-10">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 148 148">
        <circle cx="74" cy="74" r="66" stroke="rgba(139,92,246,0.12)" strokeWidth="5" fill="none" />
        <circle cx="74" cy="74" r="66" stroke="#9333EA" strokeWidth="5" strokeDasharray="415" strokeDashoffset="80" strokeLinecap="round" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(147,51,234,0.7))' }} />
      </svg>
      <span className="text-purple-300 font-extrabold text-[34px] tracking-tighter">1:28</span>
    </div>
    <div className="w-full bg-gradient-to-b from-[#160c2e] to-[#0d0720] border border-purple-500/20 rounded-3xl p-5 text-center mb-auto shadow-[0_16px_40px_rgba(0,0,0,0.6)] relative z-10">
      <div className="w-9 h-9 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mx-auto mb-3">
        <span className="text-lg">🧘</span>
      </div>
      <h4 className="text-white font-extrabold text-[17px] mb-2 leading-tight tracking-tight">Body Scan Meditation</h4>
      <p className="text-purple-200/55 text-[12px] leading-relaxed font-medium">Close your eyes. Slowly scan from head to toe, noticing each sensation without judgment.</p>
    </div>
    <div className="w-full flex flex-col gap-2.5 pt-4 relative z-10">
      <motion.div style={{ scale: buttonScale }} className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-2xl py-3.5 flex items-center justify-center gap-2 text-emerald-950 font-black text-[14px] tracking-wide shadow-[0_6px_24px_rgba(52,211,153,0.35)]">
        <Check className="w-4 h-4" strokeWidth={3} /> I did it
      </motion.div>
      <div className="w-full border border-purple-700/25 rounded-2xl py-3 flex items-center justify-center text-purple-300/60 font-semibold text-[13px] tracking-wide">Try a different swap</div>
      <div className="w-full py-2 flex items-center justify-center text-gray-600 font-medium text-[12px]">Skip</div>
    </div>
  </motion.div>
);

// ─── Screen 3: Dashboard — matches reference layout exactly ──────────────────
const Screen3 = ({ opacity }: { opacity: MotionValue<number> }) => {
  const urges = [
    { label: 'Doomscrolling', pct: 78, color: '#A855F7' },
    { label: 'Snacking',      pct: 54, color: '#7C3AED' },
    { label: 'Procrastinating', pct: 41, color: '#6D28D9' },
  ];
  const days = [
    {d:'T',v:null},{d:'F',v:null},{d:'S',v:null},{d:'S',v:null},
    {d:'M',v:4},{d:'T',v:2},{d:'W',v:4},
  ];

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 bg-[#060310] flex flex-col pt-10 px-4 pb-3 overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Row 1: back pill + share ── */}
      <div className="flex justify-between items-center mb-3 relative z-10">
        <div className="flex items-center gap-1.5 bg-[#160D2A] border border-purple-900/30 rounded-full px-3 py-1.5">
          <ArrowLeft className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-purple-200/80 font-semibold text-[11px] tracking-wide">Habit Swap</span>
        </div>
        <div className="bg-[#22C55E] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <span className="text-emerald-950 font-extrabold text-[11px] tracking-wider uppercase">Share</span>
          <Share2 className="w-[14px] h-[14px] text-emerald-950" strokeWidth={2.5} />
        </div>
      </div>

      {/* ── Row 2: title + share ── */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h2 className="text-white font-extrabold text-[22px] leading-[1.05] tracking-tight max-w-[160px]">
          Brain Rewire<br />Dashboard
        </h2>
      </div>

      {/* ── Row 3: centered progress ring ── */}
      {/*
        Ring math:
        Container: 160×160px
        SVG viewBox: 160×160, cx/cy=80, r=68, strokeWidth=9
        Inner clear radius = 68 - 4.5 = 63.5px → inner diameter ≈ 127px
        Text stack: ~28px number + 4px gap + ~22px label = ~54px total
        54px fits well inside 127px with ~36px breathing room each side ✓
      */}
      <div className="relative w-[160px] h-[160px] mx-auto flex flex-col items-center justify-center gap-1 mb-4 relative z-10">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="68" stroke="#1A0F30" strokeWidth="9" fill="none" />
          <circle cx="80" cy="80" r="68" stroke="url(#dashGrad)" strokeWidth="9"
            strokeDasharray="427" strokeDashoffset="400"
            strokeLinecap="round" fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(168,85,247,0.6))' }} />
          <defs>
            <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
        {/* No margin offsets — gap on parent handles spacing cleanly */}
        <span className="text-purple-400 font-black text-[28px] tracking-tighter leading-none">6.6%</span>
        <span className="text-purple-200/55 text-[9px] text-center leading-[1.3] max-w-[72px] font-medium tracking-wide">
          neural pathways<br />rewired
        </span>
      </div>

      {/* ── Row 4: streak card — full width ── */}
      <div className="w-full bg-[#1A0F30] border border-purple-500/20 rounded-2xl p-4 flex items-center justify-center mb-3 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 blur-xl opacity-50 pointer-events-none" />
        <div className="flex items-center gap-3 z-10">
          <Flame className="w-7 h-7 text-orange-500 fill-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          <span className="text-white text-[34px] font-black tracking-tight leading-none">3</span>
        </div>
        <span className="text-purple-300 font-semibold text-[13px] tracking-wide ml-3 z-10">day streak</span>
      </div>

      {/* ── Row 5: This Week grid — full width ── */}
      <div className="w-full mb-3 relative z-10">
        <h4 className="text-white font-bold text-[12px] mb-2 tracking-wide">This Week</h4>
        <div className="flex justify-between gap-1 w-full">
          {days.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[12px] font-bold
                ${item.v !== null
                  ? 'bg-[#A855F7] text-white shadow-[0_4px_15px_rgba(168,85,247,0.3)]'
                  : 'bg-[#1A0F30] border border-purple-900/40 text-transparent'
                }`}>
                {item.v}
              </div>
              <span className="text-purple-200/50 text-[10px] font-black">{item.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 6: Danger Window ── */}
      <div className="w-full mb-2.5 relative z-10">
        <h4 className="text-white font-bold text-[12px] mb-1.5 tracking-wide">Danger Window</h4>
        <div className="w-full h-9 bg-[#1A0F30] border border-orange-500/20 rounded-2xl flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 text-orange-500/50" />
          <span className="text-orange-300/50 text-[11px] font-semibold tracking-wide">8pm – 11pm</span>
        </div>
      </div>

      {/* ── Row 7: Top Urges ── */}
      <div className="w-full relative z-10">
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="text-white font-bold text-[12px] tracking-wide">Top Urges</h4>
          <TrendingUp className="w-3.5 h-3.5 text-purple-400/50" />
        </div>
        <div className="flex flex-col gap-2">
          {urges.map((u, i) => (
            <div key={i} className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-purple-200/70 text-[11px] font-semibold">{u.label}</span>
                <span className="text-purple-300/50 text-[10px] font-bold">{u.pct}%</span>
              </div>
              <div className="w-full h-[5px] bg-[#1A0F30] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{
                  width: `${u.pct}%`,
                  background: `linear-gradient(90deg, ${u.color}, ${u.color}cc)`,
                  boxShadow: `0 0 6px ${u.color}60`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const PremiumPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  // Title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.07, 0.12], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.07, 0.12], ['0px', '-28px']);

  // Phone entrance
  const rawScale = useTransform(scrollYProgress, [0, 0.07], [0.86, 1]);
  const phoneScale = useSpring(rawScale, springCfg);
  const rawY = useTransform(scrollYProgress, [0, 0.07], ['5vh', '0vh']);
  const phoneY = useSpring(rawY, springCfg);

  // Phone X
  // Center 0–0.28 → slides left 0.28–0.36 → stays left 0.36–0.52 → slides right 0.52–0.60
  const rawPhoneX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.36, 0.52, 0.60, 1],
    isMobile
      ? ['0vw','0vw','0vw','0vw','0vw','0vw']
      : ['0vw','0vw','-21vw','-21vw','21vw','21vw']
  );
  const phoneX = useSpring(rawPhoneX, springCfg);

  // Screen 1: visible 0–0.28, fades 0.28–0.36
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.28, 0.36], [1, 1, 0]);

  // SWAP IT press: 0.25–0.30
  const rawSwap = useTransform(scrollYProgress, [0.25, 0.27, 0.29, 0.31], [1, 0.82, 0.82, 1]);
  const swapBtnScale = useSpring(rawSwap, btnSpring);

  // Screen 2: in 0.30–0.37, stays to 0.46, fades 0.46–0.52
  const screen2Opacity = useTransform(scrollYProgress, [0.30, 0.37, 0.46, 0.52], [0, 1, 1, 0]);

  // "I did it" press: 0.43–0.48 — fires WHILE screen 2 is still fully visible
  const rawDone = useTransform(scrollYProgress, [0.43, 0.45, 0.47, 0.49], [1, 0.82, 0.82, 1]);
  const doneBtnScale = useSpring(rawDone, btnSpring);

  // ── KEY FIX ──
  // Screen 3 starts at 0.46 (same moment "I did it" press begins) and is
  // FULLY opaque at 0.52 — which is when the phone starts sliding right.
  // The dashboard is rendered and visible BEFORE the phone moves.
  const screen3Opacity = useTransform(scrollYProgress, [0.46, 0.52, 1], [0, 1, 1]);

  // Right text: in 0.36–0.45, out 0.46–0.52
  const rawT2Op = useTransform(scrollYProgress, [0.36, 0.44, 0.46, 0.52], [0, 1, 1, 0]);
  const text2Opacity = useSpring(rawT2Op, springCfg);
  const rawT2X = useTransform(scrollYProgress, [0.36, 0.44], ['32px', '0px']);
  const text2X = useSpring(rawT2X, springCfg);

  // Left text: in 0.55–0.65, stays
  const rawT3Op = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);
  const text3Opacity = useSpring(rawT3Op, springCfg);
  const rawT3X = useTransform(scrollYProgress, [0.55, 0.65], ['-32px', '0px']);
  const text3X = useSpring(rawT3X, springCfg);

  // Dots
  const dot1Op = useTransform(scrollYProgress, [0, 0.10, 0.36], [0.3, 1, 0]);
  const dot2Op = useTransform(scrollYProgress, [0.30, 0.38, 0.50, 0.55], [0, 1, 1, 0]);
  const dot3Op = useTransform(scrollYProgress, [0.46, 0.55, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="relative bg-black text-white" style={{ height: '480vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.09)_0%,transparent_65%)] blur-3xl" />
        </div>

        {/* Title */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute top-0 left-0 right-0 flex flex-col items-center pt-8 sm:pt-14 md:pt-20 z-40 pointer-events-none"
        >
          <p className="text-purple-400/55 text-[10px] font-bold tracking-[0.35em] uppercase mb-2 lg:mb-3">The anatomy of a swap</p>
          <h2 className="text-white font-black tracking-tight text-center leading-none mb-2 lg:mb-3" style={{ fontSize: 'clamp(1.7rem, 4.8vw, 4.2rem)' }}>
            How it works.
          </h2>
          <p className="text-gray-600 font-light text-xs lg:text-sm text-center max-w-xs hidden sm:block">Scroll to watch the rewire happen.</p>
          <div className="mt-4 lg:mt-7 hidden sm:flex flex-col items-center gap-1 animate-bounce">
            <div className="w-5 h-8 border border-white/10 rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Right text: Intervention */}
        <motion.div style={{ opacity: text2Opacity, x: text2X }} className="hidden lg:block absolute right-[5vw] xl:right-[7vw] top-1/2 -translate-y-1/2 max-w-[300px] pointer-events-none z-20">
          <div className="w-10 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mb-5 rounded-full" />
          <h3 className="text-white font-black text-[2.1rem] mb-4 tracking-tight leading-[1.05]">Instant<br />Intervention.</h3>
          <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-5">When the urge hits, we hit back. Scientifically curated tasks redirect your dopamine instantly — without the guilt.</p>
          <div className="flex flex-col gap-2.5">
            {['Backed by neuroscience', 'Context-aware tasks', 'Zero friction design'].map((t, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Left text: Dashboard */}
        <motion.div style={{ opacity: text3Opacity, x: text3X }} className="hidden lg:block absolute left-[5vw] xl:left-[7vw] top-1/2 -translate-y-1/2 max-w-[300px] pointer-events-none z-20">
          <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500 mb-5 rounded-full" />
          <h3 className="text-white font-black text-[2.1rem] mb-4 tracking-tight leading-[1.05]">Watch your<br />brain rewire.</h3>
          <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-5">Every swap strengthens a new neural pathway. Your dashboard predicts danger windows and exposes your top urge patterns.</p>
          <div className="flex flex-col gap-2.5">
            {['Live neural progress', 'Danger window prediction', 'Top urge pattern analysis'].map((t, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone — smaller on mobile so title + captions have breathing room */}
        <motion.div
          className="relative z-20 flex-shrink-0"
          style={{
            x: isMobile ? 0 : phoneX,
            y: phoneY,
            scale: phoneScale,
            width: isMobile ? 260 : 310,
            height: isMobile ? 520 : 660,
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#252528] to-[#0d0d0f] border border-[#303035] p-[5px] shadow-[0_50px_100px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.07)]"
            style={{ borderRadius: isMobile ? 44 : 52 }}
          >
            <div className="absolute top-[10px] inset-x-0 flex justify-center z-50 pointer-events-none">
              <div className="bg-black rounded-full" style={{ width: isMobile ? 82 : 96, height: isMobile ? 22 : 25 }} />
            </div>
            <div
              className="bg-[#070410] w-full h-full relative overflow-hidden border border-black/50 isolate"
              style={{ borderRadius: isMobile ? 38 : 46 }}
            >
              <div className="absolute inset-0" style={{ zIndex: 10 }}>
                <Screen1 opacity={screen1Opacity} buttonScale={swapBtnScale} />
              </div>
              <div className="absolute inset-0" style={{ zIndex: 20 }}>
                <Screen2 opacity={screen2Opacity} buttonScale={doneBtnScale} />
              </div>
              <div className="absolute inset-0" style={{ zIndex: 30 }}>
                <Screen3 opacity={screen3Opacity} />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-purple-700/15 blur-2xl rounded-full pointer-events-none" />
        </motion.div>

        {/* Mobile captions — appear BELOW the phone, no overlap.
            The phone on mobile is 520px, viewport ~700–900px, so bottom area has ~100–180px free. */}
        <div className="lg:hidden absolute bottom-10 left-0 right-0 px-6 pointer-events-none z-30">
          <div className="relative h-16">
            <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="w-6 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-2 rounded-full" />
              <h3 className="text-white font-bold text-base mb-0.5 tracking-tight">Instant Intervention.</h3>
              <p className="text-gray-600 text-xs font-light">Science-backed tasks redirect dopamine instantly.</p>
            </motion.div>
            <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="w-6 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-2 rounded-full" />
              <h3 className="text-white font-bold text-base mb-0.5 tracking-tight">Rewire your brain.</h3>
              <p className="text-gray-600 text-xs font-light">Track urge patterns and danger windows live.</p>
            </motion.div>
          </div>
        </div>

        {/* Step dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30 pointer-events-none">
          {[dot1Op, dot2Op, dot3Op].map((op, i) => (
            <div key={i} className="relative w-1.5 h-1.5">
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <motion.div style={{ opacity: op }} className="absolute inset-0 rounded-full bg-purple-400" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumPreview;
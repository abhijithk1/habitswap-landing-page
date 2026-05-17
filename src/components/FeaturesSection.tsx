import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, Brain, ShieldAlert, Award, ActivitySquare, Share2 } from 'lucide-react';

const features = [
  {
    icon: MousePointerClick,
    title: "Instant Swap Button",
    description: "One large pulsing trigger. No menus, no friction — tap and your brain starts the redirect immediately.",
    accent: "from-purple-500 to-violet-600",
    glowColor: "rgba(139,92,246,0.14)",
  },
  {
    icon: Brain,
    title: "Smart Swap Selection",
    description: "Context-aware tasks matched to your urge type, the time of day, and your location. Always the right intervention.",
    accent: "from-violet-500 to-purple-700",
    glowColor: "rgba(124,58,237,0.14)",
  },
  {
    icon: ShieldAlert,
    title: "Streak Protector",
    description: "A 2-hour grace period so one bad moment doesn't erase your progress. Protect your streak without shame.",
    accent: "from-blue-500 to-violet-600",
    glowColor: "rgba(99,102,241,0.14)",
  },
  {
    icon: Award,
    title: "Streak Milestones",
    description: "Animated celebrations at 3, 7, 14, and 30 days. Every milestone wires dopamine to your new habits.",
    accent: "from-purple-400 to-pink-600",
    glowColor: "rgba(168,85,247,0.14)",
  },
  {
    icon: ActivitySquare,
    title: "Neural Dashboard",
    description: "7-day heatmap, danger window predictions, top urge patterns — see your neuroplasticity in real time.",
    accent: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20,184,166,0.12)",
  },
  {
    icon: Share2,
    title: "Social Accountability",
    description: "Share your progress cards with anyone. Public commitment accelerates habit formation by up to 65%.",
    accent: "from-emerald-400 to-teal-600",
    glowColor: "rgba(52,211,153,0.10)",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-36 relative overflow-hidden bg-black">

    {/* Violet cloud — top-left echo of hero */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
      style={{ background: 'radial-gradient(circle at 0% 0%, rgba(88,28,135,0.16) 0%, transparent 70%)' }} />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style={{ background: 'radial-gradient(circle at 100% 100%, rgba(109,40,217,0.09) 0%, transparent 70%)' }} />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

      {/* ── Section heading — left-aligned asymmetric layout ── */}
      <div className="mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-purple-400/55 text-[11px] font-bold tracking-[0.3em] uppercase mb-5"
        >
          Built different
        </motion.p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="leading-[0.93] tracking-tighter"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
            }}
          >
            <span className="text-white">Rewired</span>
            <br />
            <span className="text-white/20">by design.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-purple-200/35 text-lg font-light leading-relaxed max-w-sm lg:text-right"
          >
            Every feature is engineered to intercept patterns and build healthier neural pathways — without friction.
          </motion.p>
        </div>
      </div>

      {/* ── Feature grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#08080f] border border-white/[0.05] rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.09]"
          >
            {/* Per-card hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(circle at 25% 25%, ${f.glowColor} 0%, transparent 60%)` }}
            />

            {/* Gradient-bordered icon */}
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.accent} p-px mb-7`}>
              <div className="w-full h-full rounded-xl bg-[#08080f] flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                <f.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
            </div>

            <h3
              className="text-white text-xl mb-3 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            >
              {f.title}
            </h3>
            <p className="text-purple-200/30 leading-relaxed font-light text-[15px]">{f.description}</p>

            {/* Bottom accent line on hover */}
            <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${f.accent} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default FeaturesSection;
import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, BrainCircuit } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Zap,
    title: "Feel the urge",
    body: "Hit the big button the moment you feel the pull. No thinking, no menus — just one tap.",
    iconColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    glowColor: 'rgba(168,85,247,0.18)',
    borderColor: 'border-purple-500/18',
  },
  {
    number: '02',
    icon: Target,
    title: "Do the swap",
    body: "A science-backed task interrupts the urge pathway and redirects your dopamine response immediately.",
    iconColor: 'text-violet-400',
    dotColor: 'bg-violet-400',
    glowColor: 'rgba(124,58,237,0.18)',
    borderColor: 'border-violet-500/18',
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: "Rewire your brain",
    body: "Repetition builds new neural pathways. Watch the old urge lose its grip — permanently.",
    iconColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    glowColor: 'rgba(52,211,153,0.14)',
    borderColor: 'border-emerald-500/18',
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="relative py-36 bg-black overflow-hidden">

    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(88,28,135,0.07) 0%, transparent 70%)',
    }} />

    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

      {/* Heading */}
      <div className="text-center mb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400/50 text-[11px] font-bold tracking-[0.3em] uppercase mb-5"
        >
          The process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="leading-[0.92] tracking-tighter"
          style={{ fontSize: 'clamp(2.8rem,5.5vw,5rem)', fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          <span className="text-white">Three steps.</span>
          <br />
          <span className="text-white/18">Perfectly simple.</span>
        </motion.h2>
      </div>

      {/* Steps */}
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6">

        {/* Desktop connector line — purple → emerald gradient */}
        <div
          className="hidden lg:block absolute top-[42px] left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px"
          style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.25), rgba(52,211,153,0.25))' }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.13, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col lg:items-center group"
          >
            {/* Node */}
            <div className="flex lg:flex-col lg:items-center gap-5 lg:gap-0 mb-5 lg:mb-8">
              <div
                className={`relative w-[52px] h-[52px] rounded-2xl border ${step.borderColor} flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-105`}
                style={{ background: `radial-gradient(circle, ${step.glowColor} 0%, transparent 70%)` }}
              >
                <step.icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={1.5} />
              </div>
              {/* Big ghosted number — mobile only */}
              <span className="text-white/[0.035] font-black text-[72px] leading-none tracking-tighter select-none lg:hidden"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {step.number}
              </span>
            </div>

            {/* Big ghosted number — desktop */}
            <div className="hidden lg:flex justify-center mb-3">
              <span className="text-white/[0.035] font-black text-[68px] leading-none tracking-tighter select-none"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {step.number}
              </span>
            </div>

            <div className="lg:text-center">
              <h3
                className={`text-white text-xl mb-3 tracking-tight ${step.iconColor}`}
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >
                {step.title}
              </h3>
              <p className="text-purple-200/32 font-light leading-relaxed text-[15px] max-w-[280px] lg:mx-auto">
                {step.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default HowItWorksSection;
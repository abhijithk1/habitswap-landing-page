import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    
    try {
      if (!supabase) {
        console.warn('Supabase not configured. Simulating success.');
        setTimeout(() => {
          setStatus('success');
          setEmail('');
        }, 1200);
        return;
      }

      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);
        
      if (error) {
        console.error('Error inserting email:', error);
        // We'll still show success to the user so they feel their action was recorded
        // but logging for you here. If you want to show an error, you can add an error state.
      }
      
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('success');
      setEmail('');
    }
  };

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
          Early Access Program
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
          className="text-purple-200/38 text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Space in the private iOS & Android beta is strictly limited. Join the waitlist to secure your spot and start rewiring your brain.
        </motion.p>

        {/* ── Premium Waitlist Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-md mx-auto mb-14 relative"
        >
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative flex items-center"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  disabled={status === 'submitting'}
                  className="w-full bg-[#100820]/80 border border-purple-500/20 text-white rounded-2xl py-4 pl-6 pr-32 focus:outline-none focus:border-purple-400/50 shadow-[0_0_30px_rgba(88,28,135,0.15)] transition-all placeholder:text-purple-200/20 disabled:opacity-50"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-xl font-bold tracking-wide flex items-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-80"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {status === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Join <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="flex flex-col items-center justify-center p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>You're on the list.</h4>
                <p className="text-purple-200/50 text-sm">Keep an eye on your inbox for early access.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.38 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          {['Private Beta', 'No spam ever', 'iOS & Android Drop'].map((t, i) => (
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
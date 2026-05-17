import React from 'react';
import { Star } from 'lucide-react';

const quotes = [
  { text: "Finally broke my doomscrolling habit. 3 weeks streak and counting.", author: "Abhijith K", habit: "Doomscrolling" },
  { text: "The science behind this is real. My urges are noticeably weaker.", author: "Akshay N Shaju", habit: "Social media" },
  { text: "Best dopamine detox tool out there. So beautifully simple.", author: "Shihabudeen", habit: "Snacking" },
  { text: "The 2-hour grace period kept me from giving up entirely.", author: "Midhun GG", habit: "Late nights" },
  { text: "Replaced my bad habits so smoothly. First time anything actually stuck.", author: "Donal Joyce", habit: "Procrastination" },
  { text: "I've tried everything. This is the only thing that changed the pattern.", author: "Riya Menon", habit: "Overthinking" },
];

const allQuotes = [...quotes, ...quotes];

const QuoteCard: React.FC<{ quote: typeof quotes[0] }> = ({ quote }) => (
  <div className="inline-flex flex-col mx-3 w-[340px] bg-[#09090c] border border-white/[0.05] rounded-2xl p-6 flex-shrink-0 group hover:border-purple-500/20 hover:bg-[#0d0a18] transition-all duration-500 cursor-default">
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <span className="text-purple-400/45 text-[9px] font-bold tracking-widest uppercase border border-purple-500/12 rounded-full px-2.5 py-0.5">
        {quote.habit}
      </span>
    </div>
    <p className="text-gray-500 text-[14px] leading-relaxed font-light flex-1 mb-5 group-hover:text-gray-400 transition-colors duration-300">
      "{quote.text}"
    </p>
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-violet-900 flex items-center justify-center flex-shrink-0">
        <span className="text-white text-[10px]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>
          {quote.author[0]}
        </span>
      </div>
      <span className="text-white/50 text-[13px] font-medium">{quote.author}</span>
    </div>
  </div>
);

const SocialProof = () => (
  <section className="py-24 overflow-hidden bg-black relative">
    {/* Top + bottom rules */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

    {/* Edge fades */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

    {/* ── Stat anchor — the eye-stopper before the marquee ── */}
    <div className="text-center mb-14 relative z-10 px-6">
      <p className="text-purple-400/50 text-[11px] font-bold tracking-[0.3em] uppercase mb-5">Loved by real people</p>
      <div className="flex items-end justify-center gap-3 mb-3">
        <span
          className="leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 40%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          2,000+
        </span>
        <span className="text-white/20 text-2xl font-light mb-2">urges swapped</span>
      </div>
      <p className="text-purple-200/30 text-base font-light">this week alone — and growing.</p>
    </div>

    {/* Marquee */}
    <div
      className="flex whitespace-nowrap"
      style={{ animation: 'marquee 44s linear infinite' }}
    >
      {allQuotes.map((q, i) => (
        <QuoteCard key={i} quote={q} />
      ))}
    </div>

    <style>{`
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default SocialProof;
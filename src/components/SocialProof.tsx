import React from 'react';
import { Star } from 'lucide-react';

const quotes = [
  { text: "Finally broke my doomscrolling habit. 3 weeks streak!", author: "Abhijith K", habit: "Doomscrolling" },
  { text: "The science behind this is legit. My urges are way weaker now.", author: "Akshay N Shaju", habit: "Social media" },
  { text: "Best dopamine detox tool out there. So beautifully simple.", author: "Shihabudeen", habit: "Snacking" },
  { text: "The 2-hour grace period kept me from giving up entirely.", author: "Midhun GG", habit: "Late nights" },
  { text: "Replaced my bad habits so smoothly. Highly recommend it.", author: "Donal Joyce", habit: "Procrastination" },
  { text: "I've tried everything. This is the first thing that actually stuck.", author: "Riya Menon", habit: "Overthinking" },
];

const allQuotes = [...quotes, ...quotes];

const QuoteCard = ({ quote }: { quote: typeof quotes[0] }) => (
  <div className="inline-flex flex-col mx-3 w-[340px] bg-[#0a0a0c] border border-white/[0.06] rounded-2xl p-6 flex-shrink-0 group hover:border-purple-500/20 hover:bg-[#0d0a18] transition-all duration-500">
    <div className="flex items-center justify-between mb-5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <span className="text-purple-400/50 text-[10px] font-bold tracking-widest uppercase border border-purple-500/15 rounded-full px-2.5 py-0.5">
        {quote.habit}
      </span>
    </div>
    <p className="text-gray-400 text-[15px] leading-relaxed font-light flex-1 mb-5 group-hover:text-gray-300 transition-colors duration-300">
      "{quote.text}"
    </p>
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-700 to-violet-900 flex items-center justify-center flex-shrink-0">
        <span className="text-white text-[11px] font-black">{quote.author[0]}</span>
      </div>
      <span className="text-white/60 text-sm font-semibold">{quote.author}</span>
    </div>
  </div>
);

const SocialProof = () => (
  <section className="py-20 overflow-hidden bg-black relative border-y border-white/[0.04]">
    <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

    <div className="text-center mb-10 relative z-10">
      <p className="text-purple-400/50 text-[11px] font-bold tracking-[0.3em] uppercase">What early users say</p>
    </div>

    <div className="flex whitespace-nowrap" style={{ animation: 'marquee 42s linear infinite' }}>
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
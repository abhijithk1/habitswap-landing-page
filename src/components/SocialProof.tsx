import React from 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const quotes = [
    { text: "Finally broke my doomscrolling habit. 3 weeks streak!", author: "Abhijith K" },
    { text: "The science behind this is legit. My urges are way weaker.", author: "Akshay N Shaju" },
    { text: "Best dopamine detox tool out there. So simple.", author: "Shihabudeen" },
    { text: "The 2-hour grace period actually kept me from giving up entirely.", author: "Midhun GG" },
    { text: "Replaced my bad habits so smoothly, highly recommend it.", author: "Donal Joyce" },
    { text: "Finally broke my doomscrolling habit. 3 weeks streak!", author: "Abhijith K" }, // Duplicated for smooth marquee loop
  ];

  return (
    <section className="py-24 overflow-hidden bg-black relative border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 hidden sm:block pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 hidden sm:block pointer-events-none" />
      
      <div className="relative flex flex-col md:flex-row overflow-hidden w-full group">
        
        {/* Desktop Marquee */}
        <div className="hidden md:flex whitespace-nowrap animate-marquee">
          {quotes.map((quote, idx) => (
            <div key={idx} className="inline-block mx-4 min-w-[400px]">
              <div className="bg-[#0A0A0B] border border-[#2A2A2E] rounded-3xl p-8 flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:scale-[1.02] hover:border-white/10 group-hover:opacity-75 hover:!opacity-100 cursor-pointer">
                <div className="flex gap-1 text-white mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-8 whitespace-normal font-light leading-relaxed">"{quote.text}"</p>
                <div className="mt-auto">
                  <span className="text-white font-semibold tracking-wide">— {quote.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 w-full">
          {quotes.slice(0, 4).map((quote, idx) => (
             <div key={idx} className="bg-[#0A0A0B] border border-[#2A2A2E] rounded-3xl p-6 flex flex-col shadow-lg">
             <div className="flex gap-1 text-white mb-4">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
               ))}
             </div>
             <p className="text-gray-300 text-base mb-6 leading-relaxed font-light">"{quote.text}"</p>
             <div className="mt-auto">
               <span className="text-white font-semibold">— {quote.author}</span>
             </div>
           </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;

import React from 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const quotes = [
    { text: "Finally broke my doomscrolling habit. 3 weeks streak!", author: "Abhijith K" },
    { text: "The science behind this is legit. My urges are way weaker.", author: "Akshay N Shaju" },
    { text: "Best dopamine detox tool out there. So simple.", author: "Shihabudeen" },
    { text: "The 2-hour grace period actually kept me from giving up entirely.", author: "Midhun GG" },
    { text: "Replaced my bad habits so smoothly, highly recommend it.", author: "Donal Joyce" },
    { text: "Finally broke my doomscrolling habit. 3 weeks streak!", author: "Abhijith K" },
  ];

  return (
    <section className="py-12 overflow-hidden bg-[#0A0715]">
      <div className="relative flex flex-col md:flex-row overflow-hidden w-full group">
        
        {/* Desktop Marquee */}
        <div className="hidden md:flex whitespace-nowrap animate-marquee">
          {quotes.map((quote, idx) => (
            <div key={idx} className="inline-block mx-4 min-w-[350px]">
              <div className="bg-surface border border-purple rounded-lg p-5 flex flex-col h-full shadow-sm">
                <p className="text-primary-pale text-md mb-3 whitespace-normal leading-relaxed">"{quote.text}"</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-muted text-sm font-medium">— {quote.author}</span>
                  <div className="flex gap-0.5 text-accent-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 w-full">
          {quotes.slice(0, 4).map((quote, idx) => (
             <div key={idx} className="bg-surface border border-purple rounded-lg p-5 flex flex-col shadow-sm">
             <p className="text-primary-pale text-md mb-3 leading-relaxed">"{quote.text}"</p>
             <div className="mt-auto flex items-center justify-between">
               <span className="text-muted text-sm font-medium">— {quote.author}</span>
               <div className="flex gap-0.5 text-accent-amber">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-current" />
                 ))}
               </div>
             </div>
           </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `${import.meta.env.BASE_URL}#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { name: 'Features',    id: 'features' },
    { name: 'How It Works', id: 'how-it-works' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.045)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center shadow-[0_0_16px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_24px_rgba(139,92,246,0.55)] transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span
                className="text-white text-[17px]"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
              >
                Habit Swap
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <button
                  key={l.name}
                  onClick={() => scrollTo(l.id)}
                  className="text-purple-200/40 hover:text-white transition-colors duration-200 font-medium text-sm tracking-wide"
                >
                  {l.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollTo('download')}
                className="group relative overflow-hidden bg-white text-black py-2.5 px-5 rounded-full text-sm tracking-wide transition-transform duration-300 hover:scale-[1.04]"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                <span className="relative z-10">Download Free</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-black/96 backdrop-blur-xl flex flex-col items-center justify-center gap-9 pt-16"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(l.id)}
                className="text-white/65 hover:text-white text-3xl tracking-tight transition-colors"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
              >
                {l.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              onClick={() => scrollTo('download')}
              className="mt-4 bg-white text-black py-4 px-10 rounded-full text-xl tracking-wide"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              Download Free
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
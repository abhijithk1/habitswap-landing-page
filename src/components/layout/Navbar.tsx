import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `${import.meta.env.BASE_URL}#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'How It Works', id: 'how-it-works' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[20px] bg-[#0F0A1F]/85 border-b border-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">Habit Swap</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id)}
                className="text-primary-light hover:text-white transition-colors duration-200 font-medium text-base tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('download')}
              className="bg-primary text-white font-bold py-2.5 px-5 rounded-[16px] shadow-cta hover:scale-[1.03] hover:bg-[#8B5CF6] transition-all tracking-wide"
            >
              Download Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-light hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-[#0F0A1F] flex flex-col items-center pt-12 space-y-8 px-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id)}
                className="text-primary-light hover:text-white text-2xl font-medium tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('download')}
              className="mt-8 bg-primary text-white font-bold py-4 px-8 rounded-[16px] shadow-cta w-full max-w-sm text-xl tracking-wide"
            >
              Download Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

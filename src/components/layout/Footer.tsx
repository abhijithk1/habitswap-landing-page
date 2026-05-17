import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Subtle violet bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(88,28,135,0.14) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-[17px] tracking-tight">Habit Swap</span>
            </Link>
            <p className="text-purple-200/30 text-base font-light leading-relaxed max-w-xs">
              Intercept urges. Build new pathways. Reclaim your attention — one swap at a time.
            </p>
            <p className="text-white/15 text-sm pt-2">
              © {new Date().getFullYear()} Habit Swap. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <div className="space-y-4">
            <h4 className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">Product</h4>
            {[
              { label: 'Features', href: '#features' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Download', href: '#download' },
            ].map((l) => (
              <a key={l.label} href={`${import.meta.env.BASE_URL}${l.href}`}
                className="block text-purple-200/40 hover:text-white transition-colors duration-200 font-medium text-sm">
                {l.label}
              </a>
            ))}
          </div>

          {/* Legal + contact */}
          <div className="space-y-4">
            <h4 className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">Legal & Contact</h4>
            <Link to="/privacy" className="block text-purple-200/40 hover:text-white transition-colors duration-200 font-medium text-sm">
              Privacy Policy
            </Link>
            <a href="#" className="block text-purple-200/40 hover:text-white transition-colors duration-200 font-medium text-sm">
              Terms of Service
            </a>
            <a href="mailto:habitswap.app@gmail.com" className="block text-purple-200/40 hover:text-white transition-colors duration-200 font-medium text-sm mt-6">
              habitswap.app@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/12 text-sm">Made with precision.</p>
          <p className="text-white/12 text-sm">Built on neuroscience.</p>
        </div>

      </div>
    </footer>
  );
}
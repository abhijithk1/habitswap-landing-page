import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">Habit Swap</span>
            </Link>
            <p className="text-gray-400 text-base max-w-xs font-light">
              Replace bad habits<br />
              with good ones.
            </p>
            <p className="text-gray-600 text-sm mt-8 pt-4">
              © {new Date().getFullYear()} Habit Swap.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3">
            <a href={`${import.meta.env.BASE_URL}#features`} className="text-gray-400 hover:text-white transition-colors font-medium">Features</a>
            <a href={`${import.meta.env.BASE_URL}#how-it-works`} className="text-gray-400 hover:text-white transition-colors font-medium">How It Works</a>
            <a href={`${import.meta.env.BASE_URL}#download`} className="text-gray-400 hover:text-white transition-colors font-medium">Download</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-3">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors font-medium hover:underline">Privacy Policy  →</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors font-medium">Terms of Service</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <p className="text-gray-500 text-sm pb-1 font-light">Have any questions? Send us an email.</p>
            <a href="mailto:habitswap.app@gmail.com" className="text-gray-400 hover:text-white transition-colors font-medium">habitswap.app@gmail.com</a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          Made with precision.
        </div>
      </div>
    </footer>
  );
}

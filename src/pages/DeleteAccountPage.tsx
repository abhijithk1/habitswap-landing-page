import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function DeleteAccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle violet bloom — same as site */}
      <div className="fixed top-0 left-0 right-0 h-[50vh] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(88,28,135,0.20) 0%, transparent 70%)' }} />

      <div className="max-w-[780px] mx-auto px-6 sm:px-8 py-16 relative z-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-300/50 hover:text-purple-300/80 transition-colors duration-200 text-sm font-medium mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Habit Swap
        </Link>

        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/[0.06]">
          <p className="text-purple-400/50 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Support</p>
          <h1 className="text-white leading-tight tracking-tighter mb-3"
            style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>
            Account Deletion
          </h1>
          <p className="text-purple-200/30 text-[15px] font-light">
            How to delete your Habit Swap account
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-purple max-w-none space-y-6 text-[#A09CA8] text-[15px] font-light leading-relaxed">
          <p>
            If you wish to delete your Habit Swap account and all associated data, you can do so directly within the mobile app. This action is permanent and cannot be undone.
          </p>
          
          <h3 className="text-white font-medium text-lg mt-8 mb-4">Steps to delete your account:</h3>
          
          <ol className="list-decimal pl-5 space-y-3">
            <li>Open the Habit Swap app on your device.</li>
            <li>Navigate to the <strong>Settings</strong> screen.</li>
            <li>Scroll to the bottom of the Settings screen.</li>
            <li>Tap on the <strong>Delete Account</strong> button.</li>
            <li>Confirm your decision in the prompt that appears.</li>
          </ol>

          <p className="mt-8">
            Once confirmed, your account, streaks, points, and all personal data will be permanently removed from our servers.
          </p>

          <h3 className="text-white font-medium text-lg mt-8 mb-4">Need help?</h3>
          <p>
            If you encounter any issues or no longer have access to the app, please email us directly at <a href="mailto:habitswap.app@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">habitswap.app@gmail.com</a> from the email address associated with your account, and we will process the deletion for you.
          </p>
        </div>
      </div>
    </div>
  );
}

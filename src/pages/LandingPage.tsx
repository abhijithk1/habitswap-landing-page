import React from 'react';
import HeroSection from '../components/HeroSection';
import SocialProof from '../components/SocialProof';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AnalyticsPreview from '../components/AnalyticsPreview';
import CtaSection from '../components/CtaSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <HowItWorksSection />
      <AnalyticsPreview />
      <CtaSection />
    </>
  );
}

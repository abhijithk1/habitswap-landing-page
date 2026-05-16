import React from 'react';
import HeroSection from '../components/HeroSection';
import SocialProof from '../components/SocialProof';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PremiumPreview from '../components/PremiumPreview';
import CtaSection from '../components/CtaSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <PremiumPreview />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </>
  );
}

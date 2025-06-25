
import React from 'react';
import FloatingNavigation from '@/components/FloatingNavigation';
import HeroSection from '@/components/HeroSection';
import StruggleSection from '@/components/StruggleSection';
import SolutionSection from '@/components/SolutionSection';
import PlatformSection from '@/components/PlatformSection';
import ProofSection from '@/components/ProofSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="relative snap-container">
      <FloatingNavigation />
      
      <div className="snap-section">
        <HeroSection />
      </div>
      
      <div className="snap-section">
        <StruggleSection />
      </div>
      
      <div className="snap-section">
        <SolutionSection />
      </div>
      
      <div className="snap-section">
        <PlatformSection />
      </div>
      
      <div className="snap-section">
        <ProofSection />
      </div>
      
      <div className="snap-section">
        <DifferentiationSection />
      </div>
      
      <div className="snap-section">
        <CTASection />
      </div>
    </div>
  );
};

export default Index;

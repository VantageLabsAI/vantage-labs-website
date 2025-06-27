import React from 'react';
import FloatingNavigation from '@/components/FloatingNavigation';
import HeroSection from '@/components/HeroSection';
import CompanionSection from '@/components/CompanionSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import EngagementModesSection from '../components/EngagementModesSection';
import InsideCompanionSection from '@/components/InsideCompanionSection';


import PlatformSection from '@/components/PlatformSection';

import DifferentiationSection from '@/components/DifferentiationSection';
import CTASection from '@/components/CTASection';
import DefiningSection from '@/components/DefiningSection';

const Index = () => {
  return (
    <div className="relative snap-container">
      <FloatingNavigation />
      
      <div className="snap-section">
        <HeroSection />
      </div>
      
      <div className="snap-section">
        <CompanionSection />
      </div>
      
      <div className="snap-section">
        <CapabilitiesSection />
      </div>
      
      <div className="snap-section">
        <EngagementModesSection />
      </div>
      
      <div className="snap-section">
        <InsideCompanionSection />
      </div>
      
      <div className="snap-section">
        <PlatformSection />
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

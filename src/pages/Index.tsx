
import React from 'react';
import FloatingNavigation from '@/components/FloatingNavigation';
import HeroSection from '@/components/HeroSection';
import StruggleSection from '@/components/StruggleSection';
import SolutionSection from '@/components/SolutionSection';
import PlaceholderSection from '@/components/PlaceholderSection';

const Index = () => {
  return (
    <div className="relative">
      <FloatingNavigation />
      
      <HeroSection />
      
      <StruggleSection />
      
      <SolutionSection />
      
      <PlaceholderSection
        id="platform"
        title="The Vantage Platform"
        subtitle="Built for enterprise scale and security"
        description="Our platform integrates seamlessly with existing systems while providing the governance, security, and scalability that enterprises demand."
        bgColor="bg-midnight text-white"
      />
      
      <PlaceholderSection
        id="proof"
        title="Proven Results"
        subtitle="Measurable impact across industries"
        description="Leading enterprises trust Vantage Labs to accelerate their AI initiatives, reduce implementation time, and achieve sustainable competitive advantages."
      />
      
      <PlaceholderSection
        id="differentiation"
        title="Why Vantage Labs"
        subtitle="The enterprise AI partner you can trust"
        description="We combine deep technical expertise with enterprise-grade security and compliance, ensuring your AI initiatives succeed at scale."
        bgColor="bg-gray-50"
      />
      
      <PlaceholderSection
        id="cta"
        title="Ready to Transform?"
        subtitle="Start your AI transformation journey"
        description="Join the enterprises that are already reshaping their industries with intelligent infrastructure. Let's discuss how Vantage Labs can accelerate your success."
        bgColor="bg-indigo text-white"
      />
    </div>
  );
};

export default Index;

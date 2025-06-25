
import React from 'react';

interface PlaceholderSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor?: string;
}

const PlaceholderSection = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  bgColor = "bg-white" 
}: PlaceholderSectionProps) => {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor}`}>
      <div className="text-center section-padding container-wide max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-6">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-indigo font-medium mb-8">
          {subtitle}
        </p>
        <p className="text-lg text-slate leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        
        {/* Visual placeholder */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-indigo/10 to-emerald/10 rounded-2xl border border-gray-200 flex items-center justify-center">
            <div className="text-slate/60 text-lg font-medium">
              Content section coming soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;

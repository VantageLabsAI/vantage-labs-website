import React from 'react';

interface FloatingNode {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const AnimatedBackground = () => {
  // Generate floating nodes
  const nodes: FloatingNode[] = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-[#F9FAFB]" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-emerald-50/20 to-white/0" />
      
      {/* Animated network nodes */}
      <div className="absolute inset-0">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute rounded-full bg-indigo-400/50 animate-float"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDelay: `${node.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        
        {/* Animated flowing paths */}
        <g className="animate-pulse-slow">
          <path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-network-flow"
          />
          <path
            d="M100,200 Q300,150 500,200 T900,200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-network-flow"
            style={{ animationDelay: '2s' }}
          />
          <path
            d="M50,300 Q250,250 450,300 T850,300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-network-flow"
            style={{ animationDelay: '4s' }}
          />
        </g>
      </svg>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6366F1 1px, transparent 1px),
            linear-gradient(to bottom, #6366F1 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

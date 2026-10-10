import React from 'react';

/**
 * IslamicCorner: Authentic Islamic Geometric Corner Motif
 * 
 * Features:
 * - Symmetrical 8-pointed star (Rub el Hizb)
 * - Interlacing antique gold geometric corner lines & flourishes
 * - Fully responsive & scalable SVG
 */
export const IslamicCorner = ({ position = 'top-left', className = '', size = 70 }) => {
  const rotationClasses = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  };

  return (
    <div 
      className={`pointer-events-none absolute select-none ${rotationClasses[position] || ''} ${className}`}
      style={{ 
        width: `clamp(28px, 9vw, ${size}px)`, 
        height: `clamp(28px, 9vw, ${size}px)` 
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#C6A15B]"
      >
        <defs>
          <linearGradient id="islamicGoldCornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5D3A1" />
            <stop offset="50%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#9A7730" />
          </linearGradient>
        </defs>

        {/* Outer Corner L-Frame */}
        <path
          d="M6 94 V 22 C 6 13 13 6 22 6 H 94"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Inner Secondary Line */}
        <path
          d="M14 94 V 26 C 14 19 19 14 26 14 H 94"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="0.75"
          strokeDasharray="3 3"
          opacity="0.85"
        />

        {/* 8-Pointed Star (Rub el Hizb) at Corner */}
        <g transform="translate(24, 24)">
          <rect x="-6" y="-6" width="12" height="12" fill="url(#islamicGoldCornerGrad)" opacity="0.9" rx="0.5" />
          <rect x="-6" y="-6" width="12" height="12" fill="url(#islamicGoldCornerGrad)" opacity="0.9" rx="0.5" transform="rotate(45)" />
          <circle cx="0" cy="0" r="2.2" fill="#FAF7EF" />
        </g>

        {/* Delicate Arabesque Arch Flourish */}
        <path
          d="M 6 42 Q 22 42 32 32 Q 42 22 42 6"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 14 56 Q 32 56 46 42 Q 56 32 56 14"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="0.75"
          fill="none"
          opacity="0.5"
        />

        {/* Diamond Node Accents along border */}
        <path d="M 6 65 L 8 67 L 6 69 L 4 67 Z" fill="url(#islamicGoldCornerGrad)" />
        <path d="M 65 6 L 67 8 L 69 6 L 67 4 Z" fill="url(#islamicGoldCornerGrad)" />

        <circle cx="82" cy="6" r="1.5" fill="url(#islamicGoldCornerGrad)" />
        <circle cx="6" cy="82" r="1.5" fill="url(#islamicGoldCornerGrad)" />
      </svg>
    </div>
  );
};

export default IslamicCorner;

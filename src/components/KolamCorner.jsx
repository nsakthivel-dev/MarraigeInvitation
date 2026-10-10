import React from 'react';

/**
 * Traditional South Indian Kolam / Rangoli Corner Motif
 * Designed with precise geometric lines inspired by rice flour kolam patterns.
 */
export const KolamCorner = ({ position = 'top-left', className = '', size = 70 }) => {
  // Rotate according to position
  const rotationClasses = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  };

  return (
    <div 
      className={`pointer-events-none absolute select-none ${rotationClasses[position] || ''} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#B08D57]/70 drop-shadow-xs"
      >
        {/* Outer Corner L-Frame */}
        <path
          d="M6 94 V 20 C 6 12 12 6 20 6 H 94"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 94 V 24 C 14 18 18 14 24 14 H 94"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="2 3"
        />
        
        {/* Sacred Kolam Petals & Knot Corner */}
        <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.4" />
        <circle cx="36" cy="20" r="2.5" fill="currentColor" fillOpacity="0.6" />
        <circle cx="20" cy="36" r="2.5" fill="currentColor" fillOpacity="0.6" />
        <circle cx="28" cy="28" r="3" stroke="currentColor" strokeWidth="1" />

        {/* Traditional Kolam Swirls */}
        <path
          d="M 20 6 C 30 14, 30 26, 20 34 C 10 26, 10 14, 20 6 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 6 20 C 14 30, 26 30, 34 20 C 26 10, 14 10, 6 20 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />

        {/* Corner Bloom / Lotus Flourish */}
        <path
          d="M 8 8 Q 28 28 48 18 Q 28 28 18 48 Q 28 28 8 8"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="currentColor"
          fillOpacity="0.1"
        />

        {/* Delicate Corner Diamond */}
        <path
          d="M 12 12 L 16 8 L 20 12 L 16 16 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default KolamCorner;

import React from 'react';

/**
 * IslamicArchBorder: Botanical Floral Mosque Arch & Geometric Crest Garland
 * 
 * Features:
 * - Symmetrical multi-foil Moorish arches in champagne gold (#C6A46A)
 * - Woven watercolor blush rosebuds (#F4C6D5) & lavender blossom sprigs (#D8C9EF)
 * - 8-pointed gold stars and hanging filigree pendants
 * - Preserves exact 1200x48 geometry and alignment
 */
export const IslamicArchBorder = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 md:h-12 text-[#C6A46A]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A46A" />
            <stop offset="25%" stopColor="#E5D3A1" />
            <stop offset="50%" stopColor="#FFFDF8" />
            <stop offset="75%" stopColor="#E5D3A1" />
            <stop offset="100%" stopColor="#C6A46A" />
          </linearGradient>

          {/* 8-pointed star definition */}
          <g id="star8Point">
            <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
            <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
            <circle cx="0" cy="0" r="1.5" fill="#FFFDF8" />
          </g>

          {/* Hanging Lavender & Pendant Drop */}
          <g id="hangingPendant">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#C6A46A" strokeWidth="1" />
            <path d="M -3 7 L 3 7 L 0 13 Z" fill="#C6A46A" />
            <circle cx="0" cy="14" r="1.2" fill="#EAE2F6" />
          </g>

          {/* Miniature Botanical Rosebud */}
          <g id="miniRosebud">
            <path d="M -3 0 C -4 -3, 0 -4, 3 -3 C 4 -1, 3 2, 0 3 C -3 3, -4 1, -3 0 Z" fill="#F4C6D5" opacity="0.95" />
            <path d="M -1 -1 C -2 -2, 1 -3, 2 -1 C 2 0, 1 2, -1 1 Z" fill="#D99AAF" />
            <circle cx="0" cy="0" r="0.8" fill="#5C405C" opacity="0.6" />
            <path d="M -4 2 Q -2 4 0 3" stroke="#C6A46A" strokeWidth="0.5" fill="none" />
          </g>

          {/* Miniature Lavender Floret Pair */}
          <g id="miniLavender">
            <ellipse cx="-2.5" cy="-1.5" rx="1.5" ry="2.5" transform="rotate(-20 -2.5 -1.5)" fill="#D8C9EF" />
            <ellipse cx="2.5" cy="-1.5" rx="1.5" ry="2.5" transform="rotate(20 2.5 -1.5)" fill="#EAE2F6" />
            <circle cx="0" cy="0" r="1" fill="#C6A46A" />
          </g>
        </defs>

        {/* Top Gold Horizon Line */}
        <line x1="0" y1="2" x2="1200" y2="2" stroke="url(#crestGoldGrad)" strokeWidth="1.5" />
        <line x1="0" y1="6" x2="1200" y2="6" stroke="#C6A46A" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.65" />

        {/* Repeating Islamic Moorish Arches with Floral Sprigs */}
        {Array.from({ length: 12 }).map((_, i) => {
          const x = i * 100;
          return (
            <g key={i}>
              {/* Pointed Ogee / Moorish Arch Curve */}
              <path
                d={`M ${x} 6 C ${x + 20} 6, ${x + 35} 22, ${x + 50} 24 C ${x + 65} 22, ${x + 80} 6, ${x + 100} 6`}
                stroke="url(#crestGoldGrad)"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d={`M ${x + 10} 6 C ${x + 25} 6, ${x + 40} 18, ${x + 50} 19 C ${x + 60} 18, ${x + 75} 6, ${x + 90} 6`}
                stroke="#C6A46A"
                strokeWidth="0.6"
                fill="rgba(234, 226, 246, 0.08)"
              />

              {/* Botanical Vignette Along Arch: Alternating Rosebuds & Lavender */}
              {i % 2 === 0 ? (
                <use href="#miniRosebud" transform={`translate(${x + 26}, 13)`} />
              ) : (
                <use href="#miniLavender" transform={`translate(${x + 26}, 13)`} />
              )}
              {i % 2 === 1 ? (
                <use href="#miniRosebud" transform={`translate(${x + 74}, 13)`} />
              ) : (
                <use href="#miniLavender" transform={`translate(${x + 74}, 13)`} />
              )}

              {/* Central Star at Apex */}
              <use href="#star8Point" transform={`translate(${x + 50}, 24)`} />

              {/* Hanging Pendants at Arch Joins */}
              <use href="#hangingPendant" transform={`translate(${x}, 6)`} />
            </g>
          );
        })}
        {/* End pendant */}
        <use href="#hangingPendant" transform="translate(1200, 6)" />
      </svg>
    </div>
  );
};

export default IslamicArchBorder;

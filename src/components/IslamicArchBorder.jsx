import React from 'react';

/**
 * IslamicArchBorder: Ornamental Mosque Arch & Geometric Crest Garland
 * 
 * Hung gracefully at the top of the revealed wedding invitation.
 * Symmetrical multi-foil arches, 8-pointed stars, and hanging antique-gold finials.
 */
export const IslamicArchBorder = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 md:h-12 text-[#C6A15B]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A15B" />
            <stop offset="25%" stopColor="#E5D3A1" />
            <stop offset="50%" stopColor="#FAF7EF" />
            <stop offset="75%" stopColor="#E5D3A1" />
            <stop offset="100%" stopColor="#C6A15B" />
          </linearGradient>

          {/* 8-pointed star definition */}
          <g id="star8Point">
            <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" />
            <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" transform="rotate(45)" />
            <circle cx="0" cy="0" r="1.5" fill="#FAF7EF" />
          </g>

          {/* Mini Hanging Lantern Pendant */}
          <g id="hangingPendant">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#C6A15B" strokeWidth="1" />
            <path d="M -3 8 L 3 8 L 0 14 Z" fill="#C6A15B" />
            <circle cx="0" cy="15" r="1.2" fill="#E5D3A1" />
          </g>
        </defs>

        {/* Top Gold Horizon Line */}
        <line x1="0" y1="2" x2="1200" y2="2" stroke="url(#crestGoldGrad)" strokeWidth="1.5" />
        <line x1="0" y1="6" x2="1200" y2="6" stroke="#C6A15B" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />

        {/* Repeating Islamic Moorish Arches (Each 100px wide) */}
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
                stroke="#C6A15B"
                strokeWidth="0.6"
                fill="rgba(6, 78, 59, 0.04)"
              />

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

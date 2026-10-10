import React from 'react';

/**
 * IslamicLantern: Traditional Ornamental Fanous / Lantern
 * 
 * Features:
 * - Antique-gold filigree structure
 * - Top crescent finial
 * - Inner warm candle glow with gentle pulsating aura
 * - Symmetrical Arabesque cutouts
 */
export const IslamicLantern = ({ height = 110, className = '' }) => {
  return (
    <div 
      className={`inline-block select-none pointer-events-none drop-shadow-md animate-lantern-sway ${className}`} 
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 60 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          {/* Antique Gold Metallic Gradient */}
          <linearGradient id="lanternGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A7730" />
            <stop offset="25%" stopColor="#C6A15B" />
            <stop offset="50%" stopColor="#F5E8C7" />
            <stop offset="75%" stopColor="#C6A15B" />
            <stop offset="100%" stopColor="#7E5F20" />
          </linearGradient>

          {/* Warm Amber Lantern Glow */}
          <radialGradient id="lanternAmberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#F5D061" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#C6A15B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Hanging Ring & Chain */}
        <circle cx="30" cy="8" r="4" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" />
        <line x1="30" y1="12" x2="30" y2="18" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" />

        {/* 2. Crescent Finial */}
        <g transform="translate(30, 21) scale(0.7)">
          <path
            d="M 2 -5 C -4 -5 -7 -1 -7 4 C -7 9 -4 13 2 13 C -2 11 -4 8 -4 4 C -4 0 -2 -3 2 -5 Z"
            fill="url(#lanternGoldGrad)"
          />
          <circle cx="3" cy="3" r="1.5" fill="url(#lanternGoldGrad)" />
        </g>

        {/* 3. Ornate Domed Lantern Cap (Moorish Dome) */}
        <path
          d="M 28 30 Q 30 25 32 30 L 38 34 Q 30 32 22 34 Z"
          fill="url(#lanternGoldGrad)"
        />
        <path
          d="M 20 34 C 20 34, 23 42, 14 48 L 46 48 C 37 42, 40 34, 40 34 Z"
          fill="url(#lanternGoldGrad)"
          stroke="#7E5F20"
          strokeWidth="0.5"
        />
        <rect x="13" y="48" width="34" height="4" rx="1" fill="url(#lanternGoldGrad)" />

        {/* 4. Glowing Central Glass Chamber */}
        {/* Glow Aura */}
        <ellipse cx="30" cy="74" rx="14" ry="20" fill="url(#lanternAmberGlow)" className="animate-lantern-glow" />

        {/* Inner Flame / Wick Light */}
        <ellipse cx="30" cy="75" rx="3.5" ry="6" fill="#FFFBE6" opacity="0.9" />

        {/* Outer Glass Arch Outlines */}
        <path
          d="M 16 52 L 18 94 L 42 94 L 44 52 Z"
          fill="none"
          stroke="url(#lanternGoldGrad)"
          strokeWidth="1.5"
        />

        {/* Islamic Arch Facet Lines in Glass */}
        <path
          d="M 23 52 L 24 94 M 36 52 L 35 94"
          stroke="url(#lanternGoldGrad)"
          strokeWidth="0.8"
          opacity="0.75"
        />
        <path
          d="M 18 64 Q 30 57 42 64"
          stroke="url(#lanternGoldGrad)"
          strokeWidth="0.75"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 18 82 Q 30 75 42 82"
          stroke="url(#lanternGoldGrad)"
          strokeWidth="0.75"
          fill="none"
          opacity="0.6"
        />

        {/* 5. Lower Collar & Base */}
        <rect x="14" y="94" width="32" height="4" rx="1" fill="url(#lanternGoldGrad)" />
        <path
          d="M 17 98 L 22 110 L 38 110 L 43 98 Z"
          fill="url(#lanternGoldGrad)"
          stroke="#7E5F20"
          strokeWidth="0.5"
        />

        {/* 6. Pendant Droplet / Tassel Finial */}
        <path
          d="M 30 110 L 30 120 M 28 120 L 32 120 L 30 126 Z"
          stroke="url(#lanternGoldGrad)"
          strokeWidth="1"
          fill="url(#lanternGoldGrad)"
        />
      </svg>
    </div>
  );
};

export default IslamicLantern;

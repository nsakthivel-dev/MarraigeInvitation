import React from 'react';

/**
 * WeddingScarf: Premium Realistic Draped Silk Scarf
 * 
 * Features:
 * 1. Prominent, natural U-shaped center drape hanging under gravity.
 * 2. Realistic layered fabric folds (rear under-swag, main silk drape, and front overlapping fold).
 * 3. Deep emerald-green silk gradient with soft satin specular highlights and crease shadows.
 * 4. Delicate metallic gold embroidered piping along top and bottom hems with fine ivory stitch detailing.
 * 5. Discreet, refined central gold knot accent seamlessly integrated into the fold (NO giant clashing medallion).
 * 6. Gathered silk ends with subtle gold fringe touching the cards' inner borders.
 * 7. Fully responsive vector SVG with unique gradient IDs per instance.
 */
export const WeddingScarf = ({ className = '', idPrefix = 'wedding-scarf' }) => {
  const silkGrad = `${idPrefix}-silk-grad`;
  const underSilkGrad = `${idPrefix}-under-silk-grad`;
  const frontFoldGrad = `${idPrefix}-front-fold-grad`;
  const goldPipingGrad = `${idPrefix}-gold-piping`;
  const shadowFilter = `${idPrefix}-fabric-shadow`;
  const foldShadow = `${idPrefix}-fold-shadow`;

  return (
    <div 
      className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 280 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Main Silk Body Gradient: Deep emerald with natural satin luster */}
          <linearGradient id={silkGrad} x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#032B20" />
            <stop offset="15%" stopColor="#054D38" />
            <stop offset="35%" stopColor="#07664B" />
            <stop offset="50%" stopColor="#0D8262" />
            <stop offset="65%" stopColor="#07664B" />
            <stop offset="85%" stopColor="#054D38" />
            <stop offset="100%" stopColor="#032B20" />
          </linearGradient>

          {/* Under-Swag Gradient: Shadowed cavity inside the U-fold */}
          <linearGradient id={underSilkGrad} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#011812" />
            <stop offset="70%" stopColor="#022B20" />
            <stop offset="100%" stopColor="#033829" />
          </linearGradient>

          {/* Overlapping Front Fold Gradient: Highlights the prominent forward center fold */}
          <linearGradient id={frontFoldGrad} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#05523C" />
            <stop offset="40%" stopColor="#0B795B" />
            <stop offset="50%" stopColor="#109973" />
            <stop offset="60%" stopColor="#0B795B" />
            <stop offset="100%" stopColor="#044230" />
          </linearGradient>

          {/* Antique Gold Metallic Zari Piping */}
          <linearGradient id={goldPipingGrad} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A88339" />
            <stop offset="25%" stopColor="#D4B26F" />
            <stop offset="50%" stopColor="#FFF4D4" />
            <stop offset="75%" stopColor="#D4B26F" />
            <stop offset="100%" stopColor="#A88339" />
          </linearGradient>

          {/* Soft Fabric Depth Drop Shadow */}
          <filter id={shadowFilter} x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#011A13" floodOpacity="0.25" />
          </filter>

          {/* Lip Shadow for Overlapping Fold */}
          <filter id={foldShadow} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.8" floodColor="#01140E" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 1. Underlying Deep Shadow Cavity (Rear Interior of the U-Swag) */}
        <path
          d="M 52 35 C 80 48, 110 58, 140 58 C 170 58, 200 48, 228 35 C 205 56, 175 72, 140 72 C 105 72, 75 56, 52 35 Z"
          fill={`url(#${underSilkGrad})`}
          opacity="0.95"
        />

        {/* 2. Main Silk Body with Natural U-Drape Under Gravity */}
        <g filter={`url(#${shadowFilter})`}>
          <path
            d="M 12 24 C 60 33, 102 44, 140 45 C 178 44, 220 33, 268 24 C 273 29, 270 38, 262 44 C 224 58, 184 79, 140 84 C 96 79, 56 58, 18 44 C 10 38, 7 29, 12 24 Z"
            fill={`url(#${silkGrad})`}
          />
        </g>

        {/* 3. Deep Crease Shadows Radiating From Outer Anchors Toward Center Drape */}
        <path
          d="M 28 32 C 68 44, 105 60, 134 76"
          stroke="#011E16"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        />
        <path
          d="M 252 32 C 212 44, 175 60, 146 76"
          stroke="#011E16"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        />

        {/* Subtle Mid-Drape Crease */}
        <path
          d="M 46 40 C 82 54, 112 68, 140 72 C 168 68, 198 54, 234 40"
          stroke="#02281D"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
          fill="none"
        />

        {/* 4. Prominent Front Layered Fold (The Center U-Drape Swag) */}
        <g filter={`url(#${foldShadow})`}>
          <path
            d="M 72 37 C 96 48, 118 64, 140 77 C 162 64, 184 48, 208 37 C 188 56, 166 84, 140 86 C 114 84, 92 56, 72 37 Z"
            fill={`url(#${frontFoldGrad})`}
          />
        </g>

        {/* 5. Satin Crease Highlights (Soft Sheen Reflecting Across Folds) */}
        {/* Soft highlight following the upper fold contour */}
        <path
          d="M 20 28 C 64 36, 104 46, 140 47 C 176 46, 216 36, 260 28"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.28"
          fill="none"
        />

        {/* Highlight on front fold crest */}
        <path
          d="M 78 40 C 100 52, 120 68, 140 76 C 160 68, 180 52, 202 40"
          stroke="#FFF4D4"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
          fill="none"
        />

        {/* Highlight on the lowest bottom rounded sweep */}
        <path
          d="M 85 74 C 102 81, 121 85, 140 85 C 159 85, 178 81, 195 74"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.3"
          fill="none"
        />

        {/* 6. Delicate Gold Embroidered Piping (Top & Bottom Edges) */}
        {/* Upper Gold Piping */}
        <path
          d="M 12 24 C 60 33, 102 44, 140 45 C 178 44, 220 33, 268 24"
          stroke={`url(#${goldPipingGrad})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Upper Fine Ivory Stitch Detail */}
        <path
          d="M 14 26 C 61 35, 102 46, 140 47 C 178 46, 219 35, 266 26"
          stroke="#FFFDF9"
          strokeWidth="0.6"
          strokeDasharray="2 3"
          opacity="0.75"
          fill="none"
        />

        {/* Lower Gold Piping (Tracing the Deep U-Drape) */}
        <path
          d="M 18 44 C 56 58, 96 79, 140 84 C 184 79, 224 58, 262 44"
          stroke={`url(#${goldPipingGrad})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Lower Fine Ivory Stitch Detail */}
        <path
          d="M 20 42 C 58 56, 96 77, 140 82 C 184 77, 222 56, 260 42"
          stroke="#FFFDF9"
          strokeWidth="0.6"
          strokeDasharray="2 3"
          opacity="0.75"
          fill="none"
        />

        {/* 7. Discreet, Refined Central Gold Knot Accent (Integrated into Fold) */}
        {/* A tiny, elegant embroidered gold clasp (width 8px, height 12px) - NO giant clashing medallion */}
        <g transform="translate(140, 46)">
          {/* Subtle gold ribbon band holding the center gather */}
          <rect
            x="-4.5"
            y="-2"
            width="9"
            height="8"
            rx="1.5"
            fill={`url(#${goldPipingGrad})`}
            filter={`url(#${foldShadow})`}
          />
          {/* Emerald inlay core */}
          <rect
            x="-2.5"
            y="-0.5"
            width="5"
            height="5"
            rx="0.8"
            fill="#032B20"
          />
          {/* Microscopic champagne gold center starlet */}
          <circle cx="0" cy="2" r="1.1" fill="#FFF4D4" />
        </g>

        {/* 8. Outer Gathered Silk Ends with Delicate Fringe (Touching Card Inner Margins) */}
        {/* Left Side Gather & Tiny Fringe */}
        <path
          d="M 12 24 C 6 30, 8 40, 18 44 C 14 38, 12 32, 12 24 Z"
          fill={`url(#${silkGrad})`}
        />
        <path
          d="M 7 43 L 9 48 M 10 44 L 12 49 M 13 45 L 15 50"
          stroke={`url(#${goldPipingGrad})`}
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Right Side Gather & Tiny Fringe */}
        <path
          d="M 268 24 C 274 30, 272 40, 262 44 C 266 38, 268 32, 268 24 Z"
          fill={`url(#${silkGrad})`}
        />
        <path
          d="M 273 43 L 271 48 M 270 44 L 268 49 M 267 45 L 265 50"
          stroke={`url(#${goldPipingGrad})`}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default WeddingScarf;

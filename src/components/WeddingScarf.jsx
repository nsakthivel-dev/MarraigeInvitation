import React from 'react';

/**
 * WeddingScarf: Ceremonial Draped Silk Cloth & Union Clasp
 * 
 * Symbolizes the traditional sacred wedding scarf / ceremonial cloth connecting
 * the Bridegroom and the Bride cards.
 * 
 * Features:
 * - Fluid, natural draped silk curves (catenary swag) with realistic fabric folds & depth
 * - Royal emerald-green silk gradient with satin specular highlights
 * - Intricate antique-gold embroidered zari borders and fine stitch detailing
 * - Central ceremonial gold & emerald union clasp with 8-pointed Islamic star
 * - Hanging silk cascade pleats with delicate gold fringe accents
 * - Fully responsive, vector SVG format with customizable idPrefix to avoid DOM ID collisions
 */
export const WeddingScarf = ({ className = '', idPrefix = 'wedding-scarf' }) => {
  const silkGradId = `${idPrefix}-silk`;
  const silkUnderGradId = `${idPrefix}-silk-under`;
  const goldGradId = `${idPrefix}-gold`;
  const shadowFilterId = `${idPrefix}-shadow`;

  return (
    <div 
      className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Rich Emerald Silk Luster Gradient */}
          <linearGradient id={silkGradId} x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#042F24" />
            <stop offset="18%" stopColor="#065F46" />
            <stop offset="48%" stopColor="#0A7758" />
            <stop offset="52%" stopColor="#0F8B68" />
            <stop offset="82%" stopColor="#065F46" />
            <stop offset="100%" stopColor="#042F24" />
          </linearGradient>

          {/* Deeper Shadow Under-Fold Silk Gradient */}
          <linearGradient id={silkUnderGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#021E17" />
            <stop offset="50%" stopColor="#03382B" />
            <stop offset="100%" stopColor="#021E17" />
          </linearGradient>

          {/* Antique Gold Metallic Zari Embroidery Gradient */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A15B" />
            <stop offset="30%" stopColor="#E5D3A1" />
            <stop offset="50%" stopColor="#FFF7DE" />
            <stop offset="70%" stopColor="#E5D3A1" />
            <stop offset="100%" stopColor="#9A7730" />
          </linearGradient>

          {/* Soft Fabric Depth Shadow */}
          <filter id={shadowFilterId} x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#021F17" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* 1. Underlying Depth Shadow Layer */}
        <g filter={`url(#${shadowFilterId})`}>
          {/* Secondary Under-Swag / Inner Silk Fold (Adds Realistic Fabric Depth) */}
          <path
            d="M 22 34 C 58 50, 80 56, 100 56 C 120 56, 142 50, 178 34 C 158 54, 130 66, 100 66 C 70 66, 42 54, 22 34 Z"
            fill={`url(#${silkUnderGradId})`}
            opacity="0.9"
          />

          {/* 2. Primary Silk Swag Body (Main Flowing Fabric Drape) */}
          <path
            d="M 8 20 C 48 38, 76 44, 100 44 C 124 44, 152 38, 192 20 C 196 25, 194 36, 186 42 C 152 58, 126 64, 100 64 C 74 64, 48 58, 14 42 C 6 36, 4 25, 8 20 Z"
            fill={`url(#${silkGradId})`}
          />
        </g>

        {/* 3. Silk Surface Luster, Sheen & Crease Folds */}
        {/* Soft satin reflection line following upper contour */}
        <path
          d="M 18 26 C 54 41, 78 46, 100 46 C 122 46, 146 41, 182 26"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.22"
          fill="none"
        />

        {/* Subtle mid-swag ripple highlight */}
        <path
          d="M 28 34 C 60 48, 80 53, 100 53 C 120 53, 140 48, 172 34"
          stroke={`url(#${goldGradId})`}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.32"
          fill="none"
        />

        {/* 4. Fine Antique Gold Embroidered Zari Borders */}
        {/* Upper Gold Embroidery Hem */}
        <path
          d="M 8 20 C 48 38, 76 44, 100 44 C 124 44, 152 38, 192 20"
          stroke={`url(#${goldGradId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Upper Delicate Stitch Detail */}
        <path
          d="M 10 22.5 C 49 40, 76 46, 100 46 C 124 46, 151 40, 190 22.5"
          stroke="#FFFDF9"
          strokeWidth="0.75"
          strokeDasharray="2 3"
          opacity="0.8"
          fill="none"
        />

        {/* Lower Gold Embroidery Hem */}
        <path
          d="M 14 42 C 48 58, 74 64, 100 64 C 126 64, 152 58, 186 42"
          stroke={`url(#${goldGradId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Lower Delicate Stitch Detail */}
        <path
          d="M 16 39.5 C 50 55.5, 74 61.5, 100 61.5 C 126 61.5, 150 55.5, 184 39.5"
          stroke="#FFFDF9"
          strokeWidth="0.75"
          strokeDasharray="2 3"
          opacity="0.8"
          fill="none"
        />

        {/* 5. Left & Right Gathered Silk Ends (Draping on Card Inner Borders) */}
        {/* Left Side Gather & Delicate Fringe */}
        <path
          d="M 8 20 C 3 28, 4 40, 8 50 C 11 48, 14 44, 14 42 Z"
          fill={`url(#${silkGradId})`}
          opacity="0.95"
        />
        <path
          d="M 5 50 L 10 50 M 7 50 L 7 55"
          stroke={`url(#${goldGradId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Right Side Gather & Delicate Fringe */}
        <path
          d="M 192 20 C 197 28, 196 40, 192 50 C 189 48, 186 44, 186 42 Z"
          fill={`url(#${silkGradId})`}
          opacity="0.95"
        />
        <path
          d="M 190 50 L 195 50 M 193 50 L 193 55"
          stroke={`url(#${goldGradId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 6. Central Ceremonial Union Clasp / Brooch */}
        {/* Hanging Tassels Beneath Brooch */}
        <path
          d="M 97 62 C 95.5 68, 94.5 73, 95.5 77"
          stroke={`url(#${goldGradId})`}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="95.5" cy="77" r="1.2" fill={`url(#${goldGradId})`} />

        <path
          d="M 103 62 C 104.5 68, 105.5 73, 104.5 77"
          stroke={`url(#${goldGradId})`}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="104.5" cy="77" r="1.2" fill={`url(#${goldGradId})`} />

        {/* Brooch Outer Filigree Ring */}
        <circle
          cx="100"
          cy="52"
          r="11"
          fill="#064E3B"
          stroke={`url(#${goldGradId})`}
          strokeWidth="1.6"
          filter={`url(#${shadowFilterId})`}
        />
        {/* Brooch Inner Gold Beaded Ring */}
        <circle
          cx="100"
          cy="52"
          r="8.5"
          fill="none"
          stroke={`url(#${goldGradId})`}
          strokeWidth="0.8"
          strokeDasharray="1.5 1.5"
        />

        {/* Central Rub el Hizb (8-Pointed Star) Knot Motif */}
        <g transform="translate(100, 52)">
          <rect
            x="-4.5"
            y="-4.5"
            width="9"
            height="9"
            fill={`url(#${goldGradId})`}
            rx="0.6"
          />
          <rect
            x="-4.5"
            y="-4.5"
            width="9"
            height="9"
            fill={`url(#${goldGradId})`}
            rx="0.6"
            transform="rotate(45)"
          />
          <circle cx="0" cy="0" r="1.5" fill="#FAF7EF" />
        </g>
      </svg>
    </div>
  );
};

export default WeddingScarf;

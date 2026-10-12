import React from 'react';

/**
 * IslamicCorner: Rose Pink & Lavender Botanical Corner Artwork
 * 
 * Features:
 * - Hand-crafted botanical watercolor garden roses in blush pink (#F4C6D5) & dusty rose (#D99AAF)
 * - Delicate lavender blossom sprigs (#D8C9EF) and soft lilac florets (#EAE2F6)
 * - Subtle champagne-gold botanical foliage and delicate vines (#C6A46A)
 * - Symmetrical 8-pointed star (Rub el Hizb) seamlessly nestled in the arrangement
 * - Pure SVG vector art: razor-sharp at any resolution, zero load delay, fully responsive
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
        className="w-full h-full text-[#C6A46A]"
      >
        <defs>
          {/* Champagne Gold Gradient */}
          <linearGradient id="islamicGoldCornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5D3A1" />
            <stop offset="50%" stopColor="#C6A46A" />
            <stop offset="100%" stopColor="#9A7730" />
          </linearGradient>

          {/* Watercolor Blush Pink Rose Outer Petal Gradient */}
          <radialGradient id="roseBlushPetal" cx="40%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#FFFDF8" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F4C6D5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D99AAF" stopOpacity="0.95" />
          </radialGradient>

          {/* Watercolor Dusty Rose Inner Heart Gradient */}
          <radialGradient id="roseDustyHeart" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#F4C6D5" />
            <stop offset="55%" stopColor="#D99AAF" />
            <stop offset="100%" stopColor="#A86B80" />
          </radialGradient>

          {/* Lavender Blossom Sprig Gradient */}
          <linearGradient id="lavenderSprigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAE2F6" />
            <stop offset="50%" stopColor="#D8C9EF" />
            <stop offset="100%" stopColor="#9B82C2" />
          </linearGradient>

          {/* Champagne Gold Botanical Leaf Gradient */}
          <linearGradient id="champagneLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E8C7" />
            <stop offset="60%" stopColor="#C6A46A" />
            <stop offset="100%" stopColor="#9A7730" />
          </linearGradient>
        </defs>

        {/* 1. Outer Corner Champagne Gold L-Frame */}
        <path
          d="M6 94 V 22 C 6 13 13 6 22 6 H 94"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Inner Secondary Fine Dashed Line */}
        <path
          d="M14 94 V 26 C 14 19 19 14 26 14 H 94"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="0.75"
          strokeDasharray="3 3"
          opacity="0.8"
        />

        {/* 2. Champagne Gold Botanical Vines trailing along borders */}
        {/* Vine along top border */}
        <path
          d="M 28 9 Q 45 4 62 10 Q 75 14 88 8"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* Vine along left border */}
        <path
          d="M 9 28 Q 4 45 10 62 Q 14 75 8 88"
          stroke="url(#islamicGoldCornerGrad)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* 3. Delicate Botanical Leaves in Champagne Gold & Soft Tint */}
        {/* Leaf on top border */}
        <path
          d="M 48 7 C 52 4, 58 5, 60 9 C 56 10, 50 10, 48 7 Z"
          fill="url(#champagneLeafGrad)"
          opacity="0.8"
        />
        <path
          d="M 72 10 C 76 7, 81 9, 83 13 C 78 13, 74 12, 72 10 Z"
          fill="url(#champagneLeafGrad)"
          opacity="0.75"
        />
        {/* Leaf on left border */}
        <path
          d="M 7 48 C 4 52, 5 58, 9 60 C 10 56, 10 50, 7 48 Z"
          fill="url(#champagneLeafGrad)"
          opacity="0.8"
        />
        <path
          d="M 10 72 C 7 76, 9 81, 13 83 C 13 78, 12 74, 10 72 Z"
          fill="url(#champagneLeafGrad)"
          opacity="0.75"
        />

        {/* 4. Lavender Blossom Sprigs (Top Branch) */}
        <g id="topLavenderSprig">
          {/* Stem */}
          <path d="M 40 12 Q 55 11 68 12" stroke="#C6A46A" strokeWidth="0.6" fill="none" opacity="0.7" />
          {/* Lavender florets */}
          <ellipse cx="44" cy="9" rx="2.5" ry="4" transform="rotate(25 44 9)" fill="url(#lavenderSprigGrad)" opacity="0.9" />
          <ellipse cx="48" cy="14" rx="2.2" ry="3.8" transform="rotate(-20 48 14)" fill="url(#lavenderSprigGrad)" opacity="0.85" />
          <ellipse cx="53" cy="8.5" rx="2.4" ry="4" transform="rotate(20 53 8.5)" fill="url(#lavenderSprigGrad)" opacity="0.9" />
          <ellipse cx="58" cy="13.5" rx="2" ry="3.5" transform="rotate(-15 58 13.5)" fill="url(#lavenderSprigGrad)" opacity="0.85" />
          <ellipse cx="64" cy="9.5" rx="2.2" ry="3.6" transform="rotate(25 64 9.5)" fill="url(#lavenderSprigGrad)" opacity="0.9" />
          <ellipse cx="70" cy="11" rx="1.8" ry="3" transform="rotate(10 70 11)" fill="url(#lavenderSprigGrad)" opacity="0.8" />
        </g>

        {/* Lavender Blossom Sprigs (Left Branch) */}
        <g id="leftLavenderSprig">
          {/* Stem */}
          <path d="M 12 40 Q 11 55 12 68" stroke="#C6A46A" strokeWidth="0.6" fill="none" opacity="0.7" />
          {/* Lavender florets */}
          <ellipse cx="9" cy="44" rx="4" ry="2.5" transform="rotate(25 9 44)" fill="url(#lavenderSprigGrad)" opacity="0.9" />
          <ellipse cx="14" cy="48" rx="3.8" ry="2.2" transform="rotate(-20 14 48)" fill="url(#lavenderSprigGrad)" opacity="0.85" />
          <ellipse cx="8.5" cy="53" rx="4" ry="2.4" transform="rotate(20 8.5 53)" fill="url(#lavenderSprigGrad)" opacity="0.9" />
          <ellipse cx="13.5" cy="58" rx="3.5" ry="2" transform="rotate(-15 13.5 58)" fill="url(#lavenderSprigGrad)" opacity="0.85" />
          <ellipse cx="9.5" cy="64" rx="3.6" ry="2.2" transform="rotate(25 9.5 64)" fill="url(#lavenderSprigGrad)" opacity="0.9" />
          <ellipse cx="11" cy="70" rx="3" ry="1.8" transform="rotate(10 11 70)" fill="url(#lavenderSprigGrad)" opacity="0.8" />
        </g>

        {/* 5. Soft Lilac Accent Flower (Top-Right of Cluster) */}
        <g transform="translate(42, 25) scale(0.75)" opacity="0.95">
          <circle cx="-3" cy="-3" r="2.8" fill="#EAE2F6" />
          <circle cx="3" cy="-3" r="2.8" fill="#EAE2F6" />
          <circle cx="4" cy="2" r="2.8" fill="#D8C9EF" />
          <circle cx="-1" cy="4" r="2.8" fill="#D8C9EF" />
          <circle cx="-4" cy="1" r="2.8" fill="#EAE2F6" />
          <circle cx="0" cy="0" r="1.3" fill="#C6A46A" />
        </g>

        {/* Soft Lilac Accent Flower (Bottom-Left of Cluster) */}
        <g transform="translate(25, 42) scale(0.75)" opacity="0.95">
          <circle cx="-3" cy="-3" r="2.8" fill="#EAE2F6" />
          <circle cx="3" cy="-3" r="2.8" fill="#EAE2F6" />
          <circle cx="4" cy="2" r="2.8" fill="#D8C9EF" />
          <circle cx="-1" cy="4" r="2.8" fill="#D8C9EF" />
          <circle cx="-4" cy="1" r="2.8" fill="#EAE2F6" />
          <circle cx="0" cy="0" r="1.3" fill="#C6A46A" />
        </g>

        {/* 6. Centered Watercolor English Garden Rose (Blush Pink & Dusty Rose) */}
        <g transform="translate(28, 28)">
          {/* Rose Outer Calyx Leaves */}
          <path d="M -10 -2 C -14 -6, -11 -12, -7 -10 C -5 -8, -6 -4, -10 -2 Z" fill="url(#champagneLeafGrad)" opacity="0.65" />
          <path d="M -2 -10 C -6 -14, -12 -11, -10 -7 C -8 -5, -4 -6, -2 -10 Z" fill="url(#champagneLeafGrad)" opacity="0.65" />
          <path d="M 8 -8 C 12 -12, 13 -6, 9 -4 C 7 -4, 6 -6, 8 -8 Z" fill="url(#champagneLeafGrad)" opacity="0.55" />
          <path d="M -8 8 C -12 12, -6 13, -4 9 C -4 7, -6 6, -8 8 Z" fill="url(#champagneLeafGrad)" opacity="0.55" />

          {/* Outer Layer: Blush Pink Broad Petals */}
          <path
            d="M -11 -3 C -13 -9, -7 -13, 0 -12 C 7 -13, 13 -8, 12 -2 C 14 6, 8 13, 0 13 C -8 13, -13 6, -11 -3 Z"
            fill="url(#roseBlushPetal)"
            opacity="0.92"
          />
          <path
            d="M -9 4 C -12 9, -5 13, 1 12 C 7 13, 12 7, 10 1 C 12 -6, 5 -11, -2 -10 C -8 -11, -11 -4, -9 4 Z"
            fill="url(#roseBlushPetal)"
            opacity="0.88"
          />

          {/* Mid Layer: Dusty Rose Curved Petal Folds */}
          <path
            d="M -7 -4 C -8 -8, -3 -10, 2 -9 C 7 -9, 9 -5, 8 0 C 9 5, 5 8, 0 8 C -5 8, -8 4, -7 -4 Z"
            fill="url(#roseDustyHeart)"
            opacity="0.85"
          />
          <path
            d="M -5 2 C -7 5, -2 8, 3 7 C 7 7, 7 3, 5 -1 C 6 -4, 2 -7, -2 -6 C -6 -6, -7 -2, -5 2 Z"
            fill="url(#roseDustyHeart)"
            opacity="0.9"
          />

          {/* Inner Layer: Rose Heart Folds */}
          <path
            d="M -3 -2 C -4 -5, 0 -6, 3 -4 C 5 -3, 5 1, 3 3 C 0 5, -3 3, -3 -2 Z"
            fill="#B87389"
            opacity="0.95"
          />
          <path
            d="M -1 -1 C -2 -3, 1 -4, 2 -2 C 3 -1, 2 2, 0 2 C -1 1, -2 0, -1 -1 Z"
            fill="#8A485E"
          />
        </g>

        {/* 7. Rub el Hizb (8-Pointed Star) nestled gracefully at the apex */}
        <g transform="translate(18, 18) scale(0.85)">
          <rect x="-5" y="-5" width="10" height="10" fill="url(#islamicGoldCornerGrad)" opacity="0.9" rx="0.5" />
          <rect x="-5" y="-5" width="10" height="10" fill="url(#islamicGoldCornerGrad)" opacity="0.9" rx="0.5" transform="rotate(45)" />
          <circle cx="0" cy="0" r="1.8" fill="#FFFDF8" />
        </g>

        {/* Delicate Arabesque Arch Flourishes */}
        <path
          d="M 6 42 Q 22 42 32 32 Q 42 22 42 6"
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

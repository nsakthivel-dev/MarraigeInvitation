import React, { useState } from 'react';

/**
 * WeddingScarf: Authentic Traditional Wedding Ceremonial Fabric Connection (Gathbandhan)
 * 
 * Features:
 * - Left side: Deep emerald-green silk sherwani fabric with intricate antique-gold zari embroidery
 * - Right side: Warm ivory/champagne silk bridal dupatta with fine gold embroidery and borders
 * - Shape: Natural, hanging deep U-curve draping down from the upper inner corners toward the center
 * - Center: Traditional wedding knot with natural draped folds and two silk fabric tails hanging downward
 * - High-definition transparent WebP asset with PNG fallback, optimized for high-DPI retina screens
 * - Graceful SVG fallback with matching U-shape drape in case of asset loading failure
 */
export const WeddingScarf = ({ className = '', idPrefix = 'wedding-knot' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {!imgError ? (
        <picture className="w-full flex items-center justify-center">
          <source srcSet="/wedding-knot.webp" type="image/webp" />
          <img
            src="/wedding-knot.png"
            alt="Traditional ceremonial wedding knot connecting groom and bride"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(2,43,32,0.22)]"
            loading="eager"
            decoding="async"
            onError={() => setImgError(true)}
          />
        </picture>
      ) : (
        /* Fallback Layered Vector Art (Deep U-Drape: Emerald Sherwani + Ivory Dupatta Wedding Knot) */
        <svg
          viewBox="0 0 280 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible drop-shadow-md"
        >
          <defs>
            <linearGradient id={`${idPrefix}-green`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#032D21" />
              <stop offset="30%" stopColor="#065842" />
              <stop offset="70%" stopColor="#0A7A5C" />
              <stop offset="100%" stopColor="#043D2D" />
            </linearGradient>

            <linearGradient id={`${idPrefix}-ivory`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D9C7A1" />
              <stop offset="30%" stopColor="#FAF4E4" />
              <stop offset="70%" stopColor="#F5ECE0" />
              <stop offset="100%" stopColor="#D9C7A1" />
            </linearGradient>

            <linearGradient id={`${idPrefix}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A88339" />
              <stop offset="50%" stopColor="#FFF4D4" />
              <stop offset="100%" stopColor="#A88339" />
            </linearGradient>
          </defs>

          {/* Left: Emerald Sherwani Deep U-Drape */}
          <path
            d="M 10 12 C 45 42, 90 70, 134 76 C 126 92, 108 116, 116 135 C 124 116, 134 96, 138 82 C 96 74, 52 48, 14 30 Z"
            fill={`url(#${idPrefix}-green)`}
          />
          {/* Green Gold Borders */}
          <path
            d="M 10 12 C 45 42, 90 70, 134 76"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />
          <path
            d="M 14 30 C 52 48, 96 74, 138 82"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />

          {/* Right: Ivory Dupatta Deep U-Drape */}
          <path
            d="M 270 12 C 235 42, 190 70, 146 76 C 154 92, 172 116, 164 135 C 156 116, 146 96, 142 82 C 184 74, 228 48, 266 30 Z"
            fill={`url(#${idPrefix}-ivory)`}
          />
          {/* Ivory Gold Borders */}
          <path
            d="M 270 12 C 235 42, 190 70, 146 76"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />
          <path
            d="M 266 30 C 228 48, 184 74, 142 82"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />

          {/* Center Tied Knot */}
          <ellipse
            cx="140"
            cy="76"
            rx="13"
            ry="10"
            fill={`url(#${idPrefix}-ivory)`}
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="1.5"
          />
          <path
            d="M 131 70 C 136 75, 140 81, 145 83"
            stroke="#065842"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="140" cy="76" r="2.8" fill={`url(#${idPrefix}-gold)`} />
        </svg>
      )}
    </div>
  );
};

export default WeddingScarf;

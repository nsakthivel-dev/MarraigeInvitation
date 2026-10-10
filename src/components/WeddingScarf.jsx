import React, { useState } from 'react';

/**
 * WeddingScarf: Authentic Traditional Wedding Ceremonial Fabric Connection (Gathbandhan)
 * 
 * Features:
 * - Left side: Deep emerald-green silk sherwani fabric with intricate antique-gold zari embroidery
 * - Right side: Warm ivory/champagne silk bridal dupatta with fine gold embroidery and borders
 * - Center: Traditional wedding knot with natural draped folds and two silk fabric tails hanging downward
 * - High-definition transparent WebP asset with PNG fallback, optimized for high-DPI retina screens
 * - Graceful SVG fallback in case of asset loading failure
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
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(2,43,32,0.25)]"
            loading="eager"
            decoding="async"
            onError={() => setImgError(true)}
          />
        </picture>
      ) : (
        /* Fallback Layered Vector Art (Emerald Sherwani + Ivory Dupatta Wedding Knot) */
        <svg
          viewBox="0 0 280 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible drop-shadow-md"
        >
          <defs>
            <linearGradient id={`${idPrefix}-green`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#032D21" />
              <stop offset="40%" stopColor="#065842" />
              <stop offset="80%" stopColor="#0A7A5C" />
              <stop offset="100%" stopColor="#043D2D" />
            </linearGradient>

            <linearGradient id={`${idPrefix}-ivory`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D9C7A1" />
              <stop offset="30%" stopColor="#FAF4E4" />
              <stop offset="60%" stopColor="#F5ECE0" />
              <stop offset="100%" stopColor="#D9C7A1" />
            </linearGradient>

            <linearGradient id={`${idPrefix}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A88339" />
              <stop offset="50%" stopColor="#FFF4D4" />
              <stop offset="100%" stopColor="#A88339" />
            </linearGradient>
          </defs>

          {/* Left: Emerald Sherwani Drape */}
          <path
            d="M 10 24 C 55 35, 95 48, 134 52 C 128 66, 105 84, 114 100 C 122 84, 134 68, 138 58 C 96 52, 54 38, 14 42 Z"
            fill={`url(#${idPrefix}-green)`}
          />
          {/* Green Gold Border */}
          <path
            d="M 10 24 C 55 35, 95 48, 134 52"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />
          <path
            d="M 14 42 C 54 38, 96 52, 138 58"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />

          {/* Right: Ivory Dupatta Drape */}
          <path
            d="M 270 24 C 225 35, 185 48, 146 52 C 152 66, 175 84, 166 100 C 158 84, 146 68, 142 58 C 184 52, 226 38, 266 42 Z"
            fill={`url(#${idPrefix}-ivory)`}
          />
          {/* Ivory Gold Border */}
          <path
            d="M 270 24 C 225 35, 185 48, 146 52"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />
          <path
            d="M 266 42 C 226 38, 184 52, 142 58"
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="2.2"
          />

          {/* Center Tied Knot */}
          <ellipse
            cx="140"
            cy="52"
            rx="12"
            ry="9"
            fill={`url(#${idPrefix}-ivory)`}
            stroke={`url(#${idPrefix}-gold)`}
            strokeWidth="1.2"
          />
          <path
            d="M 132 46 C 136 50, 140 56, 144 58"
            stroke="#065842"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="140" cy="52" r="2.5" fill={`url(#${idPrefix}-gold)`} />
        </svg>
      )}
    </div>
  );
};

export default WeddingScarf;

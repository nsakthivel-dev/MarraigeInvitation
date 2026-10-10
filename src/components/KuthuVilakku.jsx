import React from 'react';

/**
 * Traditional South Indian Kuthu Vilakku (Brass Diya Lamp)
 * Features an ornate brass tiered structure and animated flickering flame.
 */
export const KuthuVilakku = ({ height = 120, className = '' }) => {
  return (
    <div 
      className={`inline-block select-none pointer-events-none drop-shadow-md ${className}`} 
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 60 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          {/* Antique Gold Metallic Gradient */}
          <linearGradient id="brassGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8C6D3B" />
            <stop offset="25%" stop-color="#DFC794" />
            <stop offset="50%" stop-color="#FFF3B0" />
            <stop offset="75%" stop-color="#B08D57" />
            <stop offset="100%" stop-color="#73522C" />
          </linearGradient>

          {/* Diya Oil Well Shading */}
          <radialGradient id="oilPool" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#5E381E" />
            <stop offset="100%" stop-color="#8C6D3B" />
          </radialGradient>
        </defs>

        {/* 1. Auspicious Animated Flame */}
        <g className="animate-flame origin-bottom">
          {/* Flame outer aura */}
          <ellipse cx="30" cy="24" rx="8" ry="14" fill="#FFB703" opacity="0.35" filter="blur(2px)" />
          {/* Main golden flame */}
          <path
            d="M 30 10 Q 36 20 33 28 Q 30 32 27 28 Q 24 20 30 10 Z"
            fill="#FFAA00"
          />
          {/* Hot core flame */}
          <path
            d="M 30 15 Q 33 22 32 26 Q 30 28 28 26 Q 27 22 30 15 Z"
            fill="#FFF8DC"
          />
        </g>

        {/* 2. Top Finial / Kalasam Crown */}
        <path d="M 28 28 L 32 28 L 31 32 L 29 32 Z" fill="url(#brassGoldGrad)" />
        <ellipse cx="30" cy="33" rx="3.5" ry="1.5" fill="url(#brassGoldGrad)" />

        {/* 3. Top Diya Bowl (Plate for Wicks) */}
        <path
          d="M 12 36 C 12 45, 48 45, 48 36 C 44 34, 16 34, 12 36 Z"
          fill="url(#brassGoldGrad)"
          stroke="#73522C"
          strokeWidth="0.5"
        />
        <ellipse cx="30" cy="35.5" rx="17" ry="2.5" fill="url(#oilPool)" />
        <circle cx="30" cy="35.5" r="1.5" fill="#FFF8DC" />

        {/* 4. Tier 1 Collar */}
        <rect x="27" y="44" width="6" height="5" rx="1" fill="url(#brassGoldGrad)" />
        <ellipse cx="30" cy="50" rx="9" ry="2" fill="url(#brassGoldGrad)" />

        {/* 5. Central Turned Pillar / Column with classical mouldings */}
        <path
          d="M 28 52 C 28 65, 25 72, 28 85 C 26 95, 27 105, 28 115 L 32 115 C 33 105, 34 95, 32 85 C 35 72, 32 65, 32 52 Z"
          fill="url(#brassGoldGrad)"
        />
        {/* Ring Knobs on pillar */}
        <ellipse cx="30" cy="65" rx="6" ry="1.5" fill="url(#brassGoldGrad)" />
        <ellipse cx="30" cy="85" rx="7" ry="2" fill="url(#brassGoldGrad)" />
        <ellipse cx="30" cy="102" rx="6" ry="1.5" fill="url(#brassGoldGrad)" />

        {/* 6. Lower Bowl Accent */}
        <path
          d="M 18 116 C 18 123, 42 123, 42 116 Z"
          fill="url(#brassGoldGrad)"
        />
        <ellipse cx="30" cy="116" rx="12" ry="2" fill="url(#brassGoldGrad)" />

        {/* 7. Heavy Stepped Pedestal Base (Peedam) */}
        <rect x="26" y="123" width="8" height="6" fill="url(#brassGoldGrad)" />
        <ellipse cx="30" cy="130" rx="16" ry="3" fill="url(#brassGoldGrad)" />
        <path
          d="M 12 131 L 48 131 L 52 144 L 8 144 Z"
          fill="url(#brassGoldGrad)"
          stroke="#73522C"
          strokeWidth="0.5"
        />
        {/* Ornate base scalloped foot */}
        <rect x="6" y="144" width="48" height="5" rx="1.5" fill="url(#brassGoldGrad)" />
      </svg>
    </div>
  );
};

export default KuthuVilakku;

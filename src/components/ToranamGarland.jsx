import React from 'react';

/**
 * Auspicious South Indian Toranam (Maavilai / Mango Leaves Garland)
 * Hung at wedding thresholds to bring divine blessings and ward off negative energies.
 */
export const ToranamGarland = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 md:h-12 text-[#263D30] preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Mango Leaf Shape Definition */}
          <g id="mangoLeaf">
            <path
              d="M 0 0 C 6 14, 8 28, 0 38 C -8 28, -6 14, 0 0 Z"
              fill="#263D30"
              stroke="#B08D57"
              strokeWidth="0.8"
            />
            {/* Leaf Vein */}
            <path d="M 0 4 L 0 32" stroke="#466652" strokeWidth="0.75" />
          </g>

          {/* Marigold / Golden Blossom */}
          <g id="marigoldFlower">
            <circle cx="0" cy="0" r="5" fill="#E67E22" />
            <circle cx="0" cy="0" r="3" fill="#F1C40F" />
            <circle cx="0" cy="0" r="1.5" fill="#D35400" />
          </g>
        </defs>

        {/* Golden Hanging String */}
        <path
          d="M 0 8 Q 150 16 300 8 Q 450 16 600 8 Q 750 16 900 8 Q 1050 16 1200 8"
          stroke="#B08D57"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Repeated Mango Leaves along string */}
        {[
          50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600,
          650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150
        ].map((x, idx) => {
          // slight variation for natural organic feel
          const y = 8 + (Math.sin(idx) * 4);
          const rot = (idx % 2 === 0 ? 3 : -3);
          return (
            <g key={x} transform={`translate(${x}, ${y})`}>
              <use href="#mangoLeaf" transform={`rotate(${rot})`} />
              {/* Golden Marigold Accent between leaves */}
              {idx % 2 === 0 && <use href="#marigoldFlower" transform="translate(0, 2)" />}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ToranamGarland;

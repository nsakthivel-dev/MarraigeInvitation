import React from 'react';

/**
 * DecorativeDivider: Antique Gold Islamic Ornamental Divider
 * 
 * Features:
 * - Center Rub el Hizb (8-pointed star) or Crescent-and-Star medallion
 * - Symmetrical tapered gold lines with champagne diamond nodes
 */
export const DecorativeDivider = ({ className = '', icon = 'star' }) => {
  return (
    <div className={`flex items-center justify-center my-6 md:my-8 select-none pointer-events-none ${className}`} aria-hidden="true">
      {/* Left Ornamental Line */}
      <div className="flex items-center flex-1 max-w-[60px] min-[360px]:max-w-[100px] sm:max-w-[140px] md:max-w-[180px]">
        <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A15B]/70" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A15B]/10 via-[#C6A15B]/60 to-[#C6A15B]" />
        <div className="w-2 h-2 rotate-45 border border-[#C6A15B] ml-1 bg-[#FAF7EF]" />
      </div>

      {/* Center Islamic Motif */}
      <div className="mx-2.5 sm:mx-4 flex items-center justify-center text-[#C6A15B]">
        {icon === 'crescent' ? (
          <svg viewBox="0 0 28 28" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
            {/* Crescent Moon */}
            <path
              d="M 16 5 C 10 5 5 10 5 16 C 5 21 8 25 13 26 C 9 24 7 20 7 16 C 7 11 11 7 16 5 Z"
              fill="#C6A15B"
            />
            {/* 8-Pointed Star */}
            <g transform="translate(18, 13) scale(0.6)">
              <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" />
              <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" transform="rotate(45)" />
              <circle cx="0" cy="0" r="1.5" fill="#FAF7EF" />
            </g>
          </svg>
        ) : icon === 'lantern' ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current" strokeWidth="1.2">
            <path d="M 8 6 C 8 4, 16 4, 16 6 L 18 10 L 16 16 L 8 16 L 6 10 Z" fill="#C6A15B" fillOpacity="0.2" />
            <circle cx="12" cy="11" r="2" fill="#E5D3A1" />
            <path d="M 12 2 L 12 4 M 10 16 L 14 16 L 12 20 Z" />
          </svg>
        ) : (
          /* Default: Rub el Hizb (8-pointed star medallion) */
          <svg viewBox="0 0 28 28" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
            <g transform="translate(14, 14)">
              <rect x="-7" y="-7" width="14" height="14" fill="#C6A15B" fillOpacity="0.2" stroke="#C6A15B" strokeWidth="1.2" rx="1" />
              <rect x="-7" y="-7" width="14" height="14" fill="#C6A15B" fillOpacity="0.2" stroke="#C6A15B" strokeWidth="1.2" rx="1" transform="rotate(45)" />
              <circle cx="0" cy="0" r="2.8" fill="#C6A15B" />
              <circle cx="0" cy="0" r="1.2" fill="#FAF7EF" />
            </g>
          </svg>
        )}
      </div>

      {/* Right Ornamental Line */}
      <div className="flex items-center flex-1 max-w-[60px] min-[360px]:max-w-[100px] sm:max-w-[140px] md:max-w-[180px]">
        <div className="w-2 h-2 rotate-45 border border-[#C6A15B] mr-1 bg-[#FAF7EF]" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A15B] via-[#C6A15B]/60 to-[#C6A15B]/10" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A15B]/70" />
      </div>
    </div>
  );
};

export default DecorativeDivider;

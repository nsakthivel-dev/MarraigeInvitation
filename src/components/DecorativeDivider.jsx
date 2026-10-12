import React from 'react';

/**
 * DecorativeDivider: Champagne Gold & Botanical Floral Divider
 * 
 * Features:
 * - Center Rub el Hizb (8-pointed star) or Crescent-and-Star medallion in champagne gold (#C6A46A)
 * - Symmetrical tapered gold lines with warm ivory diamond nodes (#FFFDF8)
 * - Delicate botanical blush rose (#F4C6D5) & lavender (#D8C9EF) florets framing the center
 */
export const DecorativeDivider = ({ className = '', icon = 'star' }) => {
  return (
    <div className={`flex items-center justify-center my-6 md:my-8 select-none pointer-events-none ${className}`} aria-hidden="true">
      {/* Left Ornamental Line */}
      <div className="flex items-center flex-1 max-w-[60px] min-[360px]:max-w-[100px] sm:max-w-[140px] md:max-w-[180px]">
        <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A46A]/70" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A46A]/10 via-[#C6A46A]/60 to-[#C6A46A]" />
        <div className="w-2 h-2 rotate-45 border border-[#C6A46A] ml-1 bg-[#F8EEF5]" />
      </div>

      {/* Left Botanical Floret Accent */}
      <div className="hidden min-[360px]:flex items-center -mr-1 text-[#F4C6D5] opacity-85">
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none">
          <ellipse cx="6" cy="8" rx="2.5" ry="4" transform="rotate(-30 6 8)" fill="#F4C6D5" />
          <ellipse cx="10" cy="8" rx="2" ry="3.5" transform="rotate(30 10 8)" fill="#D99AAF" />
          <circle cx="8" cy="8" r="1.2" fill="#C6A46A" />
        </svg>
      </div>

      {/* Center Islamic Motif */}
      <div className="mx-2 sm:mx-3 flex items-center justify-center text-[#C6A46A]">
        {icon === 'crescent' ? (
          <svg viewBox="0 0 28 28" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
            {/* Crescent Moon */}
            <path
              d="M 16 5 C 10 5 5 10 5 16 C 5 21 8 25 13 26 C 9 24 7 20 7 16 C 7 11 11 7 16 5 Z"
              fill="#C6A46A"
            />
            {/* 8-Pointed Star */}
            <g transform="translate(18, 13) scale(0.6)">
              <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
              <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
              <circle cx="0" cy="0" r="1.5" fill="#F8EEF5" />
            </g>
          </svg>
        ) : icon === 'lantern' ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current" strokeWidth="1.2">
            <path d="M 8 6 C 8 4, 16 4, 16 6 L 18 10 L 16 16 L 8 16 L 6 10 Z" fill="#C6A46A" fillOpacity="0.2" />
            <circle cx="12" cy="11" r="2" fill="#E5D3A1" />
            <path d="M 12 2 L 12 4 M 10 16 L 14 16 L 12 20 Z" />
          </svg>
        ) : (
          /* Default: Rub el Hizb (8-pointed star medallion) */
          <svg viewBox="0 0 28 28" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
            <g transform="translate(14, 14)">
              <rect x="-7" y="-7" width="14" height="14" fill="#C6A46A" fillOpacity="0.2" stroke="#C6A46A" strokeWidth="1.2" rx="1" />
              <rect x="-7" y="-7" width="14" height="14" fill="#C6A46A" fillOpacity="0.2" stroke="#C6A46A" strokeWidth="1.2" rx="1" transform="rotate(45)" />
              <circle cx="0" cy="0" r="2.8" fill="#C6A46A" />
              <circle cx="0" cy="0" r="1.2" fill="#F8EEF5" />
            </g>
          </svg>
        )}
      </div>

      {/* Right Botanical Floret Accent */}
      <div className="hidden min-[360px]:flex items-center -ml-1 text-[#D8C9EF] opacity-85">
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none">
          <ellipse cx="6" cy="8" rx="2" ry="3.5" transform="rotate(-30 6 8)" fill="#EAE2F6" />
          <ellipse cx="10" cy="8" rx="2.5" ry="4" transform="rotate(30 10 8)" fill="#D8C9EF" />
          <circle cx="8" cy="8" r="1.2" fill="#C6A46A" />
        </svg>
      </div>

      {/* Right Ornamental Line */}
      <div className="flex items-center flex-1 max-w-[60px] min-[360px]:max-w-[100px] sm:max-w-[140px] md:max-w-[180px]">
        <div className="w-2 h-2 rotate-45 border border-[#C6A46A] mr-1 bg-[#F8EEF5]" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A46A] via-[#C6A46A]/60 to-[#C6A46A]/10" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A46A]/70" />
      </div>
    </div>
  );
};

export default DecorativeDivider;

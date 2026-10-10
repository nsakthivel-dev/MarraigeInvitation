import React from 'react';

/**
 * Traditional Indian Decorative Divider
 * Adds an authentic gold ornamental touch between invitation sections.
 */
export const DecorativeDivider = ({ className = '', icon = 'diya' }) => {
  return (
    <div className={`flex items-center justify-center my-6 md:my-8 select-none pointer-events-none ${className}`} aria-hidden="true">
      {/* Left Ornamental Line */}
      <div className="flex items-center flex-1 max-w-[120px] md:max-w-[180px]">
        <div className="w-1.5 h-1.5 rotate-45 bg-[#B08D57]/70" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#B08D57]/20 via-[#B08D57]/70 to-[#B08D57]" />
        <div className="w-2 h-2 rotate-45 border border-[#B08D57] ml-1 bg-[#FFFDF8]" />
      </div>

      {/* Center Motif */}
      <div className="mx-3 md:mx-4 flex items-center justify-center text-[#B08D57]">
        {icon === 'diya' ? (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5">
            {/* Diya Bowl & Flame */}
            <path d="M4 14C4 18 20 18 20 14H4Z" fill="#B08D57" fillOpacity="0.2" />
            <path d="M12 4C14 7 14.5 9 13.5 10.5C12.5 12 11.5 12 10.5 10.5C9.5 9 10 7 12 4Z" fill="#E67E22" stroke="#B08D57" strokeWidth="1" />
            <path d="M12 7C12.8 8.5 12.8 9.5 12 10C11.2 9.5 11.2 8.5 12 7Z" fill="#FFF3B0" />
            <path d="M8 18L10 20H14L16 18" strokeLinecap="round" />
          </svg>
        ) : icon === 'lotus' ? (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5">
            {/* Sacred Lotus */}
            <path d="M12 5C13 9 15 13 12 18C9 13 11 9 12 5Z" fill="#B08D57" fillOpacity="0.2" />
            <path d="M12 18C15 14 19 12 21 16C17 19 14 18 12 18Z" />
            <path d="M12 18C9 14 5 12 3 16C7 19 10 18 12 18Z" />
          </svg>
        ) : (
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
            <span className="w-2.5 h-2.5 rotate-45 border border-[#B08D57] bg-[#B08D57]/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
          </div>
        )}
      </div>

      {/* Right Ornamental Line */}
      <div className="flex items-center flex-1 max-w-[120px] md:max-w-[180px]">
        <div className="w-2 h-2 rotate-45 border border-[#B08D57] mr-1 bg-[#FFFDF8]" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#B08D57] via-[#B08D57]/70 to-[#B08D57]/20" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#B08D57]/70" />
      </div>
    </div>
  );
};

export default DecorativeDivider;

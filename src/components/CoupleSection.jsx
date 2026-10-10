import React from 'react';
import weddingConfig from '../data/invitation';
import IslamicCorner from './IslamicCorner';
import DecorativeDivider from './DecorativeDivider';

/**
 * Section B: The Couple (Visual Centerpiece)
 * Features Groom and Bride with respectful Islamic family details,
 * framed in double antique-gold Islamic ornamental cards.
 */
export const CoupleSection = () => {
  const { groom, bride, familyGreeting } = weddingConfig;

  return (
    <section 
      id="couple" 
      aria-label="The Couple"
      className="relative px-1 sm:px-4 py-6 sm:py-12 max-w-5xl mx-auto"
    >
      {/* Section Sub-heading */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9A7730] font-semibold font-sans">
          {familyGreeting}
        </span>
        <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#064E3B] mt-1">
          The Bridegroom & The Bride
        </h3>
      </div>

      {/* Couple Cards Grid: Stacks gracefully on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-6 lg:gap-10 items-stretch relative">
        
        {/* ================================================================= */}
        {/* GROOM'S CARD */}
        {/* ================================================================= */}
        <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A15B]/40 shadow-xl flex flex-col justify-between text-center islamic-gold-frame">
          <IslamicCorner position="top-left" size={50} className="top-1 left-1 opacity-75" />
          <IslamicCorner position="bottom-right" size={50} className="bottom-1 right-1 opacity-75" />

          {/* Groom Islamic Medallion (Crescent & 8-pointed star emblem) */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#FAF7EF] border border-[#C6A15B] flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
              <svg viewBox="0 0 36 36" className="w-7 h-7 sm:w-8 sm:h-8 text-[#064E3B]" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2" />
                {/* Crescent Motif */}
                <path
                  d="M 21 8 C 14 8 9 13 9 20 C 9 25 12.5 29 17 29.8 C 13.5 28 11.5 24.5 11.5 20 C 11.5 14.5 15.5 10.5 21 8 Z"
                  fill="#064E3B"
                />
                {/* 8-Pointed Star */}
                <g transform="translate(21, 17) scale(0.65)">
                  <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" />
                  <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" transform="rotate(45)" />
                </g>
              </svg>
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9A7730] font-semibold font-sans mb-1">
              The Bridegroom
            </span>

            {/* Groom Name */}
            <h4 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#064E3B] tracking-tight mb-1">
              {groom.name}
            </h4>

            {groom.qualification && (
              <p className="text-xs sm:text-sm font-sans text-[#425F54] font-medium tracking-wide mb-2 sm:mb-3">
                {groom.qualification}
              </p>
            )}

            <div className="w-14 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-1 sm:my-2" />
          </div>

          {/* Groom's Family Details */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#C6A15B]/20 flex flex-col items-center space-y-1 sm:space-y-1.5">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9A7730] font-serif italic">
              {groom.sonOf}
            </span>
            <p className="text-sm sm:text-lg font-serif font-bold text-[#17352C]">
              {groom.fatherName}
            </p>
            <p className="text-xs font-serif italic text-[#C6A15B]">&</p>
            <p className="text-sm sm:text-lg font-serif font-bold text-[#17352C]">
              {groom.motherName}
            </p>

            {groom.city && (
              <p className="text-[11px] sm:text-xs text-[#425F54] font-sans mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-[#C6A15B]/15">
                Residence: <span className="font-medium text-[#17352C]">{groom.city}</span>
              </p>
            )}
          </div>
        </div>

        {/* Centerpiece "&" Medallion on Desktop */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#064E3B] border-2 border-[#C6A15B] shadow-xl flex items-center justify-center text-[#FAF7EF]">
            <span className="font-serif italic font-bold text-lg tracking-wider text-[#E5D3A1]">
              &
            </span>
          </div>
        </div>

        {/* Mobile Connecting "&" Medallion between stacked cards */}
        <div className="flex md:hidden items-center justify-center -my-1 z-10">
          <div className="w-8 h-8 rounded-full bg-[#064E3B] border border-[#C6A15B] shadow-md flex items-center justify-center text-[#FAF7EF]">
            <span className="font-serif italic font-bold text-sm tracking-wider text-[#E5D3A1]">
              &
            </span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BRIDE'S CARD */}
        {/* ================================================================= */}
        <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A15B]/40 shadow-xl flex flex-col justify-between text-center islamic-gold-frame">
          <IslamicCorner position="top-right" size={50} className="top-1 right-1 opacity-75" />
          <IslamicCorner position="bottom-left" size={50} className="bottom-1 left-1 opacity-75" />

          {/* Bride Islamic Medallion (Eight-pointed star & floral motif) */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#FAF7EF] border border-[#C6A15B] flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
              <svg viewBox="0 0 36 36" className="w-7 h-7 sm:w-8 sm:h-8 text-[#064E3B]" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2" />
                {/* 8-Pointed Star Centerpiece */}
                <g transform="translate(18, 18)">
                  <rect x="-7" y="-7" width="14" height="14" fill="#064E3B" rx="1" />
                  <rect x="-7" y="-7" width="14" height="14" fill="#064E3B" rx="1" transform="rotate(45)" />
                  <circle cx="0" cy="0" r="3" fill="#C6A15B" />
                  <circle cx="0" cy="0" r="1.5" fill="#FAF7EF" />
                </g>
              </svg>
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9A7730] font-semibold font-sans mb-1">
              The Bride
            </span>

            {/* Bride Name */}
            <h4 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#064E3B] tracking-tight mb-1">
              {bride.name}
            </h4>

            {bride.qualification && (
              <p className="text-xs sm:text-sm font-sans text-[#425F54] font-medium tracking-wide mb-2 sm:mb-3">
                {bride.qualification}
              </p>
            )}

            <div className="w-14 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-1 sm:my-2" />
          </div>

          {/* Bride's Family Details */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#C6A15B]/20 flex flex-col items-center space-y-1 sm:space-y-1.5">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9A7730] font-serif italic">
              {bride.daughterOf}
            </span>
            <p className="text-sm sm:text-lg font-serif font-bold text-[#17352C]">
              {bride.fatherName}
            </p>
            <p className="text-xs font-serif italic text-[#C6A15B]">&</p>
            <p className="text-sm sm:text-lg font-serif font-bold text-[#17352C]">
              {bride.motherName}
            </p>

            {bride.city && (
              <p className="text-[11px] sm:text-xs text-[#425F54] font-sans mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-[#C6A15B]/15">
                Residence: <span className="font-medium text-[#17352C]">{bride.city}</span>
              </p>
            )}
          </div>
        </div>

      </div>

      <DecorativeDivider icon="crescent" />
    </section>
  );
};

export default CoupleSection;

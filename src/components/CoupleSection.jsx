import React from 'react';
import weddingConfig from '../data/invitation';
import IslamicCorner from './IslamicCorner';
import DecorativeDivider from './DecorativeDivider';
import WeddingScarf from './WeddingScarf';

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

      {/* ================================================================= */}
      {/* DESKTOP VIEW (Width >= 768px): Strictly Preserved Original Layout */}
      {/* ================================================================= */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-10 items-stretch relative">
        
        {/* GROOM'S CARD */}
        <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A15B]/40 shadow-xl flex flex-col justify-between text-center islamic-gold-frame">
          <IslamicCorner position="top-left" size={50} className="top-1 left-1 opacity-75" />
          <IslamicCorner position="bottom-right" size={50} className="bottom-1 right-1 opacity-75" />

          {/* Groom Islamic Medallion (Crescent & 8-pointed star emblem) */}
          <div className="flex flex-col items-center relative z-20">
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
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#C6A15B]/20 flex flex-col items-center space-y-1 sm:space-y-1.5 relative z-10">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9A7730] font-serif italic">
              {groom.sonOf}
            </span>
            <p className="text-sm sm:lg font-serif font-bold text-[#17352C]">
              {groom.fatherName}
            </p>
            <p className="text-xs font-serif italic text-[#C6A15B]">&</p>
            <p className="text-sm sm:lg font-serif font-bold text-[#17352C]">
              {groom.motherName}
            </p>

            {groom.city && (
              <p className="text-[11px] sm:text-xs text-[#425F54] font-sans mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-[#C6A15B]/15">
                Residence: <span className="font-medium text-[#17352C]">{groom.city}</span>
              </p>
            )}
          </div>
        </div>

        {/* Traditional Wedding Ceremonial Fabric Knot (Connecting Groom & Bride Cards) */}
        {/* Anchored at upper-inner card corners (Groom top-right, Bride top-left) with natural U-drape into center knot */}
        <div className="hidden md:flex absolute left-1/2 -top-1 md:top-0 lg:top-1 -translate-x-1/2 pointer-events-none items-center justify-center w-[250px] md:w-[290px] lg:w-[340px] z-15">
          <WeddingScarf idPrefix="desktop-knot" className="w-full" />
        </div>

        {/* BRIDE'S CARD */}
        <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A15B]/40 shadow-xl flex flex-col justify-between text-center islamic-gold-frame">
          <IslamicCorner position="top-right" size={50} className="top-1 right-1 opacity-75" />
          <IslamicCorner position="bottom-left" size={50} className="bottom-1 left-1 opacity-75" />

          {/* Bride Islamic Medallion (Eight-pointed star & floral motif) */}
          <div className="flex flex-col items-center relative z-20">
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
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#C6A15B]/20 flex flex-col items-center space-y-1 sm:space-y-1.5 relative z-10">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9A7730] font-serif italic">
              {bride.daughterOf}
            </span>
            <p className="text-sm sm:lg font-serif font-bold text-[#17352C]">
              {bride.fatherName}
            </p>
            <p className="text-xs font-serif italic text-[#C6A15B]">&</p>
            <p className="text-sm sm:lg font-serif font-bold text-[#17352C]">
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

      {/* ================================================================= */}
      {/* MOBILE VIEW (Width < 768px): Unified Single Wedding Section       */}
      {/* Both Groom & Bride Visible Together in One Harmonious Card       */}
      {/* ================================================================= */}
      <div className="block md:hidden">
        <div className="relative bg-[#FFFDF9] rounded-2xl p-2.5 min-[360px]:p-3 min-[390px]:p-3.5 sm:p-5 border border-[#C6A15B]/40 shadow-xl islamic-gold-frame overflow-hidden">
          {/* Delicate Geometric Corner Accents */}
          <IslamicCorner position="top-left" size={36} className="top-1 left-1 opacity-60" />
          <IslamicCorner position="top-right" size={36} className="top-1 right-1 opacity-60" />
          <IslamicCorner position="bottom-left" size={36} className="bottom-1 left-1 opacity-60" />
          <IslamicCorner position="bottom-right" size={36} className="bottom-1 right-1 opacity-60" />

          {/* ------------------------------------------------------------- */}
          {/* 1. Standard Mobile (>= 360px): Two Equal-Width Cards Side-by-Side */}
          {/* ------------------------------------------------------------- */}
          <div className="hidden min-[360px]:grid grid-cols-2 gap-2 min-[390px]:gap-2.5 sm:gap-4 items-stretch relative">
            
            {/* GROOM (Left Column) */}
            <div className="min-w-0 flex flex-col justify-between text-center bg-[#FAF7EF]/60 rounded-xl p-2 min-[390px]:p-2.5 sm:p-3 border border-[#C6A15B]/30 relative shadow-xs">
              <div className="flex flex-col items-center relative z-20">
                {/* Groom's Emblem */}
                <div className="w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 rounded-full bg-[#FFFDF9] border border-[#C6A15B]/70 flex items-center justify-center mb-1.5 shadow-xs">
                  <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 min-[390px]:w-5 min-[390px]:h-5 text-[#064E3B]" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2" />
                    <path
                      d="M 21 8 C 14 8 9 13 9 20 C 9 25 12.5 29 17 29.8 C 13.5 28 11.5 24.5 11.5 20 C 11.5 14.5 15.5 10.5 21 8 Z"
                      fill="#064E3B"
                    />
                    <g transform="translate(21, 17) scale(0.65)">
                      <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" />
                      <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" transform="rotate(45)" />
                    </g>
                  </svg>
                </div>

                <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider text-[#9A7730] font-semibold font-sans mb-0.5">
                  The Groom
                </span>

                <h4 className="text-[13px] min-[375px]:text-sm min-[390px]:text-base font-serif font-bold text-[#064E3B] tracking-tight leading-tight break-words mb-0.5">
                  {groom.name}
                </h4>

                {groom.qualification && (
                  <p className="text-[9px] min-[375px]:text-[10px] min-[390px]:text-[11px] font-sans text-[#425F54] font-medium leading-snug break-words mb-1">
                    {groom.qualification}
                  </p>
                )}

                <div className="w-8 min-[390px]:w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-transparent my-1" />
              </div>

              {/* Groom's Parentage */}
              <div className="mt-2.5 pt-2 border-t border-[#C6A15B]/20 flex flex-col items-center relative z-10">
                <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider text-[#9A7730] font-serif italic mb-0.5">
                  {groom.sonOf}
                </span>
                <p className="text-[11px] min-[375px]:text-xs min-[390px]:text-[13px] font-serif font-bold text-[#17352C] leading-snug break-words">
                  {groom.fatherName}
                </p>
                <p className="text-[9px] min-[390px]:text-[10px] font-serif italic text-[#C6A15B] my-0.5">
                  &
                </p>
                <p className="text-[11px] min-[375px]:text-xs min-[390px]:text-[13px] font-serif font-bold text-[#17352C] leading-snug break-words">
                  {groom.motherName}
                </p>
              </div>
            </div>

            {/* Connecting Traditional Ceremonial Wedding Fabric Knot (Anchored at Upper-Inner Corners) */}
            <div className="absolute left-1/2 -top-0.5 min-[390px]:top-0 sm:top-0.5 -translate-x-1/2 z-15 pointer-events-none flex items-center justify-center w-[125px] min-[375px]:w-[136px] min-[390px]:w-[148px] min-[414px]:w-[158px] sm:w-[176px]">
              <WeddingScarf idPrefix="mobile-knot" className="w-full" />
            </div>

            {/* BRIDE (Right Column) */}
            <div className="min-w-0 flex flex-col justify-between text-center bg-[#FAF7EF]/60 rounded-xl p-2 min-[390px]:p-2.5 sm:p-3 border border-[#C6A15B]/30 relative shadow-xs">
              <div className="flex flex-col items-center relative z-20">
                {/* Bride's Emblem */}
                <div className="w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 rounded-full bg-[#FFFDF9] border border-[#C6A15B]/70 flex items-center justify-center mb-1.5 shadow-xs">
                  <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 min-[390px]:w-5 min-[390px]:h-5 text-[#064E3B]" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2" />
                    <g transform="translate(18, 18)">
                      <rect x="-7" y="-7" width="14" height="14" fill="#064E3B" rx="1" />
                      <rect x="-7" y="-7" width="14" height="14" fill="#064E3B" rx="1" transform="rotate(45)" />
                      <circle cx="0" cy="0" r="3" fill="#C6A15B" />
                      <circle cx="0" cy="0" r="1.5" fill="#FAF7EF" />
                    </g>
                  </svg>
                </div>

                <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider text-[#9A7730] font-semibold font-sans mb-0.5">
                  The Bride
                </span>

                <h4 className="text-[13px] min-[375px]:text-sm min-[390px]:text-base font-serif font-bold text-[#064E3B] tracking-tight leading-tight break-words mb-0.5">
                  {bride.name}
                </h4>

                {bride.qualification && (
                  <p className="text-[9px] min-[375px]:text-[10px] min-[390px]:text-[11px] font-sans text-[#425F54] font-medium leading-snug break-words mb-1">
                    {bride.qualification}
                  </p>
                )}

                <div className="w-8 min-[390px]:w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-transparent my-1" />
              </div>

              {/* Bride's Parentage */}
              <div className="mt-2.5 pt-2 border-t border-[#C6A15B]/20 flex flex-col items-center relative z-10">
                <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider text-[#9A7730] font-serif italic mb-0.5">
                  {bride.daughterOf}
                </span>
                <p className="text-[11px] min-[375px]:text-xs min-[390px]:text-[13px] font-serif font-bold text-[#17352C] leading-snug break-words">
                  {bride.fatherName}
                </p>
                <p className="text-[9px] min-[390px]:text-[10px] font-serif italic text-[#C6A15B] my-0.5">
                  &
                </p>
                <p className="text-[11px] min-[375px]:text-xs min-[390px]:text-[13px] font-serif font-bold text-[#17352C] leading-snug break-words">
                  {bride.motherName}
                </p>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* 2. Narrow Mobile (< 360px): Single Integrated Stack Card     */}
          {/* Prioritizes crystal-clear typography on 320px screens         */}
          {/* ------------------------------------------------------------- */}
          <div className="block min-[360px]:hidden space-y-2.5">
            {/* Groom Section (Upper Half) */}
            <div className="bg-[#FAF7EF]/60 rounded-xl p-2.5 border border-[#C6A15B]/30 text-center">
              <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#C6A15B]/70 flex items-center justify-center mx-auto mb-1 shadow-xs">
                <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 text-[#064E3B]" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2" />
                  <path
                    d="M 21 8 C 14 8 9 13 9 20 C 9 25 12.5 29 17 29.8 C 13.5 28 11.5 24.5 11.5 20 C 11.5 14.5 15.5 10.5 21 8 Z"
                    fill="#064E3B"
                  />
                  <g transform="translate(21, 17) scale(0.65)">
                    <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" />
                    <rect x="-4" y="-4" width="8" height="8" fill="#C6A15B" rx="0.5" transform="rotate(45)" />
                  </g>
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#9A7730] font-semibold font-sans block mb-0.5">
                The Groom
              </span>
              <h4 className="text-sm font-serif font-bold text-[#064E3B] tracking-tight leading-tight break-words mb-0.5">
                {groom.name}
              </h4>
              {groom.qualification && (
                <p className="text-[10px] font-sans text-[#425F54] font-medium leading-snug break-words mb-1">
                  {groom.qualification}
                </p>
              )}
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-transparent mx-auto my-1" />
              <span className="text-[9px] uppercase tracking-wider text-[#9A7730] font-serif italic block mt-1">
                {groom.sonOf}
              </span>
              <p className="text-xs font-serif font-bold text-[#17352C] leading-snug break-words">
                {groom.fatherName}
              </p>
              <p className="text-[9px] font-serif italic text-[#C6A15B] my-0.5">&</p>
              <p className="text-xs font-serif font-bold text-[#17352C] leading-snug break-words">
                {groom.motherName}
              </p>
            </div>

            {/* Traditional Ceremonial Wedding Knot (Narrow Mobile) */}
            <div className="flex items-center justify-center my-2 pointer-events-none">
              <div className="w-[140px] max-w-[160px]">
                <WeddingScarf idPrefix="narrow-knot" className="w-full" />
              </div>
            </div>

            {/* Bride Section (Lower Half) */}
            <div className="bg-[#FAF7EF]/60 rounded-xl p-2.5 border border-[#C6A15B]/30 text-center">
              <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#C6A15B]/70 flex items-center justify-center mx-auto mb-1 shadow-xs">
                <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 text-[#064E3B]" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2" />
                  <g transform="translate(18, 18)">
                    <rect x="-7" y="-7" width="14" height="14" fill="#064E3B" rx="1" />
                    <rect x="-7" y="-7" width="14" height="14" fill="#064E3B" rx="1" transform="rotate(45)" />
                    <circle cx="0" cy="0" r="3" fill="#C6A15B" />
                    <circle cx="0" cy="0" r="1.5" fill="#FAF7EF" />
                  </g>
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#9A7730] font-semibold font-sans block mb-0.5">
                The Bride
              </span>
              <h4 className="text-sm font-serif font-bold text-[#064E3B] tracking-tight leading-tight break-words mb-0.5">
                {bride.name}
              </h4>
              {bride.qualification && (
                <p className="text-[10px] font-sans text-[#425F54] font-medium leading-snug break-words mb-1">
                  {bride.qualification}
                </p>
              )}
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-transparent mx-auto my-1" />
              <span className="text-[9px] uppercase tracking-wider text-[#9A7730] font-serif italic block mt-1">
                {bride.daughterOf}
              </span>
              <p className="text-xs font-serif font-bold text-[#17352C] leading-snug break-words">
                {bride.fatherName}
              </p>
              <p className="text-[9px] font-serif italic text-[#C6A15B] my-0.5">&</p>
              <p className="text-xs font-serif font-bold text-[#17352C] leading-snug break-words">
                {bride.motherName}
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Shared Residence & Location Footer (Beneath Both Cards)       */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#C6A15B]/25 text-center">
            <p className="text-[10px] min-[375px]:text-[11px] sm:text-xs text-[#425F54] font-sans">
              Residence: <span className="font-semibold text-[#17352C]">
                {groom.city && bride.city && groom.city === bride.city 
                  ? groom.city 
                  : [groom.city, bride.city].filter(Boolean).join(' • ')}
              </span>
            </p>
          </div>

        </div>
      </div>

      <DecorativeDivider icon="crescent" />
    </section>
  );
};

export default CoupleSection;

import React from 'react';
import weddingConfig from '../data/invitation';
import IslamicCorner from './IslamicCorner';
import DecorativeDivider from './DecorativeDivider';
import WeddingScarf from './WeddingScarf';

/**
 * Section B: The Couple (Visual Centerpiece)
 * Features Groom and Bride in framed double champagne-gold Islamic ornamental cards.
 * Strictly preserves the finalized responsive layout and central wedding cloth knot.
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
        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C6A46A] font-semibold font-sans">
          {familyGreeting}
        </span>
        <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#5C405C] mt-1">
          The Bridegroom &amp; The Bride
        </h3>
      </div>

      {/* ================================================================= */}
      {/* DESKTOP VIEW (Width >= 768px): Strictly Preserved Original Layout */}
      {/* ================================================================= */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-20 lg:gap-x-28 items-stretch relative">
        
        {/* GROOM'S CARD */}
        <div className="relative bg-[#F8EEF5] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A46A]/40 shadow-xl flex flex-col justify-center text-center islamic-gold-frame">
          <IslamicCorner position="top-left" size={50} className="top-1 left-1 opacity-75" />
          <IslamicCorner position="bottom-right" size={50} className="bottom-1 right-1 opacity-75" />

          {/* Groom Islamic Medallion */}
          <div className="flex flex-col items-center relative z-20">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#F8EEF5] to-[#EAE2F6] border border-[#C6A46A] flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
              <svg viewBox="0 0 36 36" className="w-7 h-7 sm:w-8 sm:h-8 text-[#5C405C]" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#C6A46A" strokeWidth="1" strokeDasharray="2 2" />
                <path
                  d="M 21 8 C 14 8 9 13 9 20 C 9 25 12.5 29 17 29.8 C 13.5 28 11.5 24.5 11.5 20 C 11.5 14.5 15.5 10.5 21 8 Z"
                  fill="#5C405C"
                />
                <g transform="translate(21, 17) scale(0.65)">
                  <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
                  <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
                </g>
              </svg>
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C6A46A] font-semibold font-sans mb-1">
              The Bridegroom
            </span>

            {/* Groom Name — nowrap on desktop so "R" stays on same line */}
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#5C405C] tracking-tight mb-1 whitespace-nowrap">
              {groom.name}
            </h4>

            {groom.qualification && (
              <p className="text-xs sm:text-sm font-sans text-[#51474D] font-medium tracking-wide mb-2 sm:mb-3">
                {groom.qualification}
              </p>
            )}

            <div className="w-14 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent my-2 sm:my-3" />

            {/* Residence */}
            {groom.city && (
              <p className="text-[11px] sm:text-xs text-[#51474D] font-sans mt-1">
                Residence: <span className="font-medium text-[#5C405C]">{groom.city}</span>
              </p>
            )}
          </div>
        </div>

        {/* Traditional Wedding Ceremonial Fabric Knot */}
        <div className="hidden md:flex absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 pointer-events-none items-center justify-center w-20 lg:w-28 z-20">
          <WeddingScarf idPrefix="desktop-knot" className="w-full" />
        </div>

        {/* BRIDE'S CARD */}
        <div className="relative bg-[#F8EEF5] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A46A]/40 shadow-xl flex flex-col justify-center text-center islamic-gold-frame">
          <IslamicCorner position="top-right" size={50} className="top-1 right-1 opacity-75" />
          <IslamicCorner position="bottom-left" size={50} className="bottom-1 left-1 opacity-75" />

          {/* Bride Islamic Medallion */}
          <div className="flex flex-col items-center relative z-20">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#F8EEF5] to-[#EAE2F6] border border-[#C6A46A] flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
              <svg viewBox="0 0 36 36" className="w-7 h-7 sm:w-8 sm:h-8 text-[#5C405C]" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#C6A46A" strokeWidth="1" strokeDasharray="2 2" />
                <g transform="translate(18, 18)">
                  <rect x="-7" y="-7" width="14" height="14" fill="#5C405C" rx="1" />
                  <rect x="-7" y="-7" width="14" height="14" fill="#5C405C" rx="1" transform="rotate(45)" />
                  <circle cx="0" cy="0" r="3" fill="#C6A46A" />
                  <circle cx="0" cy="0" r="1.5" fill="#F8EEF5" />
                </g>
              </svg>
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C6A46A] font-semibold font-sans mb-1">
              The Bride
            </span>

            {/* Bride Name */}
            <h4 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#5C405C] tracking-tight mb-1">
              {bride.name}
            </h4>

            {bride.qualification && (
              <p className="text-xs sm:text-sm font-sans text-[#51474D] font-medium tracking-wide mb-2 sm:mb-3">
                {bride.qualification}
              </p>
            )}

            <div className="w-14 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent my-2 sm:my-3" />

            {/* Residence */}
            {bride.city && (
              <p className="text-[11px] sm:text-xs text-[#51474D] font-sans mt-1">
                Residence: <span className="font-medium text-[#5C405C]">{bride.city}</span>
              </p>
            )}
          </div>
        </div>

      </div>

      {/* ================================================================= */}
      {/* MOBILE VIEW (Width < 768px): Unified Single Wedding Section       */}
      {/* ================================================================= */}
      <div className="block md:hidden">
        <div className="relative bg-[#F8EEF5] rounded-2xl p-2.5 min-[360px]:p-3 min-[390px]:p-3.5 sm:p-5 border border-[#C6A46A]/40 shadow-xl islamic-gold-frame overflow-hidden">
          {/* Delicate Geometric Corner Accents */}
          <IslamicCorner position="top-left" size={36} className="top-1 left-1 opacity-60" />
          <IslamicCorner position="top-right" size={36} className="top-1 right-1 opacity-60" />
          <IslamicCorner position="bottom-left" size={36} className="bottom-1 left-1 opacity-60" />
          <IslamicCorner position="bottom-right" size={36} className="bottom-1 right-1 opacity-60" />

          {/* ------------------------------------------------------------- */}
          {/* 1. Standard Mobile (>= 360px): Two Equal-Width Cards Side-by-Side */}
          {/* ------------------------------------------------------------- */}
          <div className="hidden min-[360px]:grid grid-cols-2 gap-x-8 min-[375px]:gap-x-10 min-[390px]:gap-x-12 min-[414px]:gap-x-14 sm:gap-x-16 items-stretch relative">
            
            {/* GROOM (Left Column) */}
            <div className="min-w-0 flex flex-col items-center justify-center text-center bg-[#EAE2F6]/30 rounded-xl px-2 py-4 min-[375px]:px-2.5 min-[375px]:py-5 min-[390px]:px-3 min-[390px]:py-5 sm:px-4 sm:py-6 border border-[#C6A46A]/30 relative shadow-xs">
              <div className="flex flex-col items-center relative z-20 w-full">
                {/* Groom's Emblem */}
                <div className="w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 rounded-full bg-[#F8EEF5] border border-[#C6A46A]/70 flex items-center justify-center mb-1.5 min-[390px]:mb-2 shadow-xs">
                  <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 min-[390px]:w-5 min-[390px]:h-5 text-[#5C405C]" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#C6A46A" strokeWidth="1" strokeDasharray="2 2" />
                    <path
                      d="M 21 8 C 14 8 9 13 9 20 C 9 25 12.5 29 17 29.8 C 13.5 28 11.5 24.5 11.5 20 C 11.5 14.5 15.5 10.5 21 8 Z"
                      fill="#5C405C"
                    />
                    <g transform="translate(21, 17) scale(0.65)">
                      <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
                      <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
                    </g>
                  </svg>
                </div>

                <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider text-[#C6A46A] font-semibold font-sans mb-1.5">
                  The Groom
                </span>

                {/* Groom name — two lines balanced: "Ajmal Ahamed" / "R" */}
                <div className="w-full flex flex-col items-center justify-center mb-1.5">
                  <h4 className="text-[12px] min-[375px]:text-[13px] min-[390px]:text-sm font-serif font-bold text-[#5C405C] tracking-tight leading-tight text-center">
                    Ajmal Ahamed
                  </h4>
                  <h4 className="text-[12px] min-[375px]:text-[13px] min-[390px]:text-sm font-serif font-bold text-[#5C405C] tracking-tight leading-tight text-center">
                    R
                  </h4>
                </div>

                {groom.qualification && (
                  <p className="text-[9px] min-[375px]:text-[10px] min-[390px]:text-[11px] font-sans text-[#51474D] font-medium leading-snug mb-1.5">
                    {groom.qualification}
                  </p>
                )}

                <div className="w-8 min-[375px]:w-10 min-[390px]:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A]/70 to-transparent mb-1.5 mx-auto" />

                <p className="text-[9px] min-[390px]:text-[10px] text-[#51474D] font-sans">
                  {groom.city}
                </p>
              </div>
            </div>

            {/* Connecting Traditional Ceremonial Wedding Fabric Knot */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center w-8 min-[375px]:w-10 min-[390px]:w-12 min-[414px]:w-14 sm:w-16">
              <WeddingScarf idPrefix="mobile-knot" className="w-full" />
            </div>

            {/* BRIDE (Right Column) */}
            <div className="min-w-0 flex flex-col items-center justify-center text-center bg-[#EAE2F6]/30 rounded-xl px-2 py-4 min-[375px]:px-2.5 min-[375px]:py-5 min-[390px]:px-3 min-[390px]:py-5 sm:px-4 sm:py-6 border border-[#C6A46A]/30 relative shadow-xs">
              <div className="flex flex-col items-center relative z-20 w-full">
                {/* Bride's Emblem */}
                <div className="w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 rounded-full bg-[#F8EEF5] border border-[#C6A46A]/70 flex items-center justify-center mb-1.5 min-[390px]:mb-2 shadow-xs">
                  <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 min-[390px]:w-5 min-[390px]:h-5 text-[#5C405C]" fill="none">
                    <circle cx="18" cy="18" r="16" stroke="#C6A46A" strokeWidth="1" strokeDasharray="2 2" />
                    <g transform="translate(18, 18)">
                      <rect x="-7" y="-7" width="14" height="14" fill="#5C405C" rx="1" />
                      <rect x="-7" y="-7" width="14" height="14" fill="#5C405C" rx="1" transform="rotate(45)" />
                      <circle cx="0" cy="0" r="3" fill="#C6A46A" />
                      <circle cx="0" cy="0" r="1.5" fill="#F8EEF5" />
                    </g>
                  </svg>
                </div>

                <span className="text-[9px] min-[390px]:text-[10px] uppercase tracking-wider text-[#C6A46A] font-semibold font-sans mb-1.5">
                  The Bride
                </span>

                <div className="w-full flex flex-col items-center justify-center mb-1.5">
                  <h4 className="text-[13px] min-[375px]:text-sm min-[390px]:text-base font-serif font-bold text-[#5C405C] tracking-tight leading-tight text-center">
                    {bride.name}
                  </h4>
                </div>

                {bride.qualification && (
                  <p className="text-[9px] min-[375px]:text-[10px] min-[390px]:text-[11px] font-sans text-[#51474D] font-medium leading-snug mb-1.5">
                    {bride.qualification}
                  </p>
                )}

                <div className="w-8 min-[375px]:w-10 min-[390px]:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A]/70 to-transparent mb-1.5 mx-auto" />

                <p className="text-[9px] min-[390px]:text-[10px] text-[#51474D] font-sans">
                  {bride.city}
                </p>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* 2. Narrow Mobile (< 360px): Single Integrated Stack Card      */}
          {/* ------------------------------------------------------------- */}
          <div className="block min-[360px]:hidden space-y-3">
            {/* Groom Section */}
            <div className="bg-[#EAE2F6]/30 rounded-xl px-2.5 py-3.5 border border-[#C6A46A]/30 text-center">
              <div className="w-8 h-8 rounded-full bg-[#F8EEF5] border border-[#C6A46A]/70 flex items-center justify-center mx-auto mb-1.5 shadow-xs">
                <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 text-[#5C405C]" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#C6A46A" strokeWidth="1" strokeDasharray="2 2" />
                  <path
                    d="M 21 8 C 14 8 9 13 9 20 C 9 25 12.5 29 17 29.8 C 13.5 28 11.5 24.5 11.5 20 C 11.5 14.5 15.5 10.5 21 8 Z"
                    fill="#5C405C"
                  />
                  <g transform="translate(21, 17) scale(0.65)">
                    <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
                    <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
                  </g>
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#C6A46A] font-semibold font-sans block mb-1">
                The Groom
              </span>
              <h4 className="text-sm font-serif font-bold text-[#5C405C] tracking-tight leading-tight mb-0.5">
                {groom.name}
              </h4>
              {groom.qualification && (
                <p className="text-[10px] font-sans text-[#51474D] font-medium leading-snug mb-1">
                  {groom.qualification}
                </p>
              )}
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A]/70 to-transparent mx-auto my-1.5" />
              <p className="text-[10px] text-[#51474D] font-sans">
                Residence: <span className="font-medium text-[#5C405C]">{groom.city}</span>
              </p>
            </div>

            {/* Traditional Ceremonial Wedding Knot (Narrow Mobile) */}
            <div className="flex items-center justify-center my-2.5 pointer-events-none">
              <div className="w-[140px] max-w-[160px]">
                <WeddingScarf idPrefix="narrow-knot" className="w-full" />
              </div>
            </div>

            {/* Bride Section */}
            <div className="bg-[#EAE2F6]/30 rounded-xl px-2.5 py-3.5 border border-[#C6A46A]/30 text-center">
              <div className="w-8 h-8 rounded-full bg-[#F8EEF5] border border-[#C6A46A]/70 flex items-center justify-center mx-auto mb-1.5 shadow-xs">
                <svg viewBox="0 0 36 36" className="w-4.5 h-4.5 text-[#5C405C]" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#C6A46A" strokeWidth="1" strokeDasharray="2 2" />
                  <g transform="translate(18, 18)">
                    <rect x="-7" y="-7" width="14" height="14" fill="#5C405C" rx="1" />
                    <rect x="-7" y="-7" width="14" height="14" fill="#5C405C" rx="1" transform="rotate(45)" />
                    <circle cx="0" cy="0" r="3" fill="#C6A46A" />
                    <circle cx="0" cy="0" r="1.5" fill="#F8EEF5" />
                  </g>
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#C6A46A] font-semibold font-sans block mb-1">
                The Bride
              </span>
              <h4 className="text-sm font-serif font-bold text-[#5C405C] tracking-tight leading-tight mb-0.5">
                {bride.name}
              </h4>
              {bride.qualification && (
                <p className="text-[10px] font-sans text-[#51474D] font-medium leading-snug mb-1">
                  {bride.qualification}
                </p>
              )}
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A]/70 to-transparent mx-auto my-1.5" />
              <p className="text-[10px] text-[#51474D] font-sans">
                Residence: <span className="font-medium text-[#5C405C]">{bride.city}</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <DecorativeDivider icon="crescent" />
    </section>
  );
};

export default CoupleSection;

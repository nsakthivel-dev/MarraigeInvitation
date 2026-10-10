import React from 'react';
import weddingConfig from '../data/invitation';
import KolamCorner from './KolamCorner';
import DecorativeDivider from './DecorativeDivider';

/**
 * Section B: The Couple (Visual Centerpiece)
 * Features Groom and Bride with traditional lineage details,
 * framed in double antique-gold ornamental cards.
 */
export const CoupleSection = () => {
  const { groom, bride } = weddingConfig;

  return (
    <section 
      id="couple" 
      aria-label="The Couple"
      className="relative px-4 py-8 sm:py-12 max-w-5xl mx-auto"
    >
      {/* Section Sub-heading */}
      <div className="text-center mb-8">
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold font-sans">
          The Auspicious Union
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] mt-1">
          The Bridegroom & The Bride
        </h3>
      </div>

      {/* Couple Cards Grid: Stacks gracefully on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 items-stretch relative">
        
        {/* ================================================================= */}
        {/* GROOM'S CARD */}
        {/* ================================================================= */}
        <div className="relative bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#B08D57]/40 shadow-xl flex flex-col justify-between text-center gold-frame">
          <KolamCorner position="top-left" size={50} className="top-1 left-1 opacity-70" />
          <KolamCorner position="bottom-right" size={50} className="bottom-1 right-1 opacity-70" />

          {/* Traditional Groom Emblem (Kalasam / Paisley) */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFDF8] to-[#F5E8C7] border border-[#B08D57] flex items-center justify-center mb-4 shadow-inner">
              <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#6D1F2A]" fill="currentColor">
                {/* Traditional Kalasam Emblem */}
                <path d="M20 5 C21 8, 23 10, 20 13 C17 10, 19 8, 20 5 Z" fill="#B08D57" />
                <path d="M14 14 Q20 12 26 14 Q28 20 20 24 Q12 20 14 14 Z" fill="#6D1F2A" />
                <path d="M12 24 L28 24 L26 33 L14 33 Z" fill="#B08D57" />
                <rect x="10" y="33" width="20" height="3" rx="1" fill="#8C6D3B" />
              </svg>
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#B08D57] font-semibold font-sans mb-1">
              The Bridegroom
            </span>

            {/* Groom Name */}
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#6D1F2A] tracking-tight mb-1">
              {groom.name}
            </h4>

            {groom.qualification && (
              <p className="text-xs sm:text-sm font-sans text-[#8C6D3B] font-medium tracking-wide mb-4">
                {groom.qualification}
              </p>
            )}

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57] to-transparent my-2" />
          </div>

          {/* Groom's Family Details */}
          <div className="mt-4 pt-4 border-t border-[#B08D57]/20 flex flex-col items-center space-y-1.5">
            <span className="text-xs uppercase tracking-wider text-[#8C6D3B] font-serif italic">
              {groom.sonOf}
            </span>
            <p className="text-base sm:text-lg font-serif font-bold text-[#382A22]">
              {groom.fatherName}
            </p>
            <p className="text-xs font-serif italic text-[#8C6D3B]">&</p>
            <p className="text-base sm:text-lg font-serif font-bold text-[#382A22]">
              {groom.motherName}
            </p>

            {groom.nativePlace && (
              <p className="text-xs text-[#6B5B52] font-sans mt-2 pt-2 border-t border-[#B08D57]/15">
                Native: <span className="font-medium text-[#382A22]">{groom.nativePlace}</span>
              </p>
            )}
          </div>
        </div>

        {/* Centerpiece "WEDS" Ribbon on Desktop / Divider on Mobile */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#6D1F2A] border-2 border-[#B08D57] shadow-xl flex items-center justify-center text-[#FFFDF8]">
            <span className="font-serif italic font-bold text-sm tracking-wider text-[#F5E8C7]">
              weds
            </span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BRIDE'S CARD */}
        {/* ================================================================= */}
        <div className="relative bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#B08D57]/40 shadow-xl flex flex-col justify-between text-center gold-frame">
          <KolamCorner position="top-right" size={50} className="top-1 right-1 opacity-70" />
          <KolamCorner position="bottom-left" size={50} className="bottom-1 left-1 opacity-70" />

          {/* Traditional Bride Emblem (Lotus / Jasmine) */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFDF8] to-[#F5E8C7] border border-[#B08D57] flex items-center justify-center mb-4 shadow-inner">
              <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#6D1F2A]" fill="currentColor">
                {/* Traditional Sacred Lotus Motif */}
                <path d="M20 8 C22 15, 25 20, 20 28 C15 20, 18 15, 20 8 Z" fill="#6D1F2A" />
                <path d="M20 28 C25 23, 33 21, 35 27 C28 32, 23 30, 20 28 Z" fill="#B08D57" />
                <path d="M20 28 C15 23, 7 21, 5 27 C12 32, 17 30, 20 28 Z" fill="#B08D57" />
                <circle cx="20" cy="33" r="2.5" fill="#8C6D3B" />
              </svg>
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#B08D57] font-semibold font-sans mb-1">
              The Bride
            </span>

            {/* Bride Name */}
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#6D1F2A] tracking-tight mb-1">
              {bride.name}
            </h4>

            {bride.qualification && (
              <p className="text-xs sm:text-sm font-sans text-[#8C6D3B] font-medium tracking-wide mb-4">
                {bride.qualification}
              </p>
            )}

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57] to-transparent my-2" />
          </div>

          {/* Bride's Family Details */}
          <div className="mt-4 pt-4 border-t border-[#B08D57]/20 flex flex-col items-center space-y-1.5">
            <span className="text-xs uppercase tracking-wider text-[#8C6D3B] font-serif italic">
              {bride.daughterOf}
            </span>
            <p className="text-base sm:text-lg font-serif font-bold text-[#382A22]">
              {bride.fatherName}
            </p>
            <p className="text-xs font-serif italic text-[#8C6D3B]">&</p>
            <p className="text-base sm:text-lg font-serif font-bold text-[#382A22]">
              {bride.motherName}
            </p>

            {bride.nativePlace && (
              <p className="text-xs text-[#6B5B52] font-sans mt-2 pt-2 border-t border-[#B08D57]/15">
                Native: <span className="font-medium text-[#382A22]">{bride.nativePlace}</span>
              </p>
            )}
          </div>
        </div>

      </div>

      <DecorativeDivider icon="lotus" />
    </section>
  );
};

export default CoupleSection;

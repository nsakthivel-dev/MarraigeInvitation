import React, { useState, useEffect } from 'react';
import weddingConfig from '../data/invitation';
import IslamicCorner from './IslamicCorner';
import IslamicLantern from './IslamicLantern';

/**
 * OpeningCard: Fullscreen Luxury Islamic Wedding Invitation Cover
 * 
 * Design Features:
 * - Deep emerald-green and forest-green cover with subtle geometric star patterns
 * - Sophisticated double antique-gold filigree borders & Islamic arches
 * - 3D dual-folding doors that swing open in perspective
 * - Sacred Bismillah in Amiri Arabic calligraphy with English translation
 * - Couple names as the visual centerpiece
 * - Prominent "Open Invitation" emerald-and-gold button with glowing shimmer
 * - Tap anywhere / keyboard accessible (Enter / Space)
 * - 850ms smooth unfolding transition
 * - Intermediate white blessing card removed: doors open directly to the wedding invitation
 */
export const OpeningCard = ({ isOpen, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  // isMounted: unmount after door animation fully completes
  const [isMounted, setIsMounted] = useState(true);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Call onOpen() immediately — invitation starts fading in behind the doors.
    // The door panels have their own green backgrounds and animate via CSS (900ms).
    // Making this overlay background transparent lets the invitation show through
    // as the doors swing open and fade out.
    onOpen();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenClick();
    }
  };

  // Unmount 950ms after animation starts — doors are done (900ms CSS) + small buffer
  useEffect(() => {
    if (isOpening) {
      const t = setTimeout(() => setIsMounted(false), 950);
      return () => clearTimeout(t);
    }
  }, [isOpening]);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={isOpening ? undefined : handleOpenClick}
      style={{
        // Become fully transparent the moment opening starts so the invitation
        // is revealed through the gap as doors swing open.
        backgroundColor: isOpening ? 'transparent' : '#5C405C',
        transition: 'background-color 200ms ease-out',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
    >
      {/* Background pattern — hidden the moment opening starts */}
      <div
        className="absolute inset-0 bg-emerald-pattern pointer-events-none"
        style={{
          opacity: isOpening ? 0 : 0.95,
          transition: 'opacity 200ms ease-out',
        }}
      />
      
      {/* Subtle Screen Edge Islamic Corners */}
      <IslamicCorner position="top-left" size={90} className="top-2 left-2 opacity-60 pointer-events-none" />
      <IslamicCorner position="top-right" size={90} className="top-2 right-2 opacity-60 pointer-events-none" />
      <IslamicCorner position="bottom-left" size={90} className="bottom-2 left-2 opacity-60 pointer-events-none" />
      <IslamicCorner position="bottom-right" size={90} className="bottom-2 right-2 opacity-60 pointer-events-none" />

      {/* 3D Perspective Card Container */}
      <div 
        className="relative w-full max-w-[500px] md:max-w-[560px] perspective-1500 cursor-pointer select-none"
        onClick={(e) => {
          e.stopPropagation();
          handleOpenClick();
        }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="button"
        aria-label="Click or tap to open the Islamic wedding invitation card"
      >
        
        {/* Card Main Body — fades out entirely as doors open, revealing invitation beneath */}
        <div 
          className={`relative w-full rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-700 overflow-hidden transform-style-3d ${
            isOpening ? 'scale-105 opacity-0' : 'scale-100 opacity-100 hover:shadow-[0_30px_70px_-10px_rgba(60,34,60,0.65)]'
          }`}
          style={{
            boxShadow: isOpening ? 'none' : '0 25px 60px -15px rgba(60, 34, 60, 0.7)',
            transition: 'opacity 600ms ease-out, transform 700ms ease, box-shadow 600ms ease',
          }}
        >
          {/* Card Flaps Area */}
          <div className="relative w-full flex min-h-[520px] sm:min-h-[600px] md:min-h-[640px]">
            
            {/* LEFT 3D DOOR (Deep Plum with Champagne Gold Arch Border) */}
            <div 
              className={`w-1/2 h-full absolute inset-y-0 left-0 bg-[#5C405C] z-20 border-r border-[#C6A46A]/60 card-door-left ${
                isOpening ? 'is-open' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, #462A46 0%, #5C405C 100%)',
              }}
            >
              <div className="h-full w-full p-3 sm:p-4 flex flex-col justify-between">
                <div className="w-full h-full border-t-2 border-l-2 border-b-2 border-[#C6A46A]/70 rounded-l-2xl p-2 relative">
                  <IslamicCorner position="top-left" size={45} className="top-1 left-1 opacity-80" />
                  <IslamicCorner position="bottom-left" size={45} className="bottom-1 left-1 opacity-80" />
                  {/* Subtle Arch Inset on Left Door */}
                  <div className="absolute right-2 top-8 bottom-8 left-4 border-r border-dashed border-[#C6A46A]/40 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* RIGHT 3D DOOR (Deep Plum with Champagne Gold Arch Border) */}
            <div 
              className={`w-1/2 h-full absolute inset-y-0 right-0 bg-[#5C405C] z-20 border-l border-[#C6A46A]/60 card-door-right ${
                isOpening ? 'is-open' : ''
              }`}
              style={{
                background: 'linear-gradient(225deg, #462A46 0%, #5C405C 100%)',
              }}
            >
              <div className="h-full w-full p-3 sm:p-4 flex flex-col justify-between">
                <div className="w-full h-full border-t-2 border-r-2 border-b-2 border-[#C6A46A]/70 rounded-r-2xl p-2 relative">
                  <IslamicCorner position="top-right" size={45} className="top-1 right-1 opacity-80" />
                  <IslamicCorner position="bottom-right" size={45} className="bottom-1 right-1 opacity-80" />
                  {/* Subtle Arch Inset on Right Door */}
                  <div className="absolute left-2 top-8 bottom-8 right-4 border-l border-dashed border-[#C6A46A]/40 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* FRONT COVER CONTENT & ISLAMIC ARCH FRAME (z-30 over doors) */}
            <div 
              className={`absolute inset-0 w-full h-full py-5 px-3.5 sm:py-8 sm:px-6 md:py-9 md:px-8 flex flex-col items-center justify-between text-center z-30 transition-all duration-500 ${
                isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
              }`}
            >
              {/* Top: Crescent Motif & Sacred Bismillah */}
              <div className="w-full flex flex-col items-center">
                
                {/* Crescent & 8-Point Star Icon */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-1 text-[#E5D3A1]">
                  <span className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C6A46A]" />
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5D3A1]" fill="none">
                    <path
                      d="M 14 4 C 8.5 4 4 8.5 4 14 C 4 18.5 7 22 11.5 22.8 C 8 21 6 17.5 6 14 C 6 9.5 9.5 6 14 4 Z"
                      fill="#E5D3A1"
                    />
                    <g transform="translate(16, 11) scale(0.6)">
                      <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
                      <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
                    </g>
                  </svg>
                  <span className="w-6 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C6A46A]" />
                </div>

                {/* Bismillah in Arabic Calligraphy */}
                <p 
                  className="font-arabic text-xl min-[360px]:text-2xl sm:text-3xl text-[#FFFDF8] font-bold tracking-normal leading-relaxed my-0.5 drop-shadow-sm select-text" 
                  dir="rtl"
                  lang="ar"
                >
                  {weddingConfig.arabicGreeting}
                </p>

                {/* English Translation */}
                <p className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-serif italic text-[#EAE2F6]/90 max-w-[280px] sm:max-w-[320px] leading-tight mb-1">
                  “{weddingConfig.arabicGreetingTranslation}”
                </p>

                {/* Blessings Title */}
                <p className="text-[11px] sm:text-sm font-serif tracking-widest uppercase text-[#C6A46A] font-semibold mt-0.5 sm:mt-1">
                  {weddingConfig.blessingsTitle}
                </p>

                {/* Lanterns Pair Accent */}
                <div className="flex items-center justify-center space-x-5 sm:space-x-6 my-1">
                  <IslamicLantern height={34} className="opacity-90 sm:hidden" />
                  <IslamicLantern height={40} className="opacity-90 hidden sm:inline-block" />
                  <div className="w-2 h-2 rotate-45 border border-[#E5D3A1] bg-[#C6A46A]/40" />
                  <IslamicLantern height={34} className="opacity-90 sm:hidden" />
                  <IslamicLantern height={40} className="opacity-90 hidden sm:inline-block" />
                </div>
              </div>

              {/* Centerpiece: Heading & Couple Names */}
              <div className="my-1 sm:my-2 w-full flex flex-col items-center">
                <div className="inline-block relative px-3 sm:px-5 py-0.5 sm:py-1 mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#FFFDF8] border-y border-[#C6A46A]/60 py-0.5 sm:py-1 px-3 sm:px-4">
                    {weddingConfig.invitationTitle}
                  </span>
                </div>

                <p className="text-[9px] sm:text-xs uppercase tracking-widest text-[#D8C9EF] font-sans font-medium mb-1">
                  {weddingConfig.familyGreeting}
                </p>

                {/* Groom's Name */}
                <h1 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#FFFDF8] tracking-tight leading-snug drop-shadow-sm px-1">
                  {weddingConfig.groom.name}
                </h1>
                
                {/* Gold Separator */}
                <div className="flex items-center justify-center my-0.5 sm:my-1 space-x-2.5 sm:space-x-3 text-[#C6A46A]">
                  <span className="w-6 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C6A46A]" />
                  <span className="text-sm sm:text-lg font-serif italic text-[#F4C6D5] font-semibold">&</span>
                  <span className="w-6 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C6A46A]" />
                </div>

                {/* Bride's Name */}
                <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#FFFDF8] tracking-tight leading-snug drop-shadow-sm px-1">
                  {weddingConfig.bride.name}
                </h2>

                {/* Date & Ceremony Hint */}
                <p className="text-[11px] sm:text-sm text-[#EAE2F6] font-serif font-medium mt-1 sm:mt-2">
                  {weddingConfig.displayDate} • {weddingConfig.nikah.title}
                </p>
              </div>

              {/* Bottom: Interactive "Open Invitation" Button */}
              <div className="w-full flex flex-col items-center pt-1 sm:pt-2">
                
                <button
                  type="button"
                  id="open-invitation-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenClick();
                  }}
                  disabled={isOpening}
                  aria-label="Open the Islamic wedding invitation"
                  className={`group relative inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 min-[360px]:px-8 min-[360px]:py-3 sm:px-10 sm:py-4 rounded-full overflow-hidden shadow-2xl transition-all duration-300 transform cursor-pointer border-2 border-[#C6A46A] active:scale-95 ${
                    isOpening ? 'scale-95 opacity-80' : 'hover:scale-105'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #462A46 0%, #5C405C 50%, #462A46 100%)',
                    boxShadow: '0 12px 30px -4px rgba(60, 34, 60, 0.7), 0 0 20px rgba(198, 164, 106, 0.4)',
                  }}
                >
                  {/* Continuous Golden Shimmer Wave */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#F4C6D5]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                  {/* Pulsing Aura Ring */}
                  <span className="absolute -inset-1 rounded-full border border-[#D8C9EF]/40 animate-pulse pointer-events-none" />

                  {/* Left Golden 8-Point Star */}
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 border border-[#C6A46A] bg-[#D99AAF]/50 mr-2 sm:mr-3" />

                  {/* Button Text */}
                  <span className="relative text-xs min-[360px]:text-sm sm:text-base font-serif font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#FFFDF8] uppercase drop-shadow-sm">
                    {isOpening ? "Opening Invitation..." : "Open Invitation"}
                  </span>

                  {/* Right Golden 8-Point Star */}
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 border border-[#C6A46A] bg-[#D99AAF]/50 ml-2 sm:ml-3" />
                </button>

                {/* Subtitle Hint */}
                <p className="text-[10px] sm:text-xs text-[#EAE2F6]/85 mt-2 sm:mt-3 font-serif italic tracking-wide animate-pulse">
                  ✨ Tap or click anywhere to open ✨
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default OpeningCard;

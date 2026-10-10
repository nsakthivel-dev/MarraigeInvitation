import React, { useState } from 'react';
import weddingConfig from '../data/invitation';
import KolamCorner from './KolamCorner';
import KuthuVilakku from './KuthuVilakku';

/**
 * OpeningCard: The Fullscreen Luxury South Indian Wedding Card Cover
 * 
 * Features:
 * - 3D dual-folding doors with authentic antique-gold filigree borders
 * - Embossed royal seal with glowing flame motif
 * - Authentic South Indian motifs (Diya, Kolam, Kalasam)
 * - 800ms smooth unfolding animation with reduced-motion support
 * - Keyboard accessible (Enter / Space)
 */
export const OpeningCard = ({ isOpen, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 100 : 850;

    setTimeout(() => {
      onOpen();
    }, duration);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenClick();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-700 bg-[#F8F1E3] ${
        isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
    >
      {/* Background Ambience: Subtle Kolam Watermark & Golden Glow */}
      <div className="absolute inset-0 bg-silk-pattern pointer-events-none" />
      
      {/* Subtle Corner Kolams on the Screen Edges */}
      <KolamCorner position="top-left" size={90} className="top-2 left-2 opacity-60" />
      <KolamCorner position="top-right" size={90} className="top-2 right-2 opacity-60" />
      <KolamCorner position="bottom-left" size={90} className="bottom-2 left-2 opacity-60" />
      <KolamCorner position="bottom-right" size={90} className="bottom-2 right-2 opacity-60" />

      {/* 3D Perspective Card Container */}
      <div className="relative w-full max-w-[480px] md:max-w-[540px] perspective-1500">
        
        {/* Card Main Body */}
        <div 
          className={`relative w-full rounded-2xl bg-[#FFFDF8] shadow-2xl transition-all duration-700 overflow-hidden transform-style-3d border border-[#B08D57]/40 ${
            isOpening ? 'scale-105 opacity-90' : 'scale-100'
          }`}
          style={{
            boxShadow: '0 25px 60px -15px rgba(109, 31, 42, 0.25), 0 0 0 1px rgba(176, 141, 87, 0.3)',
          }}
        >
          {/* Card Flaps / Left & Right 3D Doors */}
          <div className="relative w-full flex min-h-[580px] sm:min-h-[620px]">
            
            {/* Left Door */}
            <div 
              className={`w-1/2 h-full absolute inset-y-0 left-0 bg-[#FFFDF8] z-20 border-r border-[#B08D57]/30 card-door-left ${
                isOpening ? 'is-open' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF4E8 100%)',
              }}
            >
              {/* Left Door Inner Border & Motif */}
              <div className="h-full w-full p-3 sm:p-4 flex flex-col justify-between">
                <div className="w-full h-full border-t-2 border-l-2 border-b-2 border-[#B08D57]/60 rounded-l-lg p-2 relative">
                  <KolamCorner position="top-left" size={45} className="top-1 left-1 opacity-75" />
                  <KolamCorner position="bottom-left" size={45} className="bottom-1 left-1 opacity-75" />
                  {/* Subtle traditional vertical border pattern */}
                  <div className="h-full flex items-center justify-start pl-1 opacity-40">
                    <div className="w-[1px] h-3/4 bg-dashed border-l border-[#B08D57]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Door */}
            <div 
              className={`w-1/2 h-full absolute inset-y-0 right-0 bg-[#FFFDF8] z-20 border-l border-[#B08D57]/30 card-door-right ${
                isOpening ? 'is-open' : ''
              }`}
              style={{
                background: 'linear-gradient(225deg, #FFFDF8 0%, #FAF4E8 100%)',
              }}
            >
              {/* Right Door Inner Border & Motif */}
              <div className="h-full w-full p-3 sm:p-4 flex flex-col justify-between">
                <div className="w-full h-full border-t-2 border-r-2 border-b-2 border-[#B08D57]/60 rounded-r-lg p-2 relative">
                  <KolamCorner position="top-right" size={45} className="top-1 right-1 opacity-75" />
                  <KolamCorner position="bottom-right" size={45} className="bottom-1 right-1 opacity-75" />
                  {/* Subtle traditional vertical border pattern */}
                  <div className="h-full flex items-center justify-end pr-1 opacity-40">
                    <div className="w-[1px] h-3/4 bg-dashed border-r border-[#B08D57]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content Surface (Visible on cover & shines beneath doors) */}
            <div className="w-full h-full py-8 px-6 sm:py-10 sm:px-8 flex flex-col items-center justify-between text-center z-10">
              
              {/* Top Invocation & Sacred Diya */}
              <div className="w-full flex flex-col items-center">
                <p className="text-xs sm:text-sm font-serif tracking-widest text-[#B08D57] font-semibold mb-1">
                  {weddingConfig.traditionalInvocation}
                </p>
                <p className="text-[11px] sm:text-xs tracking-wider uppercase text-[#8C6D3B] font-medium mb-3">
                  {weddingConfig.traditionalInvocationEnglish}
                </p>

                {/* Auspicious Diya Pair */}
                <div className="flex items-center justify-center space-x-6 my-1">
                  <KuthuVilakku height={52} className="opacity-95" />
                  <div className="w-2.5 h-2.5 rotate-45 border border-[#B08D57] bg-[#B08D57]/30" />
                  <KuthuVilakku height={52} className="opacity-95" />
                </div>

                <p className="text-xs sm:text-sm font-serif italic text-[#6B5B52] mt-2 max-w-[280px]">
                  {weddingConfig.blessingsTitle}
                </p>
              </div>

              {/* Centerpiece: Heading & Couple Names */}
              <div className="my-4 w-full flex flex-col items-center">
                <div className="inline-block relative px-6 py-1 mb-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#6D1F2A] border-y border-[#B08D57]/50 py-1 px-4">
                    Wedding Invitation
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] tracking-tight leading-snug">
                  {weddingConfig.groom.name}
                </h1>
                
                <div className="flex items-center justify-center my-1.5 space-x-3 text-[#B08D57]">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]" />
                  <span className="text-base sm:text-lg font-serif italic text-[#8C6D3B] font-semibold">weds</span>
                  <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] tracking-tight leading-snug">
                  {weddingConfig.bride.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#6B5B52] font-serif italic mt-3 max-w-[320px] leading-relaxed">
                  Request the honour of your auspicious presence and blessings.
                </p>
              </div>

              {/* Bottom Interactive Open Button / Wax Seal */}
              <div className="w-full flex flex-col items-center pt-2">
                <button
                  type="button"
                  id="open-invitation-btn"
                  onClick={handleOpenClick}
                  onKeyDown={handleKeyDown}
                  disabled={isOpening}
                  aria-label="Open the wedding invitation card"
                  className={`group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden shadow-lg transition-all duration-300 transform cursor-pointer border border-[#DFC794] focus:outline-hidden focus:ring-3 focus:ring-[#B08D57] ${
                    isOpening ? 'scale-95 opacity-80' : 'hover:scale-105 active:scale-95'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #8E2B3A 0%, #6D1F2A 50%, #4A131C 100%)',
                    boxShadow: '0 8px 25px -4px rgba(109, 31, 42, 0.45)',
                  }}
                >
                  {/* Subtle Golden Sheen */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                  {/* Left Golden Floret */}
                  <span className="w-2 h-2 rotate-45 border border-[#DFC794] bg-[#F5E8C7]/40 mr-3" />

                  {/* Button Text */}
                  <span className="relative text-sm sm:text-base font-serif font-bold tracking-widest text-[#FFFDF8] uppercase">
                    {isOpening ? "Opening Invitation..." : "Open Invitation"}
                  </span>

                  {/* Right Golden Floret */}
                  <span className="w-2 h-2 rotate-45 border border-[#DFC794] bg-[#F5E8C7]/40 ml-3" />
                </button>

                <p className="text-[11px] text-[#8C6D3B] mt-3 font-sans tracking-wide">
                  Tap to unfold the invitation
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

import React from 'react';
import weddingConfig from '../data/invitation';
import IslamicLantern from './IslamicLantern';
import IslamicCorner from './IslamicCorner';

/**
 * Section E: Warm Closing Message, Dua & Family Signatures
 * Styled in the Rose Pink, Lavender & Champagne Gold floral aesthetic.
 */
export const ClosingMessage = () => {
  const { closingMessage, duaGreeting, duaTranslation, appreciationMessage, familySignature } = weddingConfig;

  return (
    <section 
      id="closing" 
      aria-label="Closing Dua and Blessings"
      className="relative px-1 sm:px-4 py-6 sm:py-12 max-w-3xl mx-auto text-center"
    >
      <div className="relative bg-[#F8EEF5] rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[#C6A46A]/40 shadow-lg islamic-gold-frame">
        <IslamicCorner position="top-left" size={45} className="top-1 left-1 opacity-65" />
        <IslamicCorner position="top-right" size={45} className="top-1 right-1 opacity-65" />
        <IslamicCorner position="bottom-left" size={45} className="bottom-1 left-1 opacity-65" />
        <IslamicCorner position="bottom-right" size={45} className="bottom-1 right-1 opacity-65" />

        {/* Flanking Fanous Lanterns */}
        <div className="flex items-center justify-center space-x-3.5 sm:space-x-4 mb-3 sm:mb-4">
          <IslamicLantern height={40} className="opacity-90 sm:hidden" />
          <IslamicLantern height={50} className="opacity-90 hidden sm:inline-block" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 bg-[#C6A46A]" />
          <IslamicLantern height={40} className="opacity-90 sm:hidden" />
          <IslamicLantern height={50} className="opacity-90 hidden sm:inline-block" />
        </div>

        {/* Authentic Wedding Dua in Arabic */}
        {duaGreeting && (
          <div className="mb-3 sm:mb-4">
            <p 
              className="font-arabic text-lg min-[360px]:text-xl sm:text-2xl text-[#5C405C] font-bold leading-relaxed mb-1"
              dir="rtl"
              lang="ar"
            >
              {duaGreeting}
            </p>
            {duaTranslation && (
              <p className="text-[11px] sm:text-sm font-serif italic text-[#51474D] max-w-md mx-auto px-2">
                “{duaTranslation}”
              </p>
            )}
          </div>
        )}

        {/* Heartfelt Closing Message */}
        <p className="text-sm min-[360px]:text-base sm:text-lg md:text-xl font-serif text-[#51474D] leading-relaxed italic mb-3 sm:mb-4 max-w-xl mx-auto">
          "{closingMessage}"
        </p>

        {appreciationMessage && (
          <p className="text-xs sm:text-sm font-serif text-[#C6A46A] font-semibold mb-4 sm:mb-6">
            {appreciationMessage}
          </p>
        )}

        {/* Family Signature / Compliments */}
        <div className="border-t border-[#C6A46A]/30 pt-6 mt-4">
          <p className="text-xs uppercase tracking-widest text-[#C6A46A] font-sans font-semibold mb-2">
            {familySignature.complimentsText}
          </p>
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#5C405C] tracking-wide mb-1">
            {familySignature.families}
          </h4>
          <p className="text-xs sm:text-sm font-serif italic text-[#51474D]">
            {familySignature.subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingMessage;

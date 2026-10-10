import React from 'react';
import weddingConfig from '../data/invitation';
import KuthuVilakku from './KuthuVilakku';
import KolamCorner from './KolamCorner';

/**
 * Section E: Warm Closing Message & Family Signatures
 */
export const ClosingMessage = () => {
  const { closingMessage, familySignature } = weddingConfig;

  return (
    <section 
      id="closing" 
      aria-label="Closing Message and Blessings"
      className="relative px-4 py-8 sm:py-12 max-w-3xl mx-auto text-center"
    >
      <div className="relative bg-[#FFFDF8] rounded-2xl p-6 sm:p-10 border border-[#B08D57]/40 shadow-lg gold-frame">
        <KolamCorner position="top-left" size={45} className="top-1 left-1 opacity-60" />
        <KolamCorner position="top-right" size={45} className="top-1 right-1 opacity-60" />
        <KolamCorner position="bottom-left" size={45} className="bottom-1 left-1 opacity-60" />
        <KolamCorner position="bottom-right" size={45} className="bottom-1 right-1 opacity-60" />

        {/* Auspicious Diya Pair */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <KuthuVilakku height={50} className="opacity-90" />
          <div className="w-2 h-2 rotate-45 bg-[#B08D57]" />
          <KuthuVilakku height={50} className="opacity-90" />
        </div>

        {/* Heartfelt Closing Message */}
        <p className="text-base sm:text-lg md:text-xl font-serif text-[#382A22] leading-relaxed italic mb-8 max-w-xl mx-auto">
          "{closingMessage}"
        </p>

        {/* Family Signature / Compliments */}
        <div className="border-t border-[#B08D57]/30 pt-6 mt-4">
          <p className="text-xs uppercase tracking-widest text-[#8C6D3B] font-sans font-semibold mb-2">
            {familySignature.complimentsText}
          </p>
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#6D1F2A] tracking-wide mb-1">
            {familySignature.families}
          </h4>
          <p className="text-xs sm:text-sm font-serif italic text-[#6B5B52]">
            {familySignature.subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingMessage;

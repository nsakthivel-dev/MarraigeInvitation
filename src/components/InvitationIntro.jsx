import React from 'react';
import weddingConfig from '../data/invitation';
import DecorativeDivider from './DecorativeDivider';
import IslamicLantern from './IslamicLantern';

/**
 * Section A: Spiritual Introduction
 * Displays authentic Bismillah in Amiri Arabic calligraphy, English translation,
 * divine blessings, and heartfelt Islamic wedding invitation message.
 */
export const InvitationIntro = () => {
  return (
    <section 
      id="intro" 
      aria-label="Spiritual Introduction"
      className="relative text-center px-1 sm:px-4 py-6 sm:py-12 max-w-3xl mx-auto"
    >
      {/* Sacred Bismillah Header in Arabic Calligraphy */}
      <div className="flex flex-col items-center justify-center space-y-1 mb-3 sm:mb-4">
        <p 
          className="font-arabic text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl text-[#064E3B] font-bold tracking-normal leading-relaxed select-text"
          dir="rtl"
          lang="ar"
        >
          {weddingConfig.arabicGreeting}
        </p>
        <p className="text-[11px] sm:text-sm font-serif italic text-[#425F54] max-w-lg mx-auto px-2">
          “{weddingConfig.arabicGreetingTranslation}”
        </p>
      </div>

      {/* Flanking Fanous Lanterns & Medallion */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-10 my-3 sm:my-4">
        <IslamicLantern height={44} className="opacity-90 sm:hidden" />
        <IslamicLantern height={55} className="opacity-90 hidden sm:inline-block" />
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-serif text-[#064E3B] font-bold border-b border-[#C6A15B]/50 pb-0.5 sm:pb-1">
            {weddingConfig.bismillahHeader}
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#A47E35] italic font-serif mt-0.5 sm:mt-1">
            In the Name of Allah
          </span>
        </div>
        <IslamicLantern height={44} className="opacity-90 sm:hidden" />
        <IslamicLantern height={55} className="opacity-90 hidden sm:inline-block" />
      </div>

      {/* Main Refined Heading */}
      <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#064E3B] mt-2 mb-1.5 sm:mb-2 tracking-wide">
        {weddingConfig.invitationTitle}
      </h2>

      <p className="text-xs min-[360px]:text-sm sm:text-base font-serif italic text-[#9A7730] font-semibold mb-4 sm:mb-6">
        {weddingConfig.blessingsTitle}
      </p>

      {/* Heartfelt Invitation Message Card */}
      <div className="relative bg-[#FFFDF9]/90 border border-[#C6A15B]/35 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xs islamic-gold-frame">
        <p className="text-sm min-[360px]:text-base sm:text-lg md:text-xl font-serif text-[#17352C] leading-relaxed max-w-2xl mx-auto font-normal">
          {weddingConfig.invitationMessage}
        </p>
      </div>

      <DecorativeDivider icon="star" />
    </section>
  );
};

export default InvitationIntro;

import React from 'react';
import weddingConfig from '../data/invitation';
import DecorativeDivider from './DecorativeDivider';
import KuthuVilakku from './KuthuVilakku';

/**
 * Section A: Traditional Invitation Introduction
 * Displays divine invocations, elders' blessings, and heartfelt invitation text.
 */
export const InvitationIntro = () => {
  return (
    <section 
      id="intro" 
      aria-label="Invitation Introduction"
      className="relative text-center px-4 py-8 sm:py-12 max-w-3xl mx-auto"
    >
      {/* Traditional Auspicious Invocation Header */}
      <div className="flex flex-col items-center justify-center space-y-2 mb-4">
        <p className="text-sm sm:text-base font-serif font-bold tracking-widest text-[#B08D57]">
          {weddingConfig.traditionalInvocation}
        </p>
        <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#8C6D3B] font-medium">
          {weddingConfig.traditionalInvocationEnglish}
        </p>
      </div>

      {/* Flanking Kuthu Vilakku Lamps */}
      <div className="flex items-center justify-center space-x-6 sm:space-x-10 my-4">
        <KuthuVilakku height={60} className="opacity-90" />
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-serif text-[#6D1F2A] font-semibold border-b border-[#B08D57]/40 pb-1">
            Subhamasthu
          </span>
          <span className="text-[11px] text-[#8C6D3B] italic font-serif mt-1">
            Auspicious Union
          </span>
        </div>
        <KuthuVilakku height={60} className="opacity-90" />
      </div>

      {/* Main Refined Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] mt-2 mb-3 tracking-wide">
        Wedding Invitation
      </h2>

      <p className="text-sm sm:text-base font-serif italic text-[#8C6D3B] font-semibold mb-6">
        {weddingConfig.blessingsTitle}
      </p>

      {/* Heartfelt Invitation Message */}
      <div className="relative bg-[#FFFDF8]/70 border border-[#B08D57]/30 rounded-xl p-5 sm:p-7 shadow-xs">
        <p className="text-sm sm:text-base md:text-lg font-serif text-[#382A22] leading-relaxed max-w-2xl mx-auto">
          {weddingConfig.invitationMessage}
        </p>
      </div>

      <DecorativeDivider icon="diya" />
    </section>
  );
};

export default InvitationIntro;

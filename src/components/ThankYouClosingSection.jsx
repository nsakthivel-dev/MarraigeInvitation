import React from 'react';
import IslamicCorner from './IslamicCorner';
import IslamicLantern from './IslamicLantern';
import coupleIllustration from '../assets/pngtree-muslim-wedding-couple-in-traditional-attire-nikah-ceremony-vector-png-image_18072265.webp';

/**
 * ThankYouClosingSection: Grand Finale Islamic Wedding Closing & Thank You Section
 * 
 * Aesthetic Continuity with Cover Page:
 * - Deep plum background (#5C405C) with subtle star pattern (bg-emerald-pattern)
 * - Double champagne-gold filigree border & inset frame (#C6A46A / #E5D3A1)
 * - Authentic botanical watercolor floral corners in all 4 angles
 * - Balanced Cormorant Garamond typography in warm ivory (#FFFDF8) and soft lilac (#EAE2F6)
 * - Muslim wedding couple illustration as the central visual finale at the bottom
 */
export const ThankYouClosingSection = () => {
  return (
    <section 
      id="thank-you" 
      aria-label="A Heartfelt Thank You"
      className="relative w-full mt-8 sm:mt-12 md:mt-14"
    >
      {/* Outer Deep Plum & Gold Card Container matching the Cover Page */}
      <div 
        className="relative w-full rounded-2xl sm:rounded-3xl bg-[#5C405C] bg-emerald-pattern border-2 border-[#C6A46A]/70 shadow-2xl overflow-hidden select-text text-center"
        style={{
          boxShadow: '0 25px 60px -15px rgba(60, 34, 60, 0.7), 0 0 0 1px rgba(198, 164, 106, 0.45)',
        }}
      >
        {/* Four Authentic Botanical Floral Corners */}
        <IslamicCorner position="top-left" size={65} className="top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 opacity-80" />
        <IslamicCorner position="top-right" size={65} className="top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 opacity-80" />
        <IslamicCorner position="bottom-left" size={65} className="bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 opacity-80" />
        <IslamicCorner position="bottom-right" size={65} className="bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 opacity-80" />

        {/* Inner Filigree Inset Frame */}
        <div className="m-2 sm:m-4 md:m-5 border border-[#C6A46A]/40 rounded-xl sm:rounded-2xl p-5 sm:p-10 md:p-12 relative flex flex-col items-center">
          
          {/* Subtle Arch Inset Lines (matching door insets from Cover Page) */}
          <div className="absolute inset-x-8 top-4 bottom-4 border border-dashed border-[#C6A46A]/20 pointer-events-none rounded-lg hidden sm:block" />

          {/* 1. Subtle Islamic Ornamental Divider & Geometric Motif */}
          <div className="w-full flex flex-col items-center relative z-10 mb-2 sm:mb-3">
            {/* Flanking Lanterns Pair Accent */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-2">
              <IslamicLantern height={34} className="opacity-90 sm:hidden" />
              <IslamicLantern height={42} className="opacity-90 hidden sm:inline-block" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border border-[#E5D3A1] bg-[#C6A46A]/40" />
              <IslamicLantern height={34} className="opacity-90 sm:hidden" />
              <IslamicLantern height={42} className="opacity-90 hidden sm:inline-block" />
            </div>

            {/* Crescent & 8-Point Star Medallion Divider */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-[#E5D3A1]">
              <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C6A46A]" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5D3A1]" fill="none" aria-hidden="true">
                <path
                  d="M 14 4 C 8.5 4 4 8.5 4 14 C 4 18.5 7 22 11.5 22.8 C 8 21 6 17.5 6 14 C 6 9.5 9.5 6 14 4 Z"
                  fill="#E5D3A1"
                />
                <g transform="translate(16, 11) scale(0.6)">
                  <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" />
                  <rect x="-4" y="-4" width="8" height="8" fill="#C6A46A" rx="0.5" transform="rotate(45)" />
                </g>
              </svg>
              <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C6A46A]" />
            </div>

            {/* Subtle Arabic Inscription */}
            <p className="font-arabic text-sm sm:text-base text-[#EAE2F6] font-bold mt-1.5 opacity-90" dir="rtl" lang="ar">
              جَزَاكُمُ اللّٰهُ خَيْرًا
            </p>
          </div>

          {/* 2. Main Heading: “A Heartfelt Thank You” */}
          <div className="relative z-10 my-1 sm:my-2">
            <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-serif uppercase tracking-[0.22em] text-[#C6A46A] font-semibold block mb-1">
              With Sincere Gratitude &amp; Dua
            </span>
            <h3 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FFFDF8] tracking-tight leading-snug drop-shadow-sm px-2">
              A Heartfelt Thank You
            </h3>
          </div>

          {/* 3. The Thank-You Message */}
          <div className="relative z-10 max-w-xl mx-auto my-3 sm:my-5 px-3">
            <p className="text-sm min-[360px]:text-base sm:text-lg md:text-xl font-serif italic text-[#FFFDF8] leading-relaxed tracking-wide drop-shadow-xs">
              “With grateful hearts, we thank you for your love, prayers, blessings, and presence. Your good wishes make our special day even more meaningful. May Allah bless you and your family with peace, happiness, and countless blessings.”
            </p>
          </div>

          {/* 4. Fine Gold Divider / Elegant Ornamental Separator */}
          <div className="relative z-10 w-full flex items-center justify-center my-3 sm:my-4" aria-hidden="true">
            <div className="flex items-center flex-1 max-w-[80px] min-[360px]:max-w-[110px] sm:max-w-[150px]">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A46A]/70" />
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A46A]/20 via-[#C6A46A]/70 to-[#C6A46A]" />
              <div className="w-2 h-2 rotate-45 border border-[#E5D3A1] ml-1 bg-[#5C405C]" />
            </div>

            <div className="mx-2 sm:mx-3 text-[#E5D3A1]">
              <svg viewBox="0 0 20 20" className="w-4 h-4 sm:w-5 sm:h-5" fill="none">
                <g transform="translate(10, 10)">
                  <rect x="-5" y="-5" width="10" height="10" fill="#C6A46A" fillOpacity="0.3" stroke="#E5D3A1" strokeWidth="1" rx="0.5" />
                  <rect x="-5" y="-5" width="10" height="10" fill="#C6A46A" fillOpacity="0.3" stroke="#E5D3A1" strokeWidth="1" rx="0.5" transform="rotate(45)" />
                  <circle cx="0" cy="0" r="1.8" fill="#E5D3A1" />
                </g>
              </svg>
            </div>

            <div className="flex items-center flex-1 max-w-[80px] min-[360px]:max-w-[110px] sm:max-w-[150px]">
              <div className="w-2 h-2 rotate-45 border border-[#E5D3A1] mr-1 bg-[#5C405C]" />
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A46A] via-[#C6A46A]/70 to-[#C6A46A]/20" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A46A]/70" />
            </div>
          </div>

          {/* 5. Closing Line: “With love and gratitude, The Bride & Groom” */}
          <div className="relative z-10 text-center mb-5 sm:mb-7">
            <p className="text-xs min-[360px]:text-sm sm:text-base font-serif italic text-[#EAE2F6] tracking-wide mb-1">
              With love and gratitude,
            </p>
            <p className="text-base min-[360px]:text-lg sm:text-2xl font-serif font-bold text-[#FFFDF8] tracking-wide">
              The Bride &amp; Groom
            </p>
          </div>

          {/* 6. Bride & Groom Illustration at the Bottom (Visual Finale) */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center pt-1 pb-4 sm:pb-6">
            
            {/* Subtle Arch Halo & Soft Lighting behind couple figures for seamless blend */}
            <div className="relative w-full max-w-[280px] min-[360px]:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] flex items-center justify-center">
              
              {/* Soft Radial Backlight Glow matching cover lighting */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none opacity-40 blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(216, 201, 239, 0.45) 0%, rgba(92, 64, 92, 0) 70%)',
                }}
                aria-hidden="true"
              />

              {/* Delicate Arch Outline Backdrop */}
              <div 
                className="absolute -top-3 inset-x-4 bottom-2 border border-[#C6A46A]/30 rounded-t-full pointer-events-none opacity-60"
                aria-hidden="true"
              />

              {/* Centered Couple Illustration: Full Figures Visible, object-fit: contain */}
              <img
                src={coupleIllustration}
                alt="Muslim Bride and Groom in Traditional Wedding Attire"
                width={360}
                height={360}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-auto max-h-[340px] sm:max-h-[380px] md:max-h-[420px] object-contain drop-shadow-[0_12px_24px_rgba(60,34,60,0.85)] filter transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* 7. Tasteful Champagne Gold Geometric Ornament below the Illustration */}
            <div className="mt-4 flex items-center justify-center space-x-2 text-[#C6A46A] opacity-80" aria-hidden="true">
              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C6A46A]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#E5D3A1]" />
              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C6A46A]" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ThankYouClosingSection;

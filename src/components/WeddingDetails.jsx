import React from 'react';
import { Calendar, Clock, Moon, MapPin } from 'lucide-react';
import weddingConfig from '../data/invitation';
import DecorativeDivider from './DecorativeDivider';
import IslamicCorner from './IslamicCorner';
import CountdownTimer from './CountdownTimer';

/**
 * Section C: The Nikah Ceremony & Celebrations
 * All timings, dates, and event programs read from centralized config.
 */
export const WeddingDetails = () => {
  const { displayDate, dayOfWeek, hijriDate, nikah, ceremonies, venue, groom, bride } = weddingConfig;

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    try {
      const title = encodeURIComponent(`Nikah: ${groom.name} & ${bride.name}`);
      const details = encodeURIComponent(
        `Sacred Nikah Ceremony of ${groom.name} & ${bride.name}.\n` +
        `Time: ${nikah.time}\n` +
        `Venue: ${venue.name}, ${venue.city}\n` +
        `Address: ${venue.streetAddress}`
      );
      const location = encodeURIComponent(`${venue.name}, ${venue.streetAddress}, ${venue.city}`);
      
      const startDate = new Date(weddingConfig.weddingDateISO);
      const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

      const formatCalTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
      const datesParam = `${formatCalTime(startDate)}/${formatCalTime(endDate)}`;

      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${datesParam}&details=${details}&location=${location}`;
    } catch {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Nikah Ceremony')}`;
    }
  };

  return (
    <section 
      id="ceremonies" 
      aria-label="Nikah Ceremony and Celebrations"
      className="relative px-4 py-8 sm:py-12 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#9A7730] font-semibold font-sans">
          Auspicious Occasion
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#064E3B] mt-1">
          {nikah.title}
        </h3>
        <p className="text-xs sm:text-sm font-serif italic text-[#425F54] mt-2">
          {nikah.ceremonyNote}
        </p>
      </div>

      {/* Main Nikah Ceremony Banner Card */}
      <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-[#C6A15B]/50 shadow-xl islamic-gold-frame mb-6 sm:mb-10 text-center">
        <IslamicCorner position="top-left" size={60} className="top-1 left-1 opacity-75" />
        <IslamicCorner position="top-right" size={60} className="top-1 right-1 opacity-75" />
        <IslamicCorner position="bottom-left" size={60} className="bottom-1 left-1 opacity-75" />
        <IslamicCorner position="bottom-right" size={60} className="bottom-1 right-1 opacity-75" />

        {/* Crescent Badge */}
        <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#E8F3EE] border border-[#064E3B]/25 mb-3 sm:mb-4">
          <Moon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#064E3B]" />
          <span className="text-[11px] sm:text-sm font-serif font-bold tracking-wider text-[#064E3B] uppercase">
            {nikah.title}
          </span>
        </div>

        {/* Date Display */}
        <h4 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#064E3B] tracking-tight">
          {displayDate}
        </h4>
        
        {dayOfWeek && (
          <p className="text-[11px] sm:text-xs uppercase tracking-widest font-sans font-semibold text-[#9A7730] mt-1">
            {dayOfWeek}
          </p>
        )}
        
        {hijriDate && (
          <p className="text-xs sm:text-sm font-serif text-[#425F54] font-medium mt-1">
            Islamic Calendar: {hijriDate}
          </p>
        )}

        {/* Nikah Ceremony Time & Venue Highlighting */}
        <div className="my-4 sm:my-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 bg-[#FAF7EF]/90 px-3.5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-[#C6A15B]/35 shadow-xs w-full sm:w-auto">
          <div className="flex items-center space-x-2 text-[#17352C]">
            <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#C6A15B]" />
            <span className="text-base sm:text-xl font-serif font-bold text-[#064E3B]">
              {nikah.time}
            </span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />

          <div className="flex items-center space-x-2 text-[#425F54]">
            <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#C6A15B]" />
            <span className="text-xs sm:text-sm font-serif font-semibold tracking-wide text-[#17352C] truncate max-w-[260px] sm:max-w-none">
              {venue.name}
            </span>
          </div>
        </div>

        {/* Add to Google Calendar Action */}
        <div className="w-full">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] space-x-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] hover:bg-[#FAF7EF] text-[#064E3B] text-xs sm:text-sm font-serif font-bold border border-[#C6A15B]/70 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-[#C6A15B]" />
            <span>Add Nikah to Google Calendar</span>
          </a>
        </div>
      </div>

      {/* Live Time Counter (Countdown to the Nikah) */}
      <CountdownTimer />

      {/* Additional Celebrations Timeline (Walima, Reception) */}
      {ceremonies && ceremonies.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          <h4 className="text-base sm:text-xl font-serif font-bold text-center text-[#064E3B] tracking-wide mb-4 sm:mb-6">
            Program of Wedding Celebrations
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 max-w-3xl mx-auto">
            {ceremonies.map((ceremony) => (
              <div 
                key={ceremony.id}
                className="bg-[#FFFDF9] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#C6A15B]/35 shadow-md flex flex-col justify-between hover:border-[#C6A15B] transition-colors"
              >
                <div>
                  <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-[#9A7730] bg-[#FAF7EF] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm border border-[#C6A15B]/30">
                    {ceremony.accent}
                  </span>

                  <h5 className="text-base sm:text-lg font-serif font-bold text-[#064E3B] mt-2.5 sm:mt-3 mb-1">
                    {ceremony.title}
                  </h5>

                  <p className="text-xs font-sans font-semibold text-[#9A7730] mb-1.5 sm:mb-2 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{ceremony.date}</span>
                  </p>

                  <p className="text-xs font-sans text-[#17352C] font-medium flex items-center space-x-1.5 mb-2.5 sm:mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{ceremony.time}</span>
                  </p>

                  <p className="text-xs sm:text-sm font-serif text-[#425F54] leading-relaxed">
                    {ceremony.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <DecorativeDivider icon="star" />
    </section>
  );
};

export default WeddingDetails;

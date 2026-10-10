import React from 'react';
import { Calendar, Clock, Sun, Sparkles } from 'lucide-react';
import weddingConfig from '../data/invitation';
import DecorativeDivider from './DecorativeDivider';
import KolamCorner from './KolamCorner';

/**
 * Section C: Auspicious Wedding Date, Muhurtham & Ceremonies
 * All timings, dates, and rituals read directly from centralized config.
 */
export const WeddingDetails = () => {
  const { displayDate, dayOfWeek, tamilDate, muhurtham, ceremonies, venue, groom, bride } = weddingConfig;

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    try {
      const title = encodeURIComponent(`Wedding: ${groom.name} & ${bride.name}`);
      const details = encodeURIComponent(
        `Auspicious Wedding Ceremony & Muhurtham of ${groom.name} & ${bride.name}.\n` +
        `Muhurtham: ${muhurtham.time}\n` +
        `Venue: ${venue.name}, ${venue.city}`
      );
      const location = encodeURIComponent(`${venue.name}, ${venue.streetAddress}, ${venue.city}`);
      
      // Convert weddingDateISO to YYYYMMDDTHHMMSSZ
      const startDate = new Date(weddingConfig.weddingDateISO);
      const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4 hours duration

      const formatCalTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
      const datesParam = `${formatCalTime(startDate)}/${formatCalTime(endDate)}`;

      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${datesParam}&details=${details}&location=${location}`;
    } catch {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Wedding Ceremony')}`;
    }
  };

  return (
    <section 
      id="ceremonies" 
      aria-label="Wedding Date and Ceremonies"
      className="relative px-4 py-8 sm:py-12 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold font-sans">
          Auspicious Timings
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] mt-1">
          Date & Muhurtham
        </h3>
        <p className="text-xs sm:text-sm font-serif italic text-[#6B5B52] mt-2">
          {muhurtham.subhaMuhurthamNote}
        </p>
      </div>

      {/* Main Muhurtham Banner Card */}
      <div className="relative bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#B08D57]/50 shadow-xl gold-frame mb-8 sm:mb-10 text-center">
        <KolamCorner position="top-left" size={60} className="top-1 left-1 opacity-70" />
        <KolamCorner position="top-right" size={60} className="top-1 right-1 opacity-70" />
        <KolamCorner position="bottom-left" size={60} className="bottom-1 left-1 opacity-70" />
        <KolamCorner position="bottom-right" size={60} className="bottom-1 right-1 opacity-70" />

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F5EBEB] border border-[#6D1F2A]/30 mb-4">
          <Sun className="w-4 h-4 text-[#6D1F2A]" />
          <span className="text-xs sm:text-sm font-serif font-bold tracking-wider text-[#6D1F2A] uppercase">
            {muhurtham.title}
          </span>
        </div>

        {/* Date Display */}
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] tracking-tight">
          {displayDate}
        </h4>
        
        {dayOfWeek && (
          <p className="text-xs uppercase tracking-widest font-sans font-semibold text-[#8C6D3B] mt-1">
            {dayOfWeek}
          </p>
        )}
        
        {tamilDate && (
          <p className="text-xs sm:text-sm font-serif text-[#8C6D3B] font-medium mt-1">
            {tamilDate}
          </p>
        )}

        {/* Auspicious Muhurtham Time Highlighting */}
        <div className="my-6 inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 bg-[#F8F1E3]/80 px-6 py-4 rounded-xl border border-[#B08D57]/30">
          <div className="flex items-center space-x-2.5 text-[#382A22]">
            <Clock className="w-5 h-5 text-[#B08D57]" />
            <span className="text-lg sm:text-xl font-serif font-bold text-[#6D1F2A]">
              {muhurtham.time}
            </span>
          </div>

          {muhurtham.lagnam && (
            <div className="flex items-center space-x-2 text-[#8C6D3B]">
              <Sparkles className="w-4 h-4 text-[#B08D57]" />
              <span className="text-xs sm:text-sm font-serif font-semibold tracking-wide">
                {muhurtham.lagnam}
              </span>
            </div>
          )}
        </div>

        {/* Add to Calendar Action */}
        <div>
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFFDF8] hover:bg-[#F8F1E3] text-[#6D1F2A] text-xs sm:text-sm font-serif font-bold border border-[#B08D57]/70 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-[#B08D57]" />
            <span>Add Wedding to Google Calendar</span>
          </a>
        </div>
      </div>

      {/* Additional Ceremonies Timeline (Reception, Nalangu, etc.) */}
      {ceremonies && ceremonies.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          <h4 className="text-lg sm:text-xl font-serif font-bold text-center text-[#6D1F2A] tracking-wide mb-6">
            Program of Auspicious Events
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {ceremonies.map((ceremony) => (
              <div 
                key={ceremony.id}
                className="bg-[#FFFDF8] rounded-xl p-5 sm:p-6 border border-[#B08D57]/30 shadow-md flex flex-col justify-between hover:border-[#B08D57] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#B08D57] bg-[#F8F1E3] px-2.5 py-1 rounded-sm border border-[#B08D57]/20">
                    {ceremony.accent}
                  </span>

                  <h5 className="text-base sm:text-lg font-serif font-bold text-[#6D1F2A] mt-3 mb-1">
                    {ceremony.title}
                  </h5>

                  <p className="text-xs font-sans font-semibold text-[#8C6D3B] mb-2 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>{ceremony.date}</span>
                  </p>

                  <p className="text-xs font-sans text-[#382A22] font-medium flex items-center space-x-1.5 mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>{ceremony.time}</span>
                  </p>

                  <p className="text-xs sm:text-sm font-serif text-[#6B5B52] leading-relaxed">
                    {ceremony.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <DecorativeDivider icon="diya" />
    </section>
  );
};

export default WeddingDetails;

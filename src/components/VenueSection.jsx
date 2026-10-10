import React from 'react';
import { Navigation, MapPin } from 'lucide-react';
import weddingConfig from '../data/invitation';
import DecorativeDivider from './DecorativeDivider';
import IslamicCorner from './IslamicCorner';

/**
 * Section D: Wedding Venue & Google Maps Directions
 * Displays complete address, banquet hall details, and direct navigation links.
 */
export const VenueSection = () => {
  const { venue } = weddingConfig;

  return (
    <section 
      id="venue" 
      aria-label="Wedding Venue & Directions"
      className="relative px-1 sm:px-4 py-6 sm:py-12 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-10">
        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9A7730] font-semibold font-sans">
          Celebration Location
        </span>
        <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#064E3B] mt-1">
          The Wedding Venue
        </h3>
      </div>

      {/* Main Venue Card */}
      <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#C6A15B]/40 shadow-xl islamic-gold-frame text-center">
        <IslamicCorner position="top-left" size={55} className="top-1 left-1 opacity-75" />
        <IslamicCorner position="top-right" size={55} className="top-1 right-1 opacity-75" />
        <IslamicCorner position="bottom-left" size={55} className="bottom-1 left-1 opacity-75" />
        <IslamicCorner position="bottom-right" size={55} className="bottom-1 right-1 opacity-75" />

        {/* Islamic Architecture / Location Medallion */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#E8F3EE] border border-[#064E3B]/30 flex items-center justify-center mb-3 sm:mb-4 text-[#064E3B] shadow-xs">
          <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#064E3B]" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Mosque Arch & Minaret Dome Silhouette */}
            <path d="M 12 3 C 9.5 6 7 8 7 13 L 17 13 C 17 8 14.5 6 12 3 Z" fill="#064E3B" fillOpacity="0.15" />
            <path d="M 5 21 L 5 14 L 19 14 L 19 21" />
            <path d="M 9 21 L 9 17 C 9 15.5 15 15.5 15 17 L 15 21" fill="#064E3B" fillOpacity="0.25" />
            <circle cx="12" cy="2" r="0.75" fill="#C6A15B" />
          </svg>
        </div>

        {/* Venue Name */}
        <h4 className="text-xl min-[360px]:text-2xl sm:text-3xl font-serif font-bold text-[#064E3B] tracking-tight mb-1.5 sm:mb-2">
          {venue.name}
        </h4>

        {venue.hallName && (
          <p className="text-xs sm:text-sm font-sans font-semibold text-[#9A7730] tracking-wider uppercase mb-3 sm:mb-4">
            {venue.hallName}
          </p>
        )}

        {/* Address Lines */}
        <div className="max-w-md mx-auto space-y-1 text-[#17352C] font-serif text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
          <p>{venue.streetAddress}</p>
          <p>{venue.area}, {venue.city}</p>
          <p>{venue.state} – {venue.pincode}</p>
          {venue.landmark && (
            <p className="text-xs sm:text-sm text-[#425F54] font-sans font-medium mt-1.5 sm:mt-2 flex items-center justify-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Landmark: {venue.landmark}</span>
            </p>
          )}
        </div>

        {/* Get Directions Button (Opens Google Maps) */}
        <div className="pt-1 sm:pt-2 w-full">
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${venue.name} on Google Maps`}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] space-x-2.5 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#E5D3A1] text-[#FAF7EF]"
            style={{
              background: 'linear-gradient(135deg, #0B3D2E 0%, #064E3B 55%, #032B20 100%)',
              boxShadow: '0 8px 24px -3px rgba(3, 43, 32, 0.45)',
            }}
          >
            <Navigation className="w-4 h-4 text-[#E5D3A1] group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xs min-[360px]:text-sm sm:text-base font-serif font-bold tracking-wider uppercase">
              Get Directions on Google Maps
            </span>
          </a>
        </div>
      </div>

      <DecorativeDivider icon="crescent" />
    </section>
  );
};

export default VenueSection;

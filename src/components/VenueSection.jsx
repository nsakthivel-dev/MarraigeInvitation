import React from 'react';
import { Navigation, Building2 } from 'lucide-react';
import weddingConfig from '../data/invitation';
import DecorativeDivider from './DecorativeDivider';
import KolamCorner from './KolamCorner';

/**
 * Section D: Wedding Venue & Google Maps Directions
 * Displays complete address, mandapam hall details, and direct navigation links.
 */
export const VenueSection = () => {
  const { venue } = weddingConfig;

  return (
    <section 
      id="venue" 
      aria-label="Wedding Venue & Directions"
      className="relative px-4 py-8 sm:py-12 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10">
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold font-sans">
          Celebration Location
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6D1F2A] mt-1">
          The Wedding Venue
        </h3>
      </div>

      {/* Main Venue Card */}
      <div className="relative bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#B08D57]/40 shadow-xl gold-frame text-center">
        <KolamCorner position="top-left" size={55} className="top-1 left-1 opacity-70" />
        <KolamCorner position="top-right" size={55} className="top-1 right-1 opacity-70" />
        <KolamCorner position="bottom-left" size={55} className="bottom-1 left-1 opacity-70" />
        <KolamCorner position="bottom-right" size={55} className="bottom-1 right-1 opacity-70" />

        {/* Temple / Mandapam Icon */}
        <div className="w-14 h-14 mx-auto rounded-full bg-[#F5EBEB] border border-[#6D1F2A]/30 flex items-center justify-center mb-4 text-[#6D1F2A]">
          <Building2 className="w-7 h-7 text-[#6D1F2A]" />
        </div>

        {/* Venue Name */}
        <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#6D1F2A] tracking-tight mb-2">
          {venue.name}
        </h4>

        {venue.hallName && (
          <p className="text-sm font-sans font-semibold text-[#B08D57] tracking-wider uppercase mb-4">
            {venue.hallName}
          </p>
        )}

        {/* Address Lines */}
        <div className="max-w-md mx-auto space-y-1 text-[#382A22] font-serif text-base sm:text-lg mb-6">
          <p>{venue.streetAddress}</p>
          <p>{venue.area}, {venue.city}</p>
          <p>{venue.state} – {venue.pincode}</p>
          {venue.landmark && (
            <p className="text-xs sm:text-sm text-[#8C6D3B] font-sans font-medium mt-2">
              Landmark: {venue.landmark}
            </p>
          )}
        </div>

        {/* Get Directions Button (Opens Google Maps) */}
        <div className="pt-2">
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${venue.name} on Google Maps`}
            className="group relative inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#DFC794] text-[#FFFDF8]"
            style={{
              background: 'linear-gradient(135deg, #8E2B3A 0%, #6D1F2A 50%, #4A131C 100%)',
              boxShadow: '0 8px 20px -3px rgba(109, 31, 42, 0.4)',
            }}
          >
            <Navigation className="w-4 h-4 text-[#DFC794] group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-sm sm:text-base font-serif font-bold tracking-wider uppercase">
              Get Directions on Google Maps
            </span>
          </a>
        </div>
      </div>

      <DecorativeDivider icon="lotus" />
    </section>
  );
};

export default VenueSection;

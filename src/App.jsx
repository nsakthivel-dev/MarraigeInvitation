import React, { useState } from 'react';
import weddingConfig from './data/invitation';
import OpeningCard from './components/OpeningCard';
import HeaderNav from './components/HeaderNav';
import IslamicArchBorder from './components/IslamicArchBorder';
import InvitationIntro from './components/InvitationIntro';
import CoupleSection from './components/CoupleSection';
import WeddingDetails from './components/WeddingDetails';
import VenueSection from './components/VenueSection';
import ClosingMessage from './components/ClosingMessage';
import ShareSection from './components/ShareSection';
import MusicToggle from './components/MusicToggle';
import IslamicCorner from './components/IslamicCorner';
import ThankYouClosingSection from './components/ThankYouClosingSection';
import useAutoScroll from './hooks/useAutoScroll';

function App() {
  const [isCardOpen, setIsCardOpen] = useState(() => {
    return typeof window !== 'undefined' && window.location.search.includes('open=true');
  });

  // Cinematic automatic vertical scrolling once the invitation opens
  useAutoScroll({
    isActive: isCardOpen,
    speed: 36, // comfortable reading speed in px/sec
    startDelay: 1100, // 950ms overlay unmount + 150ms settle buffer
    idleResumeDelay: 3000, // pause during user manual gestures, resume after 3s idle
  });

  const handleOpenInvitation = () => {
    setIsCardOpen(true);
    // Reset scroll to top immediately when opening
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  const handleReplayCover = () => {
    setIsCardOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-islamic-stationery text-[#51474D] selection:bg-[#F4C6D5] selection:text-[#5C405C] relative overflow-x-hidden">
      
      {/* 1. PRIORITY OPENING SCREEN: Fullscreen 3D Unfolding Islamic Invitation Card Cover */}
      <OpeningCard 
        isOpen={isCardOpen} 
        onOpen={handleOpenInvitation} 
      />

      {/* 2. REVEALED INVITATION CONTENT: Unfolded Single-Page Islamic Wedding Invitation */}
      <div 
        className={`invitation-reveal relative z-10 transition-all duration-700 ${
          isCardOpen ? 'is-visible opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none max-h-screen overflow-hidden'
        }`}
      >
        {/* Top Navigation Bar with Re-close Cover & Jump links */}
        <HeaderNav onReplayCover={handleReplayCover} />

        {/* Traditional Islamic Moorish Arch & Geometric Crest Border */}
        <IslamicArchBorder className="opacity-90" />

        {/* Main Content Container with Warm Ivory Stationery Card Frame */}
        <main className="max-w-4xl mx-auto px-2.5 sm:px-6 pt-4 pb-16 sm:py-10">
          
          <div className="relative bg-[#F8EEF5] rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#C6A46A]/50 p-3.5 sm:p-8 md:p-12 islamic-gold-frame">
            
            {/* Majestic Islamic Geometric 8-Pointed Star Corners */}
            <IslamicCorner position="top-left" size={80} className="top-1 left-1 sm:top-2 sm:left-2 opacity-70" />
            <IslamicCorner position="top-right" size={80} className="top-1 right-1 sm:top-2 sm:right-2 opacity-70" />
            <IslamicCorner position="bottom-left" size={80} className="bottom-1 left-1 sm:bottom-2 sm:left-2 opacity-70" />
            <IslamicCorner position="bottom-right" size={80} className="bottom-1 right-1 sm:bottom-2 sm:right-2 opacity-70" />

            {/* Section A: Spiritual Invocations & Heartfelt Message */}
            <InvitationIntro />

            {/* Section B: The Couple (Visual Centerpiece) */}
            <CoupleSection />

            {/* Section C: Wedding Date, Nikah Ceremony & Celebrations */}
            <WeddingDetails />

            {/* Section D: Venue & Google Maps Directions */}
            <VenueSection />

            {/* Section E: Closing Message, Dua & Family Signature */}
            <ClosingMessage />

            {/* Section F: WhatsApp & Link Sharing */}
            <ShareSection />

          </div>

          {/* Section G: Closing Thank-You & Couple Visual Finale — Rose Pink & Lavender Floral Theme */}
          <ThankYouClosingSection />

        </main>

        {/* Refined Islamic Invitation Footer */}
        <footer className="text-center py-10 px-4 text-xs font-serif text-[#C6A46A] border-t border-[#C6A46A]/30 mt-12 bg-[#F8EEF5]">
          <p className="text-sm font-bold text-[#5C405C] mb-1">
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </p>
          <p className="italic text-[#51474D]">
            {weddingConfig.displayDate} • {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
          <p className="text-[11px] text-[#51474D] mt-3 font-sans">
            May Allah bless this union with everlasting love, harmony, and barakah.
          </p>
        </footer>
      </div>

      {/* 3. OPTIONAL TRADITIONAL MUSIC & AMBIENT SOUND TOGGLE (Accessible & Never Autoplay) */}
      <MusicToggle />

    </div>
  );
}

export default App;

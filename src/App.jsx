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

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsCardOpen(true);
    // Smoothly scroll to top of revealed invitation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayCover = () => {
    setIsCardOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-islamic-stationery text-[#17352C] selection:bg-[#064E3B] selection:text-[#FAF7EF] relative overflow-x-hidden">
      
      {/* 1. PRIORITY OPENING SCREEN: Fullscreen 3D Unfolding Islamic Invitation Card Cover */}
      <OpeningCard 
        isOpen={isCardOpen} 
        onOpen={handleOpenInvitation} 
      />

      {/* 2. REVEALED INVITATION CONTENT: Unfolded Single-Page Islamic Wedding Invitation */}
      <div 
        className={`invitation-reveal transition-all duration-700 ${
          isCardOpen ? 'is-visible' : 'opacity-0 pointer-events-none max-h-screen overflow-hidden'
        }`}
      >
        {/* Top Navigation Bar with Re-close Cover & Jump links */}
        <HeaderNav onReplayCover={handleReplayCover} />

        {/* Traditional Islamic Moorish Arch & Geometric Crest Border */}
        <IslamicArchBorder className="opacity-90" />

        {/* Main Content Container with Warm Ivory Stationery Card Frame */}
        <main className="max-w-4xl mx-auto px-2.5 sm:px-6 py-4 sm:py-10">
          
          <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#C6A15B]/50 p-3.5 sm:p-8 md:p-12 islamic-gold-frame">
            
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

        </main>

        {/* Refined Islamic Invitation Footer */}
        <footer className="text-center py-10 px-4 text-xs font-serif text-[#9A7730] border-t border-[#C6A15B]/25 mt-12 bg-[#F4EFE2]/70">
          <p className="text-sm font-bold text-[#064E3B] mb-1">
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </p>
          <p className="italic text-[#425F54]">
            {weddingConfig.displayDate} • {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
          <p className="text-[11px] text-[#425F54] mt-3 font-sans">
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

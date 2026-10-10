import React, { useState } from 'react';
import weddingConfig from './data/invitation';
import OpeningCard from './components/OpeningCard';
import HeaderNav from './components/HeaderNav';
import ToranamGarland from './components/ToranamGarland';
import InvitationIntro from './components/InvitationIntro';
import CoupleSection from './components/CoupleSection';
import WeddingDetails from './components/WeddingDetails';
import VenueSection from './components/VenueSection';
import ClosingMessage from './components/ClosingMessage';
import ShareSection from './components/ShareSection';
import MusicToggle from './components/MusicToggle';
import KolamCorner from './components/KolamCorner';

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
    <div className="min-h-screen bg-silk-pattern text-[#382A22] selection:bg-[#6D1F2A] selection:text-[#FFFDF8] relative overflow-x-hidden">
      
      {/* 1. PRIORITY OPENING SCREEN: Fullscreen 3D Unfolding Invitation Card */}
      <OpeningCard 
        isOpen={isCardOpen} 
        onOpen={handleOpenInvitation} 
      />

      {/* 2. REVEALED INVITATION CONTENT: Unfolded Single-Page Invitation */}
      <div 
        className={`invitation-reveal transition-all duration-700 ${
          isCardOpen ? 'is-visible' : 'opacity-0 pointer-events-none max-h-screen overflow-hidden'
        }`}
      >
        {/* Top Navigation Bar with Re-close Cover & Jump links */}
        <HeaderNav onReplayCover={handleReplayCover} />

        {/* Traditional Maavilai (Mango Leaves) Auspicious Doorway Garland */}
        <ToranamGarland className="opacity-90" />

        {/* Main Content Container with Traditional Ivory/Cream Card Frame */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          
          <div className="relative bg-[#FFFDF8] rounded-3xl shadow-2xl border-2 border-[#B08D57]/50 p-4 sm:p-8 md:p-12 gold-frame">
            
            {/* Majestic Outer Kolams on Main Card Container */}
            <KolamCorner position="top-left" size={80} className="top-2 left-2 opacity-65" />
            <KolamCorner position="top-right" size={80} className="top-2 right-2 opacity-65" />
            <KolamCorner position="bottom-left" size={80} className="bottom-2 left-2 opacity-65" />
            <KolamCorner position="bottom-right" size={80} className="bottom-2 right-2 opacity-65" />

            {/* Section A: Traditional Invocations & Heartfelt Message */}
            <InvitationIntro />

            {/* Section B: The Couple (Visual Centerpiece) */}
            <CoupleSection />

            {/* Section C: Wedding Date, Auspicious Muhurtham & Ceremonies */}
            <WeddingDetails />

            {/* Section D: Venue & Google Maps Directions */}
            <VenueSection />

            {/* Section E: Closing Message & Family Signature */}
            <ClosingMessage />

            {/* Section F: WhatsApp & Link Sharing */}
            <ShareSection />

          </div>

        </main>

        {/* Traditional Footer */}
        <footer className="text-center py-10 px-4 text-xs font-serif text-[#8C6D3B] border-t border-[#B08D57]/20 mt-12 bg-[#FAF4E8]">
          <p className="text-sm font-bold text-[#6D1F2A] mb-1">
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </p>
          <p className="italic">
            {weddingConfig.displayDate} • {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
          <p className="text-[11px] text-[#6B5B52] mt-3 font-sans">
            May your gracious presence and blessings enrich our auspicious celebration.
          </p>
        </footer>
      </div>

      {/* 3. OPTIONAL TRADITIONAL MUSIC & SOUND TOGGLE (Accessible & Never Autoplay) */}
      <MusicToggle />

    </div>
  );
}

export default App;

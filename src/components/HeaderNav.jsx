import React from 'react';
import { Mail, Navigation, Calendar, Share2 } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Top Header Navigation Bar
 * Discreet, elegant, traditional header with quick jumps and a button to re-close the card cover.
 */
export const HeaderNav = ({ onReplayCover }) => {
  const { groom, bride } = weddingConfig;

  return (
    <header className="sticky top-0 z-30 w-full bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#B08D57]/30 shadow-xs transition-all">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Couple Initials or Names */}
        <div className="flex items-center space-x-2">
          <span className="font-serif font-bold text-base sm:text-lg text-[#6D1F2A] tracking-wide">
            {groom.name.split(' ')[0]} & {bride.name.split(' ')[0]}
          </span>
          <span className="hidden sm:inline text-xs text-[#8C6D3B] font-serif italic">
            | Wedding Invitation
          </span>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <a
            href="#ceremonies"
            className="hidden md:inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-serif text-[#382A22] hover:text-[#6D1F2A] hover:bg-[#F8F1E3] rounded-md transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>Muhurtham</span>
          </a>

          <a
            href="#venue"
            className="hidden md:inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-serif text-[#382A22] hover:text-[#6D1F2A] hover:bg-[#F8F1E3] rounded-md transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>Venue</span>
          </a>

          <a
            href="#share"
            className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-serif text-[#382A22] hover:text-[#6D1F2A] hover:bg-[#F8F1E3] rounded-md transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>Share</span>
          </a>

          {/* Replay Opening Card Cover Button */}
          <button
            type="button"
            onClick={onReplayCover}
            aria-label="View opening invitation card cover again"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#F8F1E3] hover:bg-[#F5E8C7] border border-[#B08D57]/50 text-xs font-serif font-bold text-[#6D1F2A] shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>View Card Cover</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default HeaderNav;

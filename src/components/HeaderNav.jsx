import React from 'react';
import { Mail, Navigation, Calendar, Share2 } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Top Header Navigation Bar
 * Discreet, elegant header with quick jump links and a button to view the opening card cover again.
 */
export const HeaderNav = ({ onReplayCover }) => {
  const { groom, bride } = weddingConfig;

  return (
    <header className="sticky top-0 z-30 w-full bg-[#FAF7EF]/90 backdrop-blur-md border-b border-[#C6A15B]/30 shadow-xs transition-all">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between">
        
        {/* Couple Initials or Names */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
          <span className="font-serif font-bold text-sm sm:text-lg text-[#064E3B] tracking-wide truncate max-w-[140px] min-[360px]:max-w-[180px] sm:max-w-none">
            {groom.name.split(' ')[0]} & {bride.name.split(' ')[0]}
          </span>
          <span className="hidden sm:inline text-xs text-[#9A7730] font-serif italic flex-shrink-0">
            | Wedding Invitation
          </span>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
          <a
            href="#ceremonies"
            className="hidden md:inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-serif text-[#17352C] hover:text-[#064E3B] hover:bg-[#E8F3EE] rounded-md transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Nikah</span>
          </a>

          <a
            href="#venue"
            className="hidden md:inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-serif text-[#17352C] hover:text-[#064E3B] hover:bg-[#E8F3EE] rounded-md transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Venue</span>
          </a>

          <a
            href="#share"
            className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-serif text-[#17352C] hover:text-[#064E3B] hover:bg-[#E8F3EE] rounded-md transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Share</span>
          </a>

          {/* Replay Opening Card Cover Button */}
          <button
            type="button"
            onClick={onReplayCover}
            aria-label="View opening invitation card cover again"
            className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-[#E8F3EE] hover:bg-[#FAF7EF] border border-[#C6A15B]/50 text-[11px] sm:text-xs font-serif font-bold text-[#064E3B] shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C6A15B]" />
            <span>View Card Cover</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default HeaderNav;

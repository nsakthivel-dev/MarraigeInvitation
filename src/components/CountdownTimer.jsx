import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Pure calculation function for time remaining
 */
const calculateTimeLeft = (targetDate) => {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isCompleted: false };
};

/**
 * CountdownTimer: Live Islamic Wedding Time Counter
 * 
 * Displays days, hours, minutes, and seconds until the Nikah ceremony.
 * Styled in the emerald-green and antique-gold Islamic aesthetic.
 */
export const CountdownTimer = ({ targetDate = weddingConfig.weddingDateISO, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className={`my-6 sm:my-10 max-w-2xl mx-auto ${className}`}>
      <div className="relative bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 md:p-8 border border-[#C6A15B]/40 shadow-xl islamic-gold-frame text-center">
        
        {/* Header Tag */}
        <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-[#E8F3EE] border border-[#064E3B]/25 mb-3 sm:mb-4">
          <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#064E3B]" />
          <span className="text-[10px] sm:text-xs font-serif font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#064E3B] uppercase">
            Countdown to the Nikah
          </span>
          <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C6A15B]" />
        </div>

        {timeLeft.isCompleted ? (
          <div className="py-3 sm:py-4">
            <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#064E3B]">
              The Blessed Wedding Day Is Here!
            </h4>
            <p className="text-[11px] sm:text-sm font-serif italic text-[#425F54] mt-1">
              Alhamdulillah • Celebrating this sacred union today in {weddingConfig.venue.city || 'Pondicherry'}
            </p>
          </div>
        ) : (
          <div>
            {/* Grid of 4 Time Counter Units */}
            <div className="grid grid-cols-4 gap-1.5 min-[360px]:gap-2.5 sm:gap-4 md:gap-6 my-1.5 sm:my-2">
              {timeUnits.map((unit) => (
                <div 
                  key={unit.label}
                  className="flex flex-col items-center justify-center p-1.5 min-[360px]:p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FAF7EF] to-[#F4EFE2] border border-[#C6A15B]/40 shadow-xs relative overflow-hidden group hover:border-[#C6A15B] transition-colors"
                >
                  {/* Subtle Top Gold Star Accent */}
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rotate-45 bg-[#C6A15B] opacity-70 mb-0.5 sm:mb-1" />

                  {/* Value */}
                  <span className="text-xl min-[360px]:text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#064E3B] tracking-tight leading-none">
                    {String(unit.value).padStart(2, '0')}
                  </span>

                  {/* Label */}
                  <span className="text-[8px] min-[360px]:text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#9A7730] mt-1 sm:mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtext */}
            <p className="text-[11px] sm:text-xs font-serif italic text-[#425F54] mt-3 sm:mt-4">
              Counting down every blessed moment until we celebrate together in {weddingConfig.venue.city || 'Pondicherry'}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default CountdownTimer;

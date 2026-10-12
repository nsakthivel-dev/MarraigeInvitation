import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Music } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Islamic Wedding Music & Ambient Sound Controller
 * 
 * Features:
 * 1. Strictly NO autoplay - requires explicit user click.
 * 2. Uses config audioUrl if provided.
 * 3. Fallback: Serene Web Audio API ambient acoustic harmony (gentle oriental modal drone)
 *    which creates a peaceful atmosphere with zero external audio assets!
 * 4. Keyboard accessible & handles errors gracefully without console warnings.
 */
export const MusicToggle = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [useSynth, setUseSynth] = useState(false);
  
  const audioRef = useRef(null);
  const synthNodesRef = useRef([]);
  const audioContextRef = useRef(null);

  const audioUrl = weddingConfig.music?.audioUrl;

  // Initialize or start serene ambient acoustic drone
  const startAmbientSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Stop any existing nodes
      stopSynth();

      // Gentle oriental resonant acoustic modal drone (D harmonic series)
      const droneNotes = [
        { freq: 146.83, gain: 0.07, type: 'sine' },      // D3 Fundamental
        { freq: 220.00, gain: 0.05, type: 'triangle' },  // A3 Perfect Fifth
        { freq: 293.66, gain: 0.035, type: 'sine' },     // D4 Octave
        { freq: 349.23, gain: 0.02, type: 'sine' },      // F4 Minor Third
      ];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.10, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);

      const nodes = [];

      droneNotes.forEach((note) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = note.type;
        osc.frequency.setValueAtTime(note.freq, ctx.currentTime);

        // Subtle LFO for gentle breathing swell
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.25 + Math.random() * 0.15, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
        lfo.connect(noteGain.gain);
        lfo.start();

        noteGain.gain.setValueAtTime(note.gain, ctx.currentTime);
        osc.connect(noteGain);
        noteGain.connect(masterGain);
        osc.start();

        nodes.push(osc, lfo);
      });

      synthNodesRef.current = { nodes, masterGain };
    } catch {
      // Audio synth notice
    }
  };

  const stopSynth = () => {
    if (synthNodesRef.current?.masterGain && audioContextRef.current) {
      const ctx = audioContextRef.current;
      try {
        synthNodesRef.current.masterGain.gain.setValueAtTime(
          synthNodesRef.current.masterGain.gain.value,
          ctx.currentTime
        );
        synthNodesRef.current.masterGain.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + 0.8
        );
        setTimeout(() => {
          synthNodesRef.current?.nodes?.forEach(n => {
            try { n.stop(); n.disconnect(); } catch {}
          });
          synthNodesRef.current = null;
        }, 900);
      } catch {}
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !useSynth) {
        audioRef.current.pause();
      }
      stopSynth();
      setIsPlaying(false);
    } else {
      if (audioUrl && !audioError) {
        if (!audioRef.current) {
          audioRef.current = new Audio(audioUrl);
          audioRef.current.loop = true;
          audioRef.current.volume = 0.4;
          audioRef.current.onerror = () => {
            setAudioError(true);
            setUseSynth(true);
            startAmbientSynth();
            setIsPlaying(true);
          };
        }

        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setUseSynth(false);
          })
          .catch(() => {
            setUseSynth(true);
            startAmbientSynth();
            setIsPlaying(true);
          });
      } else {
        setUseSynth(true);
        startAmbientSynth();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynth();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 ${className}`}>
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Mute ambient background sound" : "Play ambient background sound"}
        className={`group relative flex items-center space-x-1.5 sm:space-x-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-full shadow-lg border transition-all duration-300 backdrop-blur-md focus:outline-hidden focus:ring-2 focus:ring-[#C6A46A] cursor-pointer min-h-[38px] sm:min-h-[44px] ${
          isPlaying
            ? 'bg-[#5C405C] border-[#C6A46A] text-[#FFFDF8] shadow-purple-950/40'
            : 'bg-[#F8EEF5]/95 border-[#C6A46A]/50 text-[#5C405C] hover:bg-[#F8EEF5] hover:border-[#C6A46A]'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4C6D5] animate-pulse shrink-0" />
            <div className="flex items-center space-x-0.5 h-3">
              <span className="w-0.5 bg-[#F4C6D5] h-2 animate-[bounce_1s_infinite_100ms]" />
              <span className="w-0.5 bg-[#F4C6D5] h-3 animate-[bounce_1s_infinite_300ms]" />
              <span className="w-0.5 bg-[#F4C6D5] h-1.5 animate-[bounce_1s_infinite_200ms]" />
            </div>
            <span className="text-xs font-serif tracking-wider hidden sm:inline text-[#EAE2F6]">
              {weddingConfig.music?.trackName || "Ambient Harmony"}
            </span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A46A] group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-xs font-serif tracking-wider text-[#51474D] hidden sm:inline">
              Play Ambient Sound
            </span>
            <span className="text-[11px] font-serif tracking-wider text-[#51474D] sm:hidden">
              Music
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default MusicToggle;

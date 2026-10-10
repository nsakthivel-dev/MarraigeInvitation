import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Music } from 'lucide-react';
import weddingConfig from '../data/invitation';

/**
 * Traditional Wedding Music & Ambient Sound Controller
 * 
 * Features:
 * 1. Strictly NO autoplay - requires explicit user click.
 * 2. Uses config audioUrl if provided.
 * 3. Fallback: Harmonious Web Audio API Tanpura drone generator (Sa-Pa drone)
 *    which creates an authentic Vedic wedding ambience with zero external audio assets!
 * 4. Keyboard accessible & handles errors silently without console crashes.
 */
export const MusicToggle = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [useSynth, setUseSynth] = useState(false);
  
  const audioRef = useRef(null);
  const synthNodesRef = useRef([]);
  const audioContextRef = useRef(null);

  const audioUrl = weddingConfig.music?.audioUrl;

  // Initialize or start synthesized Tanpura drone
  const startTanpuraSynth = () => {
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

      // Tanpura frequencies for auspicious C# (Sa ~ 138.6Hz, Pa ~ 207.65Hz)
      const droneNotes = [
        { freq: 138.59, gain: 0.08, type: 'sine' },      // Low Sa
        { freq: 207.65, gain: 0.06, type: 'triangle' },  // Pa (Fifth)
        { freq: 277.18, gain: 0.04, type: 'sine' },      // High Sa
        { freq: 415.30, gain: 0.015, type: 'sine' },     // Shimmer overtone
      ];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);

      const nodes = [];

      droneNotes.forEach((note) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = note.type;
        osc.frequency.setValueAtTime(note.freq, ctx.currentTime);

        // Subtle LFO for gentle organic Tanpura pulsation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.3 + Math.random() * 0.2, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);
        lfo.connect(noteGain.gain);
        lfo.start();

        noteGain.gain.setValueAtTime(note.gain, ctx.currentTime);
        osc.connect(noteGain);
        noteGain.connect(masterGain);
        osc.start();

        nodes.push(osc, lfo);
      });

      synthNodesRef.current = { nodes, masterGain };
    } catch (err) {
      console.warn("Ambient audio synth notice:", err);
    }
  };

  const stopSynth = () => {
    if (synthNodesRef.current?.masterGain && audioContextRef.current) {
      const ctx = audioContextRef.current;
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
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !useSynth) {
        audioRef.current.pause();
      }
      stopSynth();
      setIsPlaying(false);
    } else {
      // Start
      if (audioUrl && !audioError) {
        if (!audioRef.current) {
          audioRef.current = new Audio(audioUrl);
          audioRef.current.loop = true;
          audioRef.current.volume = 0.4;
          audioRef.current.onerror = () => {
            // Fallback gracefully to synth
            setAudioError(true);
            setUseSynth(true);
            startTanpuraSynth();
            setIsPlaying(true);
          };
        }

        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setUseSynth(false);
          })
          .catch(() => {
            // Autoplay blocked or file not found - fallback to web synth
            setUseSynth(true);
            startTanpuraSynth();
            setIsPlaying(true);
          });
      } else {
        // Use synthesized traditional drone
        setUseSynth(true);
        startTanpuraSynth();
        setIsPlaying(true);
      }
    }
  };

  // Cleanup on unmount
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
    <div className={`fixed bottom-5 right-5 z-40 ${className}`}>
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Mute traditional background music" : "Play traditional background music"}
        className={`group relative flex items-center space-x-2 px-3.5 py-2.5 rounded-full shadow-lg border transition-all duration-300 backdrop-blur-md focus:outline-hidden focus:ring-2 focus:ring-[#B08D57] ${
          isPlaying
            ? 'bg-[#6D1F2A] border-[#B08D57] text-[#FFFDF8] shadow-amber-900/30'
            : 'bg-[#FFFDF8]/90 border-[#B08D57]/50 text-[#6D1F2A] hover:bg-[#FFFDF8] hover:border-[#B08D57]'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#DFC794] animate-pulse" />
            {/* Animated Sound Waves */}
            <div className="flex items-center space-x-0.5 h-3">
              <span className="w-0.5 bg-[#DFC794] h-2 animate-[bounce_1s_infinite_100ms]" />
              <span className="w-0.5 bg-[#DFC794] h-3 animate-[bounce_1s_infinite_300ms]" />
              <span className="w-0.5 bg-[#DFC794] h-1.5 animate-[bounce_1s_infinite_200ms]" />
            </div>
            <span className="text-xs font-serif tracking-wider hidden sm:inline text-[#DFC794]">
              {useSynth ? "Vedic Drone" : "Music Playing"}
            </span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-[#B08D57] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-serif tracking-wider text-[#382A22]">
              Play Music
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default MusicToggle;

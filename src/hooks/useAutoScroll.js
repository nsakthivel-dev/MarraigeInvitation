import { useEffect, useRef } from 'react';

/**
 * useAutoScroll
 *
 * Cinematic automatic smooth vertical scrolling for the wedding invitation.
 *
 * Features:
 * - Begins automatically when the invitation opens (no button/toggle required).
 * - Slow, elegant, readable scrolling speed (~36px/sec).
 * - Continuous, smooth requestAnimationFrame loop with timestamp delta.
 * - Non-intrusive: Pauses immediately upon user touch, wheel, key, or pointer interaction.
 * - Resumes gently after the user remains idle for a comfortable reading period (idleResumeDelay).
 * - Automatically stops permanently when the end of the invitation is reached.
 * - Respects prefers-reduced-motion accessibility preference.
 * - Works seamlessly across mobile, desktop, tablet, and PWAs.
 */
export const useAutoScroll = ({
  isActive = false,
  speed = 36, // pixels per second (calm, cinematic, comfortable reading speed)
  startDelay = 900, // ms to wait after opening for initial view to settle
  idleResumeDelay = 3000, // ms of inactivity before resuming auto-scroll
} = {}) => {
  const animFrameIdRef = useRef(null);
  const startTimeoutRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const lastTimeRef = useRef(null);
  const accumulatorRef = useRef(0);
  const isPausedByUserRef = useRef(false);
  const isStoppedRef = useRef(false);

  useEffect(() => {
    // If invitation is closed, or in SSR, or user prefers reduced motion, do nothing
    if (!isActive || typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    isStoppedRef.current = false;
    isPausedByUserRef.current = false;
    accumulatorRef.current = 0;
    lastTimeRef.current = null;

    const getMaxScroll = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      return Math.max(0, docHeight - window.innerHeight);
    };

    const tick = (currentTime) => {
      if (isStoppedRef.current) return;

      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      // Delta in seconds, capped at 0.1s to prevent jumps on tab focus/switch
      const deltaSeconds = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      if (!isPausedByUserRef.current) {
        const maxScroll = getMaxScroll();
        const currentY = window.scrollY || window.pageYOffset;

        // Check if reached the end of the invitation content
        if (currentY >= maxScroll - 4 && maxScroll > 0) {
          isStoppedRef.current = true;
          return;
        }

        accumulatorRef.current += speed * deltaSeconds;

        if (accumulatorRef.current >= 1) {
          const pixelsToScroll = Math.floor(accumulatorRef.current);
          accumulatorRef.current -= pixelsToScroll;

          const targetY = Math.min(currentY + pixelsToScroll, maxScroll);
          window.scrollTo(0, targetY);

          if (targetY >= maxScroll - 4 && maxScroll > 0) {
            isStoppedRef.current = true;
            return;
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    const handleUserInteraction = () => {
      if (isStoppedRef.current) return;

      // Pause immediately so auto-scroll never fights against manual reading/touch
      isPausedByUserRef.current = true;
      accumulatorRef.current = 0;

      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }

      // Schedule gentle resumption after user is idle
      idleTimeoutRef.current = setTimeout(() => {
        const maxScroll = getMaxScroll();
        const currentY = window.scrollY || window.pageYOffset;

        // Stop if user already scrolled to the bottom
        if (currentY >= maxScroll - 4 && maxScroll > 0) {
          isStoppedRef.current = true;
          return;
        }

        // Resume auto-scroll smoothly from current position
        isPausedByUserRef.current = false;
        lastTimeRef.current = performance.now();
      }, idleResumeDelay);
    };

    // Listen to direct user gestures on window
    const interactionEvents = ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'keydown'];
    interactionEvents.forEach((evt) => {
      window.addEventListener(evt, handleUserInteraction, { passive: true, capture: true });
    });

    // Start auto-scroll after the opening transition settles
    startTimeoutRef.current = setTimeout(() => {
      lastTimeRef.current = performance.now();
      animFrameIdRef.current = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);

      interactionEvents.forEach((evt) => {
        window.removeEventListener(evt, handleUserInteraction, { capture: true });
      });
    };
  }, [isActive, speed, startDelay, idleResumeDelay]);
};

export default useAutoScroll;

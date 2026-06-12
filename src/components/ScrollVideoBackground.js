import React, { useEffect, useRef } from 'react';
import { useScroll, useReducedMotion } from 'framer-motion';

const SCRUB_SMOOTHING = 0.12;
const FRAME_EPSILON = 0.01;
const POSTER_SRC = '/videos/hero-poster.jpg';
const VIDEO_SRC = '/videos/hero.mp4';

const ScrollVideoBackground = () => {
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const targetTimeRef = useRef(0);
  const readyRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  // Scroll-scrub the hero video on every device (desktop AND mobile).
  // Only users with the OS-level "reduce motion" accessibility setting
  // fall back to the static poster.
  const canScrub = !prefersReducedMotion;
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canScrub) return undefined;

    const markReady = () => {
      if (readyRef.current) return;
      readyRef.current = true;
      // iOS Safari will not paint a frame produced by setting currentTime
      // until the decoder has been "primed" by an actual play() call.
      // A muted, inline, brief play()->pause() at currentTime 0 unlocks
      // scrubbing without any visible motion (we start at the top, t=0).
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.then === 'function') {
        playAttempt
          .then(() => {
            video.pause();
            // Priming briefly plays the video forward; snap straight back to
            // the scroll-driven target so the resting frame always matches
            // the scroll position (e.g. the very first frame at the top).
            video.currentTime = targetTimeRef.current;
          })
          .catch(() => {});
      }
    };
    video.addEventListener('loadedmetadata', markReady);
    if (video.readyState >= 1) markReady();
    // Encourage mobile browsers to start buffering so seeks have data.
    video.load();

    const unsubscribe = scrollYProgress.on('change', (value) => {
      if (!readyRef.current || !Number.isFinite(video.duration)) return;
      targetTimeRef.current = Math.min(Math.max(value, 0), 1) * video.duration;
    });

    const tick = () => {
      if (readyRef.current && Number.isFinite(video.duration)) {
        const delta = targetTimeRef.current - video.currentTime;
        if (Math.abs(delta) > FRAME_EPSILON) {
          video.currentTime += delta * SCRUB_SMOOTHING;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      unsubscribe();
      video.removeEventListener('loadedmetadata', markReady);
    };
  }, [scrollYProgress, canScrub]);

  return (
    <div className="scroll-video-bg" aria-hidden="true">
      {canScrub ? (
        <video
          ref={videoRef}
          className="scroll-video-bg__media"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          playsInline
          preload="auto"
        />
      ) : (
        <img src={POSTER_SRC} alt="" className="scroll-video-bg__media" />
      )}
      <div className="scroll-video-bg__scrim" />
    </div>
  );
};

export default ScrollVideoBackground;

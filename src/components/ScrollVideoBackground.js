import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useReducedMotion } from 'framer-motion';

const POSTER_SRC = '/videos/hero-poster.jpg';
const VIDEO_SRC = '/videos/hero.mp4';
const FRAME_EPSILON = 0.01;

const ScrollVideoBackground = () => {
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const readyRef = useRef(false);
  const [hasError, setHasError] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const canScrub = !prefersReducedMotion && !isMobileViewport;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)');
    const updateViewportMode = () => {
      setIsMobileViewport(mediaQuery.matches);
    };

    updateViewportMode();
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateViewportMode);
      return () => mediaQuery.removeEventListener('change', updateViewportMode);
    }

    mediaQuery.addListener(updateViewportMode);
    return () => mediaQuery.removeListener(updateViewportMode);
  }, []);

  useEffect(() => {
    scrollProgressRef.current = scrollYProgress.get();
    const unsubscribe = scrollYProgress.on('change', (value) => {
      scrollProgressRef.current = value;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canScrub || hasError) return undefined;

    const scrubSmoothing = 0.15;

    const markReady = () => {
      if (readyRef.current) return;
      readyRef.current = true;
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.then === 'function') {
        playAttempt
          .then(() => {
            video.pause();
            if (Number.isFinite(video.duration)) {
              video.currentTime = scrollProgressRef.current * video.duration;
            }
          })
          .catch(() => {});
      }
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener('loadedmetadata', markReady);
    video.addEventListener('error', handleError);
    if (video.readyState >= 1) markReady();
    video.load();

    const tick = () => {
      if (readyRef.current && video.readyState >= 1 && Number.isFinite(video.duration)) {
        const targetTime = scrollProgressRef.current * video.duration;
        const delta = targetTime - video.currentTime;
        if (Math.abs(delta) > FRAME_EPSILON && !video.seeking) {
          let nextTime = video.currentTime + delta * scrubSmoothing;
          video.currentTime = Math.min(Math.max(nextTime, 0), video.duration);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('loadedmetadata', markReady);
      video.removeEventListener('error', handleError);
    };
  }, [canScrub, hasError]);

  return (
    <div className="scroll-video-bg" aria-hidden="true">
      {canScrub && !hasError ? (
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

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useReducedMotion } from 'framer-motion';

const SCRUB_SMOOTHING = 0.12;
const FRAME_EPSILON = 0.01;
const POSTER_SRC = '/videos/hero-poster.jpg';
const VIDEO_SRC = '/videos/hero.mp4';
const MOBILE_QUERY = '(max-width: 768px)';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};

const ScrollVideoBackground = () => {
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const targetTimeRef = useRef(0);
  const readyRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const canScrub = !isMobile && !prefersReducedMotion;
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canScrub) return undefined;

    const markReady = () => {
      readyRef.current = true;
    };
    video.addEventListener('loadedmetadata', markReady);
    if (video.readyState >= 1) markReady();

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

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useReducedMotion } from 'framer-motion';
import { getPublicAsset } from '../utils/publicUrl';

const POSTER_SRC = getPublicAsset('/videos/hero-poster.jpg');
const VIDEO_SRC = getPublicAsset('/videos/hero.mp4');
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

  const canScrub = !prefersReducedMotion;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewportMode = () => setIsMobileViewport(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);
    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  useEffect(() => {
    scrollProgressRef.current = scrollYProgress.get();
    return scrollYProgress.on('change', (value) => {
      scrollProgressRef.current = value;
    });
  }, [scrollYProgress]);

  useEffect(() => {
    readyRef.current = false;
    setHasError(false);
  }, [VIDEO_SRC]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canScrub || hasError) return undefined;

    const scrubSmoothing = isMobileViewport ? 0.08 : 0.15;

    const markReady = () => {
      if (readyRef.current) return;
      readyRef.current = true;
      const playAttempt = video.play();
      if (playAttempt?.then) {
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

    const handleError = () => setHasError(true);

    video.addEventListener('loadedmetadata', markReady);
    video.addEventListener('error', handleError);
    if (video.readyState >= 1) markReady();

    const tick = () => {
      if (readyRef.current && video.readyState >= 1 && Number.isFinite(video.duration)) {
        const targetTime = scrollProgressRef.current * video.duration;
        const delta = targetTime - video.currentTime;
        if (Math.abs(delta) > FRAME_EPSILON && !video.seeking) {
          const nextTime = video.currentTime + delta * scrubSmoothing;
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
  }, [canScrub, hasError, isMobileViewport]);

  return (
    <div className="scroll-video-bg" aria-hidden="true">
      {canScrub && !hasError ? (
        <video
          key={VIDEO_SRC}
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

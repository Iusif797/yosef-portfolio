import React, { useState, useEffect } from 'react';

import { getPublicAsset } from '../utils/publicUrl';

const POSTER_SRC = getPublicAsset('/videos/hero-poster.jpg');

const LoadingSpinner = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (cancelled) return;
      setIsFading(true);
      setTimeout(() => {
        if (!cancelled) {
          setIsVisible(false);
          onLoadingComplete?.();
        }
      }, 400);
    };

    const poster = new Image();
    poster.src = POSTER_SRC;
    const posterReady = new Promise((resolve) => {
      if (poster.complete) resolve();
      else {
        poster.onload = resolve;
        poster.onerror = resolve;
      }
    });

    const domReady = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));

    const timeout = new Promise((resolve) => setTimeout(resolve, 800));

    Promise.race([Promise.all([posterReady, domReady]), timeout]).then(finish);

    return () => { cancelled = true; };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay${isFading ? ' fade-out' : ''}`} aria-hidden="true">
      <div className="loading-content">
        <div className="spinner-container">
          <div className="spinner-ring" />
          <div className="spinner-ring" />
          <div className="spinner-ring" />
          <div className="spinner-core" />
        </div>
        <div className="loading-text">YM</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

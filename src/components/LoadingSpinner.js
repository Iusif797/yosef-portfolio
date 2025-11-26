import React, { useState, useEffect } from 'react';

const LoadingSpinner = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="spinner-container">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-core"></div>
        </div>
        <div className="loading-text">YM</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

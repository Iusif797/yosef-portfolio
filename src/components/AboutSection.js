import React, { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import BannerImage from '../assets/about-tech-visual.webp';

const StatItem = ({ stat, active }) => {
  const count = useCountUp(stat.value, 1400, active);
  const display = stat.suffix === 'M+' ? `${count}${stat.suffix}` : `${count}${stat.suffix}`;

  return (
    <div className="stat-item">
      <span className="stat-value">{display}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

const AboutSection = ({ t }) => {
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about-section">
      <div className="about-background-overlay" />
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">{t.about.title}</h2>
            <h3 className="about-subtitle">{t.about.subtitle}</h3>
            <p className="about-description">{t.about.description}</p>
            <div className="about-stats reveal-children" ref={statsRef}>
              {t.about.stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} active={statsActive} />
              ))}
            </div>
          </div>
          <div className="about-banner-container">
            <div className="about-glow" />
            <img src={BannerImage} alt={t.about.title} className="about-banner-image" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

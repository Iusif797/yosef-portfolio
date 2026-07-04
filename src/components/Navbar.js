import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { getPublicAsset } from '../utils/publicUrl';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { id: 'about-section', key: 'about' },
  { id: 'process-section', key: 'process' },
  { id: 'projects-section', key: 'projects' },
  { id: 'tech-section', key: 'tech' },
  { id: 'pricing-section', key: 'pricing' },
  { id: 'testimonials-section', key: 'reviews' },
  { id: 'faq-section', key: 'faq' },
];

const Navbar = ({ t, language, changeLanguage, scrollToContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-nav__inner container">
        <button type="button" className="site-nav__brand" onClick={() => goTo('header')} aria-label={t.nav.home}>
          <img src={getPublicAsset('/brand-logo.png')} alt="" className="site-nav__brand-logo" width="38" height="38" />
        </button>
        <nav className="site-nav__links" aria-label="Main navigation">
          {NAV_ITEMS.map(({ id, key }) => (
            <button key={id} type="button" className="site-nav__link" onClick={() => goTo(id)}>
              {t.nav[key]}
            </button>
          ))}
        </nav>
        <div className="site-nav__actions">
          <LanguageSwitcher language={language} changeLanguage={changeLanguage} />
          <button type="button" className="site-nav__cta" onClick={scrollToContact}>
            {t.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

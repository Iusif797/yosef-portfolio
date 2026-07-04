import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'header', key: 'home' },
  { id: 'about-section', key: 'about' },
  { id: 'process-section', key: 'process' },
  { id: 'projects-section', key: 'projects' },
  { id: 'tech-section', key: 'tech' },
  { id: 'pricing-section', key: 'pricing' },
  { id: 'testimonials-section', key: 'reviews' },
  { id: 'faq-section', key: 'faq' },
];

const MobileMenu = ({ t, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`mobile-menu-button${isOpen ? ' active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span /><span /><span />
      </button>
      <div className={`mobile-menu-overlay${isOpen ? ' active' : ''}`} role="dialog" aria-modal="true" aria-hidden={!isOpen}>
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ id, key }) => (
            <button key={id} type="button" className="mobile-menu-item" onClick={() => scrollToSection(id)}>
              {t.nav[key]}
            </button>
          ))}
          <button type="button" className="mobile-menu-item mobile-menu-item--cta" onClick={(e) => { scrollToContact(e); setIsOpen(false); }}>
            {t.nav.cta}
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;

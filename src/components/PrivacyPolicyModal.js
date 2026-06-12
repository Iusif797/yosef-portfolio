import React, { useEffect } from 'react';
import { privacySections } from '../legal/privacySections';

const PrivacyPolicyModal = ({ language, isOpen, onClose, title, closeLabel }) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sections = privacySections[language] || privacySections.en;

  return (
    <div
      className="privacy-modal-root"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="privacy-modal-backdrop" onClick={onClose} role="presentation" />
      <div className={`privacy-modal-panel ${language === 'he' ? 'rtl-text' : ''}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
        <div className="privacy-modal-header">
          <h2 id="privacy-modal-title" className="privacy-modal-title">
            {title}
          </h2>
          <button type="button" className="privacy-modal-close" onClick={onClose} aria-label={closeLabel}>
            ×
          </button>
        </div>
        <div className="privacy-modal-body">
          {sections.map((block) => (
            <section key={block.h} className="privacy-modal-section">
              <h3 className="privacy-modal-h">{block.h}</h3>
              <p className="privacy-modal-p">{block.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;

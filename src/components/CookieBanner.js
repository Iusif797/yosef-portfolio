import React from 'react';
import { saveConsent } from '../consent/consentStorage';
import { injectGtm } from '../consent/gtmLoader';

const CookieBanner = ({ visible, onDismiss, onOpenPrivacy, texts }) => {
  if (!visible) return null;

  const acceptAll = () => {
    saveConsent(true);
    injectGtm();
    onDismiss();
  };

  const essentialOnly = () => {
    saveConsent(false);
    onDismiss();
  };

  return (
    <div className="cookie-banner" role="region" aria-label={texts.bannerAria}>
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">{texts.bannerText}</p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
            {texts.acceptAll}
          </button>
          <button type="button" className="cookie-btn cookie-btn-secondary" onClick={essentialOnly}>
            {texts.rejectOptional}
          </button>
          <button type="button" className="cookie-btn cookie-btn-link" onClick={onOpenPrivacy}>
            {texts.privacyPolicy}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

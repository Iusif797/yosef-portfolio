import React from 'react';
import { FaDesktop, FaMobile, FaIdCard, FaCheck, FaStar, FaTelegram, FaDatabase } from 'react-icons/fa';

const PricingSection = ({ t, onOrder }) => {
  const plans = [
    { icon: FaDesktop, title: t.pricing.website, price: t.pricing.priceWebsite, popular: true, type: 'website', features: t.pricing.features.website },
    { icon: FaTelegram, title: t.pricing.telegramBot, price: t.pricing.priceTelegramBot, type: 'bot', features: t.pricing.features.bot },
    { icon: FaDatabase, title: t.pricing.crm, price: t.pricing.priceCrm, type: 'crm', features: t.pricing.features.crm },
    { icon: FaMobile, title: t.pricing.mobileApp, price: t.pricing.priceMobileApp, type: 'mobile', features: t.pricing.features.mobile },
    { icon: FaIdCard, title: t.pricing.businessCard, price: t.pricing.priceBusinessCard, type: 'card', features: t.pricing.features.card },
  ];

  return (
    <section className="pricing-section" id="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">{t.pricing.pricing}</h2>
          <p className="pricing-subtitle">{t.pricing.subtitle}</p>
        </div>
        <div className="pricing-grid">
          {plans.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.type} className={`pricing-card${item.popular ? ' popular' : ''}`}>
                <div className="pricing-badge-slot">
                  {item.popular && (
                    <div className="popular-badge">
                      <FaStar aria-hidden="true" />
                      {t.pricing.popular}
                    </div>
                  )}
                </div>
                <div className="pricing-header-card">
                  <div className="pricing-icon"><IconComponent aria-hidden="true" /></div>
                  <h3 className="pricing-title">{item.title}</h3>
                  <div className="pricing-price">{item.price}</div>
                </div>
                <div className="pricing-features">
                  {item.features.map((feature) => (
                    <div key={feature} className="pricing-feature">
                      <FaCheck className="feature-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="pricing-button"
                  aria-label={`${t.pricing.order}: ${item.title}`}
                  onClick={() => onOrder(item.type)}
                >
                  {t.pricing.order}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import React from 'react';
import { FaMobileAlt, FaLaptopCode, FaIdBadge } from 'react-icons/fa';

const PricingSection = ({ translations, language }) => {
  const pricingData = [
    {
      icon: FaLaptopCode,
      title: translations[language].pricing.website,
      price: translations[language].pricing.priceWebsite,
      popular: true,
    },
    {
      icon: FaMobileAlt,
      title: translations[language].pricing.mobileApp,
      price: translations[language].pricing.priceMobileApp,
    },
    {
      icon: FaIdBadge,
      title: translations[language].pricing.businessCard,
      price: translations[language].pricing.priceBusinessCard,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">{translations[language].pricing.pricing}</h2>
        <div className="pricing-grid">
          {pricingData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={`pricing-card ${item.popular ? 'popular' : ''}`}>
                {item.popular && <div className="popular-badge">Популярно</div>}
                }
                <div className="pricing-icon">
                  <IconComponent />
                </div>
                <h3 className="pricing-title">{item.title}</h3>
                <div className="pricing-price">{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
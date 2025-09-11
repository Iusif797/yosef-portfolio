import React from 'react';
import { FaDesktop, FaMobile, FaIdCard, FaCheck, FaStar } from 'react-icons/fa';

const PricingSection = ({ translations, language }) => {
  const pricingData = [
    {
      icon: FaDesktop,
      title: translations[language].pricing.website,
      price: translations[language].pricing.priceWebsite,
      popular: true,
      features: [
        language === 'ru' ? 'Адаптивный дизайн' : language === 'en' ? 'Responsive Design' : 'עיצוב רספונסיבי',
        language === 'ru' ? 'SEO оптимизация' : language === 'en' ? 'SEO Optimization' : 'אופטימיזציה לקידום',
        language === 'ru' ? 'Быстрая загрузка' : language === 'en' ? 'Fast Loading' : 'טעינה מהירה',
        language === 'ru' ? 'Современный дизайн' : language === 'en' ? 'Modern Design' : 'עיצוב מודרני'
      ]
    },
    {
      icon: FaMobile,
      title: translations[language].pricing.mobileApp,
      price: translations[language].pricing.priceMobileApp,
      features: [
        language === 'ru' ? 'iOS & Android' : language === 'en' ? 'iOS & Android' : 'iOS ו-Android',
        language === 'ru' ? 'Нативная производительность' : language === 'en' ? 'Native Performance' : 'ביצועים נטיביים',
        language === 'ru' ? 'Push уведомления' : language === 'en' ? 'Push Notifications' : 'התראות דחיפה',
        language === 'ru' ? 'Интеграция с API' : language === 'en' ? 'API Integration' : 'אינטגרציה עם API'
      ]
    },
    {
      icon: FaIdCard,
      title: translations[language].pricing.businessCard,
      price: translations[language].pricing.priceBusinessCard,
      features: [
        language === 'ru' ? 'Уникальный дизайн' : language === 'en' ? 'Unique Design' : 'עיצוב ייחודי',
        language === 'ru' ? 'Контактная информация' : language === 'en' ? 'Contact Information' : 'פרטי יצירת קשר',
        language === 'ru' ? 'QR код' : language === 'en' ? 'QR Code' : 'קוד QR',
        language === 'ru' ? 'Социальные сети' : language === 'en' ? 'Social Media' : 'רשתות חברתיות'
      ]
    }
  ];

  return (
    <section className="pricing-section" id="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">{translations[language].pricing.pricing}</h2>
          <p className="pricing-subtitle">
            {language === 'ru' ? 'Выберите подходящий план для вашего проекта' : 
             language === 'en' ? 'Choose the perfect plan for your project' : 
             'בחרו את התוכנית המושלמת לפרויקט שלכם'}
          </p>
        </div>
        
        <div className="pricing-grid">
          {pricingData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={`pricing-card ${item.popular ? 'popular' : ''}`}>
                {item.popular && (
                  <div className="popular-badge">
                    <FaStar />
                    {language === 'ru' ? 'Популярно' : language === 'en' ? 'Popular' : 'פופולרי'}
                  </div>
                )}
                
                <div className="pricing-header-card">
                  <div className="pricing-icon">
                    <IconComponent />
                  </div>
                  <h3 className="pricing-title">{item.title}</h3>
                  <div className="pricing-price">{item.price}</div>
                </div>
                
                <div className="pricing-features">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="pricing-feature">
                      <FaCheck className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="pricing-button">
                  {language === 'ru' ? 'Заказать' : language === 'en' ? 'Order Now' : 'הזמן עכשיו'}
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
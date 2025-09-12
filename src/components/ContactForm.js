import React, { useState } from 'react';

const ContactForm = ({ translations, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: language === 'he' ? 'אתר' : language === 'en' ? 'Website' : 'Сайт',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = translations[language].contact.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = translations[language].contact.emailRequired;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = translations[language].contact.emailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = translations[language].contact.messageRequired;
    return newErrors;
  };

  const sendToTelegram = (message) => {
    const telegramBotToken = '7024597156:AAGG4sChJgJ8PZQyISPkqbUFZ6KH2zJC1XE';
    const telegramChatId = '1077514837';
    const telegramMessage = encodeURIComponent(message);
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${telegramMessage}`;

    fetch(telegramUrl)
      .then(res => res.json())
      .then(data => {
        if (!data.ok) {
          console.error('Telegram Error:', data);
        }
      })
      .catch(error => console.error('Telegram Error:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const { name, email, projectType, message } = formData;
    const fullMessage = language === 'he'
      ? `בקשה חדשה מהפורטפוליו:\nשם: ${name}\nאימייל: ${email}\nסוג הפרויקט: ${projectType}\nהודעה: ${message}`
      : language === 'en'
      ? `New request from portfolio:\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`
      : `Новая заявка с портфолио:\nИмя: ${name}\nEmail: ${email}\nТип проекта: ${projectType}\nСообщение: ${message}`;

    sendToTelegram(fullMessage);

    setFormData({
      name: '',
      email: '',
      projectType: language === 'he' ? 'אתר' : language === 'en' ? 'Website' : 'Сайт',
      message: '',
    });
    setStatus(translations[language].contact.statusSuccess);
    setErrors({});
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">{translations[language].contact.contact}</h2>
          <p className="contact-subtitle">
            {language === 'ru' ? 'Готов воплотить ваши идеи в жизнь. Свяжитесь со мной любым удобным способом.' : 
             language === 'en' ? 'Ready to bring your ideas to life. Contact me in any convenient way.' : 
             'מוכן להביא את הרעיונות שלכם לחיים. צרו קשר בכל דרך נוחה.'}
          </p>
        </div>

        <div className="contact-content">
          {/* Контактная информация */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Email</h3>
                <a href="mailto:usifmamedov5@gmail.com" className="contact-value">
                  usifmamedov5@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">
                  {language === 'ru' ? 'Телефон' : language === 'en' ? 'Phone' : 'טלפון'}
                </h3>
                <a href="tel:+420773975235" className="contact-value">
                  +420 773 975 235
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">
                  {language === 'ru' ? 'Локация' : language === 'en' ? 'Location' : 'מיקום'}
                </h3>
                <span className="contact-value">
                  {language === 'ru' ? 'Прага, Чехия' : language === 'en' ? 'Prague, Czech Republic' : 'פראג, צ\'כיה'}
                </span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C13.4183 19 17 15.4183 17 11C17 6.58172 13.4183 3 9 3C4.58172 3 1 6.58172 1 11C1 12.3789 1.37515 13.6682 2.03141 14.7825L1 21L7.21746 19.9686C8.33185 20.6248 9.62113 21 11 21C15.4183 21 19 17.4183 19 13C19 8.58172 15.4183 5 11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Telegram</h3>
                <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer" className="contact-value">
                  @beckerman979
                </a>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={translations[language].contact.yourName}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={translations[language].contact.yourEmail}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <select
                  name="projectType"
                  className="form-select"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value={language === 'he' ? 'אתר' : language === 'en' ? 'Website' : 'Сайт'}>
                    {language === 'ru' ? 'Сайт' : language === 'en' ? 'Website' : 'אתר'}
                  </option>
                  <option value={language === 'he' ? 'אפליקציה ניידת' : language === 'en' ? 'Mobile Application' : 'Мобильное приложение'}>
                    {language === 'ru' ? 'Мобильное приложение' : language === 'en' ? 'Mobile Application' : 'אפליקציה ניידת'}
                  </option>
                  <option value={language === 'he' ? 'כרטיס ביקור' : language === 'en' ? 'Business Card' : 'Бизнес-визитка'}>
                    {language === 'ru' ? 'Бизнес-визитка' : language === 'en' ? 'Business Card' : 'כרטיס ביקור'}
                  </option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={translations[language].contact.message}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button type="submit" className="submit-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {translations[language].contact.send}
              </button>
            </form>

            {status && <div className="status-message">{status}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
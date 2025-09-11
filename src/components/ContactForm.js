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
        <h2 className="section-title">{translations[language].contact.contact}</h2>
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
                {translations[language].pricing.website}
              </option>
              <option value={language === 'he' ? 'אפליקציה ניידת' : language === 'en' ? 'Mobile Application' : 'Мобильное приложение'}>
                {translations[language].pricing.mobileApp}
              </option>
              <option value={language === 'he' ? 'כרטיס ביקור' : language === 'en' ? 'Business Card' : 'Бизнес-визитка'}>
                {translations[language].pricing.businessCard}
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
            {translations[language].contact.send}
            <svg className="submit-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
        {status && <div className="status-message">{status}</div>}
      </div>
    </section>
  );
};

export default ContactForm;
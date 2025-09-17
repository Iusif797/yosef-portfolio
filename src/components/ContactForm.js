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
            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-label">
                    {language === 'ru' ? 'Локация' : language === 'en' ? 'Location' : 'מיקום'}
                  </h3>
                  <p className="contact-value">
                    {language === 'ru' ? 'Прага, Чехия' : language === 'en' ? 'Prague, Czech Republic' : 'פראג, צ\'כיה'}
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-label">Email</h3>
                  <a href="mailto:usifmamedov5@gmail.com" className="contact-value contact-link">
                    usifmamedov5@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-label">
                    {language === 'ru' ? 'Телефон' : language === 'en' ? 'Phone' : 'טלפון'}
                  </h3>
                  <a href="tel:+420773975235" className="contact-value contact-link">
                    +420 773 975 235
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-info-text">
                  <h3 className="contact-label">Telegram</h3>
                  <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer" className="contact-value contact-link">
                    @beckerman979
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="contact-form-wrapper">
            <div className="contact-form-container">
              <div className="form-header">
                <h3 className="form-title">
                  {language === 'ru' ? 'Отправить сообщение' : 
                   language === 'en' ? 'Send Message' : 
                   'שלח הודעה'}
                </h3>
                <p className="form-subtitle">
                  {language === 'ru' ? 'Расскажите о своем проекте' : 
                   language === 'en' ? 'Tell me about your project' : 
                   'ספר לי על הפרויקט שלך'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      {translations[language].contact.yourName}
                    </label>
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
                    <label className="form-label">
                      {translations[language].contact.yourEmail}
                    </label>
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
                  <label className="form-label">
                    {language === 'ru' ? 'Тип проекта' : language === 'en' ? 'Project Type' : 'סוג פרויקט'}
                  </label>
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
                  <label className="form-label">
                    {translations[language].contact.message}
                  </label>
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                  </svg>
                  {translations[language].contact.send}
                </button>

                {status && <div className="status-message">{status}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
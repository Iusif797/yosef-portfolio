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
          {/* Минималистичные контакты */}
          <div className="contact-info">
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="contact-text">
                  {language === 'ru' ? 'Прага, Чехия' : language === 'en' ? 'Prague, Czech Republic' : 'פראג, צ\'כיה'}
                </span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a href="mailto:usifmamedov5@gmail.com" className="contact-text contact-link">
                  usifmamedov5@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a href="tel:+420773975235" className="contact-text contact-link">
                  +420 773 975 235
                </a>
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
                      {language === 'ru' ? 'Бизнес-визитка' : language === 'en' ? 'Business Card' : 'כרטיس ביקור'}
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
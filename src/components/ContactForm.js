import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

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
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-title">{translations[language].contact.contact}</h2>
            <p className="contact-subtitle">
              {language === 'ru' ? 'Готов воплотить ваши идеи в жизнь' : 
               language === 'en' ? 'Ready to bring your ideas to life' : 
               'מוכן להביא את הרעיונות שלכם לחיים'}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:usifmamedov5@gmail.com" className="contact-value">
                    usifmamedov5@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <span className="contact-label">
                    {language === 'ru' ? 'Телефон' : language === 'en' ? 'Phone' : 'טלפון'}
                  </span>
                  <a href="tel:+420773975235" className="contact-value">
                    +420 773 975 235
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <span className="contact-label">
                    {language === 'ru' ? 'Локация' : language === 'en' ? 'Location' : 'מיקום'}
                  </span>
                  <span className="contact-value">
                    {language === 'ru' ? 'Прага, Чехия' : language === 'en' ? 'Prague, Czech Republic' : 'פראג, צ\'כיה'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
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
              <FaPaperPlane />
              {translations[language].contact.send}
            </button>
          </form>
        </div>
        
        {status && <div className="status-message">{status}</div>}
      </div>
    </section>
  );
};

export default ContactForm;
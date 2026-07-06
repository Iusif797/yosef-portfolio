import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import FormSelect from './FormSelect';

const ContactForm = ({ t, language, onOpenPrivacy, presetType }) => {
  const [typeKey, setTypeKey] = useState('website');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (presetType) setTypeKey(presetType);
  }, [presetType]);

  const projectType = t.contact.types[typeKey] || t.contact.types.website;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'projectType') {
      setTypeKey(value);
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const typeOptions = [
    { value: 'website', label: t.contact.types.website },
    { value: 'bot', label: t.contact.types.bot },
    { value: 'crm', label: t.contact.types.crm },
    { value: 'mobile', label: t.contact.types.mobile },
    { value: 'card', label: t.contact.types.card },
  ];

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = t.contact.nameRequired;
    if (!formData.email.trim()) next.email = t.contact.emailRequired;
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) next.email = t.contact.emailInvalid;
    if (!formData.message.trim()) next.message = t.contact.messageRequired;
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length) { setErrors(formErrors); return; }
    setStatus('sending');
    setErrors({});
    try {
      const endpoint = process.env.REACT_APP_CONTACT_API || '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, projectType, language }),
      });
      if (!res.ok) throw new Error('fail');
      setFormData({ name: '', email: '', message: '' });
      setTypeKey('website');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="contact-content">
          <aside className="contact-info">
            <div className="contact-info-card">
              <header className="contact-info-head">
                <h2 className="contact-title">{t.contact.contact}</h2>
                <p className="contact-subtitle">{t.contact.subtitle}</p>
              </header>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  </div>
                  <span className="contact-text">{t.contact.location}</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </div>
                  <a href="mailto:usifmamedov5@gmail.com" className="contact-text contact-link">usifmamedov5@gmail.com</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  </div>
                  <a href="tel:+420773975235" className="contact-text contact-link">+420 773 975 235</a>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer" className="social-link" aria-label={t.footer.github}>
                  <FaGithub aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/iusifmamedov/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label={t.footer.linkedin}>
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer" className="social-link" aria-label={t.footer.telegram}>
                  <FaTelegram aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
          <div className="contact-form-wrapper">
            <div className="contact-form-container">
              <div className="form-header">
                <h3 className="form-title">{t.contact.formTitle}</h3>
                <p className="form-subtitle">{t.contact.formSubtitle}</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">{t.contact.yourName}</label>
                    <input id="contact-name" type="text" name="name" className={`form-input${errors.name ? ' error' : ''}`} value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">{t.contact.yourEmail}</label>
                    <input id="contact-email" type="email" name="email" className={`form-input${errors.email ? ' error' : ''}`} value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error-message" role="alert">{errors.email}</span>}
                  </div>
                </div>
                <FormSelect
                  id="contact-type"
                  name="projectType"
                  label={t.contact.projectType}
                  options={typeOptions}
                  value={typeKey}
                  onChange={handleChange}
                />
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">{t.contact.message}</label>
                  <textarea id="contact-message" name="message" className={`form-textarea${errors.message ? ' error' : ''}`} value={formData.message} onChange={handleChange} rows="4" />
                  {errors.message && <span className="error-message" role="alert">{errors.message}</span>}
                </div>
                <p className="contact-form-privacy-note">
                  {t.legal.formPrivacyBefore}{' '}
                  <button type="button" className="privacy-inline-link" onClick={onOpenPrivacy}>{t.legal.privacyPolicy}</button>
                  {t.legal.formPrivacyAfter}
                </p>
                <button type="submit" className="submit-button" disabled={status === 'sending'}>
                  {status === 'sending' ? t.contact.sending : t.contact.send}
                </button>
                {status === 'success' && <div className="status-message status-success" role="status">{t.contact.statusSuccess}</div>}
                {status === 'error' && <div className="status-message status-error" role="alert">{t.contact.statusError}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React, { useState, useCallback, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import ScrollVideoBackground from './components/ScrollVideoBackground';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import { getStoredConsent, clearConsent } from './consent/consentStorage';
import { injectGtm } from './consent/gtmLoader';
import { getTranslation, detectLanguage } from './i18n/translations';

function App() {
  const [language, setLanguage] = useState(() => detectLanguage());
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(() => getStoredConsent() === null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [contactPreset, setContactPreset] = useState(null);

  const t = getTranslation(language);

  useEffect(() => {
    if (getStoredConsent()?.analytics) injectGtm();
  }, []);

  useEffect(() => {
    document.body.dir = language === 'he' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoading, language]);

  const changeLanguage = useCallback((lng) => setLanguage(lng), []);

  const openModal = useCallback((imageSrc, alt) => {
    setModalImage(imageSrc);
    setModalAlt(alt || t.modal.title);
  }, [t.modal.title]);

  const closeModal = useCallback(() => {
    setModalImage(null);
    setModalAlt('');
  }, []);

  const scrollToContact = useCallback((e, projectType) => {
    e?.preventDefault?.();
    if (projectType) setContactPreset(projectType);
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleOrder = useCallback((type) => scrollToContact(null, type), [scrollToContact]);

  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        {isLoading && <LoadingSpinner onLoadingComplete={() => setIsLoading(false)} />}
        <a href="#main-content" className="skip-link">{t.skipLink}</a>
        <div className="App">
          <ScrollVideoBackground />
          <Helmet htmlAttributes={{ lang: language === 'he' ? 'he' : language === 'ru' ? 'ru' : 'en' }}>
            <title>{t.title}</title>
            <meta name="description" content={t.description} />
            <meta name="keywords" content={t.keywords} />
            <meta name="author" content={t.author} />
            <meta property="og:title" content={t.title} />
            <meta property="og:description" content={t.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={t.siteUrl} />
            <meta property="og:image" content={t.ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t.title} />
            <meta name="twitter:description" content={t.description} />
            <meta name="twitter:image" content={t.ogImage} />
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: t.author,
                jobTitle: t.jobTitle,
                url: t.siteUrl,
                sameAs: [
                  'https://github.com/Iusif797',
                  'https://www.linkedin.com/in/iusifmamedov/',
                  'https://t.me/beckerman979',
                ],
              })}
            </script>
          </Helmet>

          <Navbar t={t} language={language} changeLanguage={changeLanguage} scrollToContact={scrollToContact} />
          <MobileMenu t={t} scrollToContact={scrollToContact} />

          <main id="main-content">
            <Header t={t} scrollToContact={scrollToContact} />
            <div className="reveal"><AboutSection t={t} /></div>
            <div className="reveal"><ProcessSection t={t} /></div>
            <div className="reveal">
              <ProjectsSection t={t} language={language} onImageClick={openModal} />
            </div>
            <div className="reveal"><TechStackSection t={t} /></div>
            <div className="reveal"><PricingSection t={t} onOrder={handleOrder} /></div>
            <div className="reveal"><TestimonialsSection t={t} /></div>
            <div className="reveal"><FAQSection t={t} /></div>
            <div className="reveal">
              <ContactForm t={t} language={language} onOpenPrivacy={() => setPrivacyOpen(true)} presetType={contactPreset} />
            </div>
          </main>

          <Footer
            t={t}
            language={language}
            onPrivacyClick={() => setPrivacyOpen(true)}
            onCookieSettingsClick={() => { clearConsent(); window.location.reload(); }}
          />

          <CookieBanner
            visible={showCookieBanner}
            onDismiss={() => setShowCookieBanner(false)}
            onOpenPrivacy={() => setPrivacyOpen(true)}
            texts={t.legal}
          />

          <PrivacyPolicyModal
            language={language}
            isOpen={privacyOpen}
            onClose={() => setPrivacyOpen(false)}
            title={t.legal.privacyTitle}
            closeLabel={t.legal.closeModal}
          />

          <Modal imageSrc={modalImage} imageAlt={modalAlt} closeLabel={t.modal.close} onClose={closeModal} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONTENT = {
  ru: {
    title: 'Частые вопросы',
    subtitle: 'Ответы на то, что обычно спрашивают клиенты',
    items: [
      { q: 'Сколько времени занимает разработка сайта?', a: 'Лендинг — от 1–2 недель, корпоративный сайт — 3–6 недель, сложное приложение — от 2 месяцев. Точный срок определяем после брифа.' },
      { q: 'Как происходит оплата?', a: 'Обычно 50% предоплата перед стартом и 50% после сдачи. Для крупных проектов возможна поэтапная оплата по milestone.' },
      { q: 'Сколько правок включено?', a: 'В стоимость входят согласованные итерации на этапах дизайна и разработки. Дополнительные изменения обсуждаются отдельно.' },
      { q: 'Что входит в цену «от 1 500 €»?', a: 'Адаптивная вёрстка, базовое SEO, форма связи, оптимизация скорости и деплой. CMS, мультиязычность и интеграции — по запросу.' },
      { q: 'Предоставляете поддержку после запуска?', a: 'Да. Первые 30 дней — бесплатные мелкие правки. Далее — почасовая поддержка или абонентский пакет.' },
      { q: 'Работаете удалённо с клиентами из других стран?', a: 'Да, работаю с клиентами по всей Европе и за её пределами. Созвоны по Zoom, Telegram или WhatsApp.' },
    ],
  },
  en: {
    title: 'FAQ',
    subtitle: 'Answers to what clients usually ask',
    items: [
      { q: 'How long does a website take?', a: 'A landing page takes 1–2 weeks, a corporate site 3–6 weeks, and complex apps from 2 months. Exact timeline is set after the brief.' },
      { q: 'How does payment work?', a: 'Typically 50% upfront and 50% on delivery. Larger projects can be split into milestone-based payments.' },
      { q: 'How many revisions are included?', a: 'Agreed iterations during design and development are included. Extra scope is quoted separately.' },
      { q: 'What is included from €1,500?', a: 'Responsive build, basic SEO, contact form, performance optimization and deployment. CMS, i18n and integrations are optional.' },
      { q: 'Do you offer post-launch support?', a: 'Yes. Minor fixes are free for 30 days after launch. After that — hourly support or a monthly retainer.' },
      { q: 'Do you work remotely with international clients?', a: 'Yes, I work with clients across Europe and beyond via Zoom, Telegram or WhatsApp.' },
    ],
  },
  he: {
    title: 'שאלות נפוצות',
    subtitle: 'תשובות לשאלות שמעסיקות לקוחות',
    items: [
      { q: 'כמה זמן לוקח לפתח אתר?', a: 'דף נחיתה — 1–2 שבועות, אתר תדמית — 3–6 שבועות, אפליקציה מורכבת — מ-2 חודשים. לוח זמנים מדויק נקבע אחרי הבריף.' },
      { q: 'איך מתבצע התשלום?', a: 'בדרך כלל 50% מקדמה ו-50% במסירה. בפרויקטים גדולים — תשלום לפי אבני דרך.' },
      { q: 'כמה תיקונים כלולים?', a: 'איטרציות מוסכמות בשלב העיצוב והפיתוח כלולות. שינויים נוספים — בתיאום נפרד.' },
      { q: 'מה כלול במחיר «מ-1,500 €»?', a: 'בנייה רספונסיבית, SEO בסיסי, טופס יצירת קשר, אופטימיזציה ופריסה. CMS, רב-לשוניות ואינטגרציות — לפי בקשה.' },
      { q: 'יש תמיכה אחרי ההשקה?', a: 'כן. 30 יום ראשונים — תיקונים קטנים בחינם. לאחר מכן — תמיכה לפי שעה או חבילה חודשית.' },
      { q: 'עובדים מרחוק עם לקוחות מחו״ל?', a: 'כן, עם לקוחות באירופה ומחוצה לה. שיחות ב-Zoom, Telegram או WhatsApp.' },
    ],
  },
};

const FAQSection = ({ language }) => {
  const t = CONTENT[language] || CONTENT.en;
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq-section" id="faq-section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
        <div className="faq-list">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <svg className="faq-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-item__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

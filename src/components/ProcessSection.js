import React from 'react';
import { motion } from 'framer-motion';

const CONTENT = {
  ru: {
    title: 'Как мы работаем',
    subtitle: 'Прозрачный процесс от идеи до запуска',
    steps: [
      { title: 'Бриф и созвон', desc: 'Обсуждаем цели, аудиторию, сроки и бюджет. Фиксируем задачи в коротком ТЗ.' },
      { title: 'Прототип и дизайн', desc: 'Согласуем структуру, визуальный стиль и ключевые экраны до начала разработки.' },
      { title: 'Разработка', desc: 'Пишу чистый код, показываю промежуточные версии и вношу правки по ходу.' },
      { title: 'Тестирование', desc: 'Проверяю на всех устройствах, скорость загрузки, SEO и формы обратной связи.' },
      { title: 'Запуск и поддержка', desc: 'Деплой на ваш домен, передача доступов и сопровождение после релиза.' },
    ],
  },
  en: {
    title: 'How We Work',
    subtitle: 'A transparent path from idea to launch',
    steps: [
      { title: 'Brief & Call', desc: 'We align on goals, audience, timeline and budget. Tasks are captured in a short spec.' },
      { title: 'Prototype & Design', desc: 'Structure, visual direction and key screens are approved before development starts.' },
      { title: 'Development', desc: 'Clean, maintainable code with regular previews and iterative feedback.' },
      { title: 'Testing', desc: 'Cross-device QA, performance, SEO and contact flows verified before go-live.' },
      { title: 'Launch & Support', desc: 'Deployment to your domain, handover of access and post-release support.' },
    ],
  },
  he: {
    title: 'איך אנחנו עובדים',
    subtitle: 'תהליך שקוף מרעיון ועד השקה',
    steps: [
      { title: 'בריף ושיחה', desc: 'מגדירים מטרות, קהל יעד, לוחות זמנים ותקציב. משימות מתועדות במפרט קצר.' },
      { title: 'אב טיפוס ועיצוב', desc: 'מסכימים על מבנה, כיוון ויזואלי ומסכים מרכזיים לפני תחילת הפיתוח.' },
      { title: 'פיתוח', desc: 'קוד נקי עם הדגמות שוטפות ומשוב לאורך הדרך.' },
      { title: 'בדיקות', desc: 'בדיקה על כל המכשירים, ביצועים, SEO וטפסי יצירת קשר.' },
      { title: 'השקה ותמיכה', desc: 'פריסה לדומיין שלכם, מסירת גישות וליווי לאחר ההשקה.' },
    ],
  },
};

const ProcessSection = ({ language }) => {
  const t = CONTENT[language] || CONTENT.en;

  return (
    <section className="process-section" id="process-section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
        <div className="process-grid">
          {t.steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="process-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="process-step__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

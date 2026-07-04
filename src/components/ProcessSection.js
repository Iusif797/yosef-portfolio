import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = ({ t }) => (
  <section className="process-section" id="process-section">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">{t.process.title}</h2>
        <p className="section-subtitle">{t.process.subtitle}</p>
      </div>
      <div className="process-grid">
        {t.process.steps.map((step, index) => (
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

export default ProcessSection;

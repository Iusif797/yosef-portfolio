import React from 'react';
import { motion } from 'framer-motion';
import '../styles/testimonials.css';

const TestimonialsSection = ({ t }) => (
  <section className="testimonials-section" id="testimonials-section">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">{t.testimonials.title}</h2>
        <p className="section-subtitle">{t.testimonials.subtitle}</p>
      </div>
      <div className="testimonials-grid">
        {t.testimonials.items.map((item, index) => (
          <motion.blockquote
            key={item.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
            <footer className="testimonial-card__author">
              <span className="testimonial-card__country" aria-hidden="true">{item.country}</span>
              <div>
                <cite className="testimonial-card__name">{item.name}</cite>
                <span className="testimonial-card__role">{item.role}</span>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

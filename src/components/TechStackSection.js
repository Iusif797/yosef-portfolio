import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiNetlify, SiVercel, SiFigma, SiTelegram, SiPostgresql,
} from 'react-icons/si';
import '../styles/techstack.css';

const STACK = [
  { Icon: SiReact, name: 'React' },
  { Icon: SiNodedotjs, name: 'Node.js' },
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiTelegram, name: 'Telegram Bot API' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: SiTailwindcss, name: 'Tailwind' },
  { Icon: SiNetlify, name: 'Netlify' },
  { Icon: SiVercel, name: 'Vercel' },
  { Icon: SiFigma, name: 'Figma' },
];

const TechStackSection = ({ t }) => (
  <section className="tech-section" id="tech-section">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">{t.tech.title}</h2>
        <p className="section-subtitle">{t.tech.subtitle}</p>
      </div>
      <div className="tech-grid">
        {STACK.map(({ Icon, name }, index) => (
          <motion.div
            key={name}
            className="tech-item"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;

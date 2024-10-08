// src/App.js

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import {
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaMobileAlt,
  FaLaptopCode,
  FaIdBadge,
} from 'react-icons/fa';

// Импорт фонового изображения
import BestBackground from './assets/best-background.jpg';

// Импорт изображений проектов
import DJBeckerman from './assets/DJ-beckerman.png';
import CarRentIMG from './assets/CarRentIMG.png';
import CarRentIMG2 from './assets/CarRentIMG2.png';
import ContactBook from './assets/contact-book.jpg';
import G3 from './assets/G-3.jpg';
import BusinessCard from './assets/business-card.jpg';
import BusinessCard2 from './assets/business-card2.jpg';

// Импорт иконки для использования внутри сайта
import PortfolioIcon from './assets/portfolio-icon.png';

// Удалите импорт favicon из `App.js`
// import Favicon from './assets/Логотип.png';

function App() {
  const [modalImage, setModalImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Сайт',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Функция для открытия модального окна
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalImage(null);
  };

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, projectType, message } = formData;

    // Формирование сообщения
    const fullMessage = `
      Новая заявка с портфолио:
      Имя: ${name}
      Email: ${email}
      Тип проекта: ${projectType}
      Сообщение: ${message}
    `;

    // Кодировка сообщения для URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Ваш WhatsApp номер в международном формате (без плюса)
    const whatsappNumber = '972528057734'; // без плюса и символов

    // Ссылка Click-to-Chat
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Перенаправление пользователя на WhatsApp
    window.open(whatsappLink, '_blank');

    // Очистка формы и отображение статуса
    setFormData({
      name: '',
      email: '',
      projectType: 'Сайт',
      message: '',
    });
    setStatus('Пожалуйста, отправьте сообщение в WhatsApp.');
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BestBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Управление мета-тегами для SEO и установка favicon */}
      <Helmet>
        {/* Установка favicon из папки public */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        <title>Портфолио Юсифа Мамедова - Веб-разработчик</title>
        <meta
          name="description"
          content="Портфолио веб-разработчика Юсифа Мамедова: создание сайтов и мобильных приложений на React, Wix, WordPress, Flutter и React Native."
        />
        <meta
          name="keywords"
          content="web development, React, Wix, WordPress, Flutter, React Native, Юсиф Мамедов, портфолио, веб-разработчик"
        />
        <meta name="author" content="Юсиф Мамедов" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Портфолио Юсифа Мамедова - Веб-разработчик" />
        <meta
          property="og:description"
          content="Портфолио веб-разработчика Юсифа Мамедова: создание сайтов и мобильных приложений на React, Wix, WordPress, Flutter и React Native."
        />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://webportfolio-yosef.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Портфолио Юсифа Мамедова - Веб-разработчик" />
        <meta
          name="twitter:description"
          content="Портфолио веб-разработчика Юсифа Мамедова: создание сайтов и мобильных приложений на React, Wix, WordPress, Flutter и React Native."
        />
        <meta name="twitter:image" content="/favicon.svg" />
      </Helmet>

      {/* Overlay для затемнения фона */}
      <div className="background-overlay"></div>

      {/* Modal Window */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Project Fullscreen" className="modal-image" />
        </div>
      )}

      {/* Header Section */}
      <header className="App-header">
        <div className="header-content">
          {/* Вставка вашей иконки внутри сайта */}
          <img src={PortfolioIcon} alt="Моё портфолио иконка" className="portfolio-icon" />
          <h1 className="studio-title">Портфолио Web-Studio</h1>
          <p className="about-me">
            Привет! Меня зовут Юсиф, я веб-разработчик с опытом создания сайтов на React, Wix,
            WordPress, а также разработки мобильных приложений на Flutter и React Native. Я стремлюсь
            создавать красивые и функциональные решения для бизнеса и частных клиентов.
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Мои проекты</h2>
        <div className="projects-carousel">
          {/* Project Screenshots */}
          <div className="project-item floating float1">
            <img
              src={DJBeckerman}
              alt="DJ Beckerman Website"
              className="project-screenshot"
              onClick={() => openModal(DJBeckerman)}
            />
          </div>
          <div className="project-item floating float2">
            <img
              src={CarRentIMG}
              alt="Car Rent App"
              className="project-screenshot"
              onClick={() => openModal(CarRentIMG)}
            />
          </div>
          <div className="project-item floating float3">
            <img
              src={CarRentIMG2}
              alt="Car Rent App 2"
              className="project-screenshot"
              onClick={() => openModal(CarRentIMG2)}
            />
          </div>
          <div className="project-item floating float4">
            <img
              src={ContactBook}
              alt="Contact Book App"
              className="project-screenshot"
              onClick={() => openModal(ContactBook)}
            />
          </div>
          {/* New Projects */}
          <div className="project-item floating float5">
            <img
              src={G3}
              alt="G-3 Project"
              className="project-screenshot"
              onClick={() => openModal(G3)}
            />
          </div>
          <div className="project-item floating float6">
            <img
              src={BusinessCard}
              alt="Business Card 1"
              className="project-screenshot"
              onClick={() => openModal(BusinessCard)}
            />
          </div>
          <div className="project-item floating float7">
            <img
              src={BusinessCard2}
              alt="Business Card 2"
              className="project-screenshot"
              onClick={() => openModal(BusinessCard2)}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Прайс</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <FaMobileAlt className="pricing-icon" />
            <h3>Мобильное приложение</h3>
            <p className="price">$1000</p>
          </div>
          <div className="pricing-card">
            <FaLaptopCode className="pricing-icon" />
            <h3>Сайт</h3>
            <p className="price">$500</p>
          </div>
          <div className="pricing-card">
            <FaIdBadge className="pricing-icon" />
            <h3>Бизнес-визитка</h3>
            <p className="price">$30</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Навыки</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Flutter</li>
          <li>WordPress</li>
          <li>Wix</li>
          <li>Git</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Связаться со мной</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            required
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
          />
          <select
            name="projectType"
            className="styled-select contact-input"
            required
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="Сайт">Сайт</option>
            <option value="Мобильное приложение">Мобильное приложение</option>
            <option value="Бизнес-визитка">Бизнес-визитка</option>
          </select>
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            required
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact-button">
            Отправить
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </section>

      {/* Footer */}
      <footer>
        <p>Портфолио Юсифа Мамедова</p>
        <div className="social-icons">
          <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/iusifmamedov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

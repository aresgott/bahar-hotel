import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Build image URL that works locally and when deployed under a subpath
  const publicUrl = process.env.PUBLIC_URL || '';
  const imageUrl = publicUrl ? `${publicUrl}/images/main.jpg` : '/images/main.jpg';

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src={imageUrl} 
          alt="Hotel Bahar" 
          className="hero-background-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
            <p className="hero-description">{t('hero.description')}</p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://booking.com', '_blank')}
              >
                {t('hero.reservationBtn')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('about')}
              >
                {t('hero.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

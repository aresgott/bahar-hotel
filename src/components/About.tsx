import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

interface Feature {
  icon: string;
  text: string;
}

const About: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    { icon: '📶', text: t('about.features.wifi') },
    { icon: '🅿️', text: t('about.features.parking') },
    { icon: '🍽️', text: t('about.features.restaurant') },
    { icon: '💆', text: t('about.features.spa') },
    { icon: '🛎️', text: t('about.features.roomService') }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about-description">{t('about.description')}</p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="hotel-icon">🏨</div>
              <p>هتل بهار</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

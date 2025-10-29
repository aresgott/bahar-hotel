import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLanguage } from '../contexts/LanguageContext';
import './Map.css';

interface MapContent {
  title: string;
  address: string;
  description: string;
}

const Map: React.FC = () => {
  const { t, language } = useLanguage();

  // Tehran coordinates (Valiasr Street area)
  const position: [number, number] = [35.7219, 51.3347];

  const mapContent: Record<'fa' | 'en', MapContent> = {
    fa: {
      title: 'موقعیت هتل بهار',
      address: 'تهران، خیابان ولیعصر، پلاک 123',
      description: 'هتل بهار در قلب تهران و در نزدیکی مراکز تجاری و تفریحی قرار دارد.'
    },
    en: {
      title: 'Hotel Bahar Location',
      address: 'Tehran, Valiasr Street, No. 123',
      description: 'Hotel Bahar is located in the heart of Tehran, close to commercial and entertainment centers.'
    }
  };

  return (
    <section className="map-section">
      <div className="container">
        <div className="map-header">
          <h2 className="section-title">{mapContent[language].title}</h2>
          <p className="map-description">{mapContent[language].description}</p>
        </div>
        
        <div className="map-container">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '400px', width: '100%', borderRadius: '15px' }}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="popup-content">
                  <h3>هتل بهار</h3>
                  <p>{mapContent[language].address}</p>
                  <p>📞 +98-21-12345678</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        
        <div className="map-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h4>{language === 'fa' ? 'آدرس' : 'Address'}</h4>
              <p>{mapContent[language].address}</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">🚗</div>
            <div className="info-content">
              <h4>{language === 'fa' ? 'دسترسی' : 'Access'}</h4>
              <p>{language === 'fa' ? '5 دقیقه تا مترو' : '5 minutes to metro'}</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">✈️</div>
            <div className="info-content">
              <h4>{language === 'fa' ? 'فرودگاه' : 'Airport'}</h4>
              <p>{language === 'fa' ? '45 دقیقه تا فرودگاه امام' : '45 minutes to IKA Airport'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

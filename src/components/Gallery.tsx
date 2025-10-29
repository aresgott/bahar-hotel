import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Gallery.css';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface Category {
  key: string;
  label: string;
}

const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Gallery images with actual image paths - memoized to prevent recreation on every render
  const galleryImages: GalleryImage[] = useMemo(() => [
    { id: 1, title: language === 'fa' ? 'لابی هتل' : 'Hotel Lobby', category: 'lobby', image: 'gallery-1.jpeg' },
    { id: 2, title: language === 'fa' ? 'اتاق استاندارد' : 'Standard Room', category: 'room', image: 'gallery-2.jpeg' },
    { id: 3, title: language === 'fa' ? 'رستوران' : 'Restaurant', category: 'restaurant', image: 'gallery-3.jpeg' },
    { id: 4, title: language === 'fa' ? 'اسپا' : 'Spa', category: 'spa', image: 'gallery-4.jpeg' },
    { id: 5, title: language === 'fa' ? 'سالن ورزش' : 'Fitness Center', category: 'gym', image: 'gallery-5.jpeg' },
    { id: 6, title: language === 'fa' ? 'استخر' : 'Swimming Pool', category: 'pool', image: 'gallery-6.jpeg' },
    { id: 7, title: language === 'fa' ? 'اتاق لوکس' : 'Luxury Room', category: 'room', image: 'gallery-7.jpeg' },
    { id: 8, title: language === 'fa' ? 'تراس' : 'Terrace', category: 'terrace', image: 'gallery-8.jpeg' },
    { id: 9, title: language === 'fa' ? 'فضای هتل' : 'Hotel Space', category: 'lobby', image: 'gallery-9.jpeg' }
  ], [language]);

  const categories: Category[] = useMemo(() => [
    { key: 'all', label: language === 'fa' ? 'همه' : 'All' },
    { key: 'lobby', label: language === 'fa' ? 'لابی' : 'Lobby' },
    { key: 'room', label: language === 'fa' ? 'اتاق‌ها' : 'Rooms' },
    { key: 'restaurant', label: language === 'fa' ? 'رستوران' : 'Restaurant' },
    { key: 'spa', label: language === 'fa' ? 'اسپا' : 'Spa' },
    { key: 'gym', label: language === 'fa' ? 'سالن ورزش' : 'Gym' },
    { key: 'pool', label: language === 'fa' ? 'استخر' : 'Pool' },
    { key: 'terrace', label: language === 'fa' ? 'تراس' : 'Terrace' }
  ], [language]);

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image: GalleryImage): void => {
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  const getImagePath = (imageName: string): string => {
    const publicUrl = process.env.PUBLIC_URL || '';
    return `${publicUrl}/images/gallery/${imageName}`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    // Hide image if it doesn't exist, show placeholder instead
    target.style.display = 'none';
    const placeholder = target.nextElementSibling as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    // Hide placeholder if image loads successfully
    const placeholder = target.nextElementSibling as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'none';
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">{t('gallery.title')}</h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image">
                <img 
                  src={getImagePath(image.image)} 
                  alt={image.title}
                  className="gallery-img"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
                <div className="image-placeholder">
                  <span className="image-icon">📸</span>
                  <span className="image-title">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img 
                src={getImagePath(selectedImage.image)} 
                alt={selectedImage.title}
                className="modal-img"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) {
                    placeholder.style.display = 'flex';
                  }
                }}
              />
              <div className="modal-image-placeholder" style={{ display: 'none' }}>
                <span className="modal-image-icon">📸</span>
                <span className="modal-image-title">{selectedImage.title}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

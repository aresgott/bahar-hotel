import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fa' | 'en';

interface Translations {
  fa: {
    nav: {
      home: string;
      about: string;
      rooms: string;
      gallery: string;
      contact: string;
      reservation: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      reservationBtn: string;
      learnMore: string;
    };
    about: {
      title: string;
      description: string;
      features: {
        wifi: string;
        parking: string;
        restaurant: string;
        spa: string;
        roomService: string;
      };
    };
    gallery: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
      form: {
        name: string;
        email: string;
        phone: string;
        message: string;
        send: string;
      };
    };
    footer: {
      description: string;
      quickLinks: string;
      contactInfo: string;
      socialMedia: string;
    };
  };
  en: {
    nav: {
      home: string;
      about: string;
      rooms: string;
      gallery: string;
      contact: string;
      reservation: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      reservationBtn: string;
      learnMore: string;
    };
    about: {
      title: string;
      description: string;
      features: {
        wifi: string;
        parking: string;
        restaurant: string;
        spa: string;
        roomService: string;
      };
    };
    gallery: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
      form: {
        name: string;
        email: string;
        phone: string;
        message: string;
        send: string;
      };
    };
    footer: {
      description: string;
      quickLinks: string;
      contactInfo: string;
      socialMedia: string;
    };
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('hotel-bahar-language') as Language;
    return savedLanguage || 'fa';
  });

  const translations: Translations = {
    fa: {
      nav: {
        home: 'خانه',
        about: 'درباره ما',
        rooms: 'اتاق‌ها',
        gallery: 'گالری',
        contact: 'تماس با ما',
        reservation: 'رزرو'
      },
      hero: {
        title: 'هتل بهار',
        subtitle: 'تجربه اقامتی بی‌نظیر در قلب شهر',
        description: 'هتل بهار با امکانات مدرن و خدمات عالی، بهترین انتخاب برای اقامت شماست.',
        reservationBtn: 'رزرو آنلاین',
        learnMore: 'اطلاعات بیشتر'
      },
      about: {
        title: 'درباره هتل بهار',
        description: 'هتل بهار با بیش از 20 سال تجربه در صنعت هتلداری، یکی از بهترین هتل‌های شهر محسوب می‌شود. ما با ارائه خدمات با کیفیت و امکانات مدرن، تجربه‌ای بی‌نظیر از اقامت را برای مهمانان خود فراهم می‌کنیم.',
        features: {
          wifi: 'وای‌فای رایگان',
          parking: 'پارکینگ رایگان',
          restaurant: 'رستوران مجلل',
          spa: 'اسپا و سالن ورزش',
          roomService: 'سرویس 24 ساعته'
        }
      },
      gallery: {
        title: 'گالری تصاویر',
        subtitle: 'تصاویری از هتل و امکانات آن'
      },
      contact: {
        title: 'تماس با ما',
        subtitle: 'برای اطلاعات بیشتر با ما در تماس باشید',
        address: 'آدرس: تهران، خیابان ولیعصر، پلاک 123',
        phone: 'تلفن: 021-12345678',
        email: 'ایمیل: info@hotelbahar.com',
        hours: 'ساعات کاری: 24 ساعته',
        form: {
          name: 'نام و نام خانوادگی',
          email: 'ایمیل',
          phone: 'شماره تماس',
          message: 'پیام',
          send: 'ارسال پیام'
        }
      },
      footer: {
        description: 'هتل بهار - تجربه اقامتی بی‌نظیر',
        quickLinks: 'لینک‌های سریع',
        contactInfo: 'اطلاعات تماس',
        socialMedia: 'شبکه‌های اجتماعی'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        rooms: 'Rooms',
        gallery: 'Gallery',
        contact: 'Contact',
        reservation: 'Reservation'
      },
      hero: {
        title: 'Hotel Bahar',
        subtitle: 'An Unforgettable Stay Experience in the Heart of the City',
        description: 'Hotel Bahar with modern facilities and excellent services is the best choice for your stay.',
        reservationBtn: 'Online Reservation',
        learnMore: 'Learn More'
      },
      about: {
        title: 'About Hotel Bahar',
        description: 'Hotel Bahar with more than 20 years of experience in the hospitality industry is considered one of the best hotels in the city. We provide an unforgettable stay experience for our guests by offering quality services and modern facilities.',
        features: {
          wifi: 'Free WiFi',
          parking: 'Free Parking',
          restaurant: 'Luxury Restaurant',
          spa: 'Spa & Fitness Center',
          roomService: '24/7 Room Service'
        }
      },
      gallery: {
        title: 'Photo Gallery',
        subtitle: 'Pictures of the hotel and its facilities'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with us for more information',
        address: 'Address: Tehran, Valiasr Street, No. 123',
        phone: 'Phone: +98-21-12345678',
        email: 'Email: info@hotelbahar.com',
        hours: 'Working Hours: 24/7',
        form: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone Number',
          message: 'Message',
          send: 'Send Message'
        }
      },
      footer: {
        description: 'Hotel Bahar - An Unforgettable Stay Experience',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        socialMedia: 'Social Media'
      }
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    return typeof value === 'string' ? value : key;
  };

  const toggleLanguage = (): void => {
    const newLanguage = language === 'fa' ? 'en' : 'fa';
    setLanguage(newLanguage);
    localStorage.setItem('hotel-bahar-language', newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'fa' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

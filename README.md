# Hotel Bahar - هتل بهار

A modern, responsive hotel website built with React featuring bilingual support (Farsi/English), interactive gallery, contact form, and integrated map.

## Features

- 🌐 **Bilingual Support**: Farsi (default) and English language switching
- 📱 **Responsive Design**: Mobile-first approach with modern UI/UX
- 🖼️ **Interactive Gallery**: Filterable image gallery with modal view
- 🗺️ **Interactive Map**: Location map with hotel marker using React Leaflet
- 📞 **Contact Form**: Functional contact form with validation
- 🎨 **Modern Design**: Beautiful gradients, animations, and smooth scrolling
- 🏨 **Hotel Features**: About section highlighting hotel amenities
- 📍 **Location Info**: Address, contact details, and accessibility information

## Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Navigation
- **React Leaflet** - Interactive maps
- **CSS3** - Styling with modern features
- **Vazirmatn Font** - Persian/Arabic font support

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hotel-bahar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Gallery.js & Gallery.css
│   ├── Map.js & Map.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── contexts/
│   └── LanguageContext.js
├── App.js & App.css
├── index.js & index.css
└── README.md
```

## Components

### Header
- Navigation menu with smooth scrolling
- Language switcher (Farsi/English)
- Mobile-responsive hamburger menu
- Reservation button (links to external booking site)

### Hero
- Eye-catching hero section with gradient background
- Call-to-action buttons
- Animated scroll indicator

### About
- Hotel information and description
- Feature highlights with icons
- Modern card-based layout

### Gallery
- Filterable image gallery
- Modal view for images
- Category-based filtering

### Map
- Interactive map showing hotel location
- Contact information cards
- Accessibility information

### Contact
- Contact form with validation
- Hotel contact details
- Responsive layout

### Footer
- Quick links navigation
- Social media links
- Contact information
- Copyright information

## Language Support

The website supports two languages:
- **Farsi (Persian)** - Default language with RTL support
- **English** - Secondary language with LTR support

Language switching is handled through the `LanguageContext` which provides translations and manages the current language state.

## Customization

### Adding New Languages
1. Add translations to the `translations` object in `LanguageContext.js`
2. Update the language switcher logic
3. Add appropriate font support if needed

### Styling
- All components use CSS modules for scoped styling
- Global styles are in `App.css`
- Responsive design with mobile-first approach
- Modern CSS features like gradients, animations, and flexbox/grid

### Content Updates
- Update translations in `LanguageContext.js`
- Modify component content directly
- Replace placeholder images with actual hotel photos

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify/Vercel
1. Connect your repository to the deployment platform
2. Set build command to `npm run build`
3. Set publish directory to `build`
4. Deploy!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@hotelbahar.com
- Phone: +98-21-12345678

---

**Hotel Bahar** - تجربه اقامتی بی‌نظیر

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
        about: 'About',
        blog: 'Blog',
        roadmap: 'Roadmap',
        team: 'Team',
        rarity: 'Rarity',
        contact: 'Contact',
        buyHolocoin: 'Buy Holocoin',
      },
    },
    fr: {
      translation: {
        home: 'Accueil',
        about: 'À propos',
        blog: 'Blog',
        roadmap: 'Roadmap',
        team: 'Équipe',
        rarity: 'Rareté',
        contact: 'Contact',
        buyHolocoin: 'Acheter Holocoin',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

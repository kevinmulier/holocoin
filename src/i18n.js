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
        heroParagraph1: 'Community-centered experiences.',
        heroParagraph2: 'Immersive worlds.',
        heroParagraph3: '6,000 NFT homes waiting for new owners.',
        heroParagraph4: "It's our world, let's make it personal.",
        heroJoinButton: 'Join the adventure',
        joinDiscordButton: 'Join Discord',
        contactUs: 'Contact us',
        contactUsText: "You'll find us at all hours on Discord. You can also reach us through the usual channels.",
        contactUsButton: 'Get in touch',
        privacyPolicy: 'Privacy Policy',
        termsOfUse: 'Terms of Use',
        contentPolicy: 'Content Policy',
        codeOfEthics: 'Code of Ethics',
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
        heroParagraph1: 'Expériences centrées sur la communauté.',
        heroParagraph2: 'Mondes immersifs.',
        heroParagraph3: '6 000 NFTs attendent de nouveaux propriétaires.',
        heroParagraph4: "C'est notre monde, personnalisons-le.",
        heroJoinButton: "Rejoindre l'aventure",
        joinDiscordButton: 'Rejoindre notre Discord',
        contactUs: 'Nous contacter',
        contactUsText:
          'Vous nous trouverez à toute heure sur Discord. Vous pouvez également nous joindre via les canaux habituels.',
        contactUsButton: 'Prendre contact',
        privacyPolicy: 'Politique de confidentialité',
        termsOfUse: "Conditions d'utilisation",
        contentPolicy: 'Politique de contenu',
        codeOfEthics: 'Code de déontologie',
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

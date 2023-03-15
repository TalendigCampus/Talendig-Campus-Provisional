import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Search: "Search topics…",
      "Welcome back": "Welcome back",
      "We've missed you": "We've missed you",
    },
  },
  fr: {
    translation: {
      Search: "Rechercher…",
      "Welcome back": "Bon retour",
      "We've missed you": "Tu nous as manqué",
    },
  },
  de: {
    translation: {
      Search: "Suchen…",
      "Welcome back": "Willkommen zurück",
      "We've missed you": "Wir haben dich vermisst",
    },
  },
  nl: {
    translation: {
      Search: "Zoeken…",
      "Welcome back": "Welkom terug",
      "We've missed you": "We hebben je gemist",
    },
  },
  es: {
    translation: {
      Search: "Buscador…",
      "Welcome back": "Bienvenido de nuevo",
      "We've missed you": "Te echamos de menos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

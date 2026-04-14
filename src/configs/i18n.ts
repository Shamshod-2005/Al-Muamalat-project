import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../i18n/en/translation.json";
import uz from "../i18n/uz/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    en: { translation: en },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

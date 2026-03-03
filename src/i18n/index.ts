import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import uk from "./locales/uk/translation.json";

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});


export default i18next
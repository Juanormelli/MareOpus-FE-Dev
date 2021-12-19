import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from './public/static/locales/pt.json';
import en from './public/static/locales/en.json';
import es from './public/static/locales/es.json';

const resources = {
  pt,
  en,
  es,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    defaultNS: "common",
    fallbackLng: "pt",
  });
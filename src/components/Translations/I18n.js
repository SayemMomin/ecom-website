import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";

import { TRANSLATIONS_ES } from "./ES/EsTranslations";
import { TRANSLATIONS_ARAB } from "./Arabic/ArabicTranslations";
import { TRANSLATIONS_ZH } from "./ZH/ZhTranslations";
import { TRANSLATIONS_EN } from "./EN/EnTranslations";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
    es: {
      translation: TRANSLATIONS_ES
    },
    arab: {
      translation: TRANSLATIONS_ARAB
    },
     en: {
       translation: TRANSLATIONS_EN
     },
     zh: {
       translation: TRANSLATIONS_ZH
     }
   }
 });
 
// i18n.changeLanguage("zh");

i18n.init({
 interpolation: {
   format: function (value, format, lng) {
     if (value instanceof Date) return moment(value).format(format);
     if (typeof value === "number") return new Intl.NumberFormat().format(value);
     return value;
   }
 }
});
export { i18n };
import i18next from 'i18next';
import global_en from 'translations/EN/global.json';
import global_ua from 'translations/UA/global.json';
import { initReactI18next } from 'react-i18next';

const storedLanguage = localStorage.getItem('lng');

if (!storedLanguage) {
  localStorage.setItem('lng', 'en');
}

i18next.use(initReactI18next)
       .init({
       lng: localStorage.getItem('lng') || 'en',
       resources: {
         en: {
           global: global_en,
         },
         ua: {
           global: global_ua,
         },
       },
});

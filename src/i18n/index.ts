import i18n from 'i18next';
import { deutsch } from './languages/deutsch';
import { english } from './languages/english';
import { french } from './languages/french';
import { italian } from './languages/italian';
import { portuguese } from './languages/portuguese';
import { spanish } from './languages/spanish';

i18n.init({
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: english,
    de: deutsch,
    fr: french,
    it: italian,
    pt: portuguese,
    es: spanish,
  },
  debug: true,
});

export default i18n;

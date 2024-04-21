import { I18n, setTranslations, setLocale, t } from 'react-i18nify';
import enTranslations from './locales/en.json';
import thTranslations from './locales/th.json';

// กำหนดค่าเริ่มต้น
setLocale('th');
setTranslations
({ 
  en: 
      enTranslations, 

  th: 
      thTranslations 
    });

export { I18n, setTranslations, setLocale, t };

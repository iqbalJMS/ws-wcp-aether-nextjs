import { useEffect, useState } from 'react';
import type { Locale } from './i18n-config';
import type global from './locales/en/global.json';

const ALLOWED_LOCALES = ['en', 'fr', 'es', 'de', 'id'];
const dictionaries = {
  en: () => import('./locales/en/global.json').then((module) => module.default),
  id: () => import('./locales/id/global.json').then((module) => module.default),
};

export type T_Dictionary = typeof global;

export const useDictionary = (locale: Locale) => {
  const [dictionary, setDictionary] = useState<T_Dictionary | null>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      let dict: T_Dictionary;
      if (ALLOWED_LOCALES.includes(locale)) {
        dict = await dictionaries[locale]?.();
        setDictionary(dict as T_Dictionary);
      } else {
        dict = await dictionaries['en']?.();
        setDictionary(dict as T_Dictionary);
      }
    };

    loadDictionary();
  }, [locale]);

  return dictionary;
};

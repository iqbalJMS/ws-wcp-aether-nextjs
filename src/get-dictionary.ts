import { useEffect, useState } from 'react';
import type { Locale } from './i18n-config';
import type global from './locales/en/global.json';

const ALLOWED_LOCALES = ['en', 'fr', 'es', 'de', 'id'] as const;

const dictionaries = {
  en: () => import('./locales/en/global.json').then((module) => module.default),
  id: () => import('./locales/id/global.json').then((module) => module.default),
};

export type T_Dictionary = typeof global;

export const useDictionary = (locale: Locale) => {
  const [dictionary, setDictionary] = useState<T_Dictionary | null>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const safeLocale = ALLOWED_LOCALES.includes(locale)
          ? locale
          : 'en';

        const loader = dictionaries[safeLocale] || dictionaries.en;

        const dict = await loader()

        setDictionary(dict as T_Dictionary);
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error('Failed to load dictionary:', error);

        // Fallback to English if loading fails
        const fallbackDict = await dictionaries.en();
        setDictionary(fallbackDict);
      }
    };

    loadDictionary();
  }, [locale]);

  return dictionary;
};

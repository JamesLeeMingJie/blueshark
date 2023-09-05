import { useRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { getI18nLocale, setI18nLocale } from 'helpers/i18n';
import { languages } from 'models/options';

export const useSetLocale = () => {
  const router = useRouter();
  // const { i18n } = useTranslation();

  useEffect(() => {
    if (router.locale) {
      if (!getI18nLocale()) {
        setI18nLocale(router.locale);
      }
      // i18n.changeLanguage(router.locale);
    }
  }, [router.locale]);

  useEffect(() => {
    if (
      getI18nLocale() &&
      getI18nLocale() !== router.locale &&
      languages.find((item) => item.value === getI18nLocale())
    ) {
      router.push('/' + router.asPath, String(getI18nLocale()));
    }
  }, []);
};

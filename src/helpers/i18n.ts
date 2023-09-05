export const getI18nLocale = () => {
   if (typeof window !== 'undefined') {
      return localStorage.getItem('lang');
   }
};
export const setI18nLocale = (locale: string) => {
   if (typeof window !== 'undefined') {
      return localStorage.setItem('lang', locale);
   }
};

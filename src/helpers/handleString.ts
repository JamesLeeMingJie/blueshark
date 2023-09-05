
export const activePage = (currentUrl: string, urlMatch: string) => {
   if (currentUrl === '/news/detail/[slug]' && urlMatch === '/news') {
      return true;
   }
   return currentUrl === urlMatch;
};

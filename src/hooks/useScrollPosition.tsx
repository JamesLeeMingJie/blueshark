import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setHeight(position);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return height;
};

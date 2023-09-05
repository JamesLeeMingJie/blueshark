import { useState, useLayoutEffect } from 'react';
export const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => {};
export const useWindowSize = (initValue = [0, 0]) => {
  const [size, setSize] = useState([...initValue]);
  useBrowserLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

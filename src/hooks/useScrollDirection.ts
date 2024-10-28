import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const scrollTimeout = 50;

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = window.setTimeout(() => {
        setScrollY(window.scrollY);
      }, scrollTimeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    scrollY,
    isScrolled: scrollY > 20
  };
}
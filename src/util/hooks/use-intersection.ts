import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useIntersectionOnece = (
  ref: React.RefObject<Element>,
): boolean => {
  const [intersected, setintersected] = useState(false);
  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setintersected(entry.isIntersecting);
        if (entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(ref.current);

    return () => {
      if (!intersected && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current]);

  return intersected;
};

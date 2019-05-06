/** @jsx jsx */

import { useRef, useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';

import { useIntersectionOnece } from 'util/hooks/use-intersection';

export interface ImageProps {
  src: string;
  alt?: string;
  draggable?: boolean;
  className?: string;
}

export default ({ src, alt, draggable, className }: ImageProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const intersected = useIntersectionOnece(ref);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <img
      css={css`
        width: 100%;
        height: 100%;
        visibility: ${isLoaded ? 'visible' : 'hidden'};
      `}
      ref={ref}
      className={className}
      src={intersected ? src : undefined}
      alt={alt}
      draggable={draggable || false}
      onLoad={handleLoad}
      onError={handleLoad}
    />
  );
};

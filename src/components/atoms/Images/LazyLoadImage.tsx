import * as React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

// TODO: Lazy Loadを実装
export default ({ src, alt, className }: ImageProps) => (
  <img className={className} src={src} alt={alt} />
);

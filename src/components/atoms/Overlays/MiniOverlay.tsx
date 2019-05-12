/** @jsx jsx */

import { SerializedStyles, css, jsx } from '@emotion/core';
import {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
  nearRef: RefObject<Element>;
  className?: string;
  onClickBack?(): void;
}

const OFFSET = 10;

export default ({ children, nearRef, className, onClickBack }: Props) => {
  const contetRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<SerializedStyles>();
  const onClickContent = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (nearRef.current && contetRef.current) {
      const nearRect = nearRef.current.getBoundingClientRect();
      const contetRect = contetRef.current.getBoundingClientRect();
      const top =
        window.innerHeight - nearRect.bottom < contetRect.height + OFFSET
          ? nearRect.top - contetRect.height - OFFSET
          : nearRect.bottom + OFFSET;
      const left =
        window.innerWidth - nearRect.left < contetRect.width
          ? nearRect.right - contetRect.width
          : nearRect.left;
      setStyle(css`
        top: ${top}px;
        left: ${left}px;
      `);
    }
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
      onClick={onClickBack}
      role="presentation"
    >
      <div
        ref={contetRef}
        css={css`
          ${style}
          position: fixed;
          opacity: ${style ? 1 : 0};
        `}
        onClick={onClickContent}
        role="presentation"
        className={className}
      >
        {children}
      </div>
    </div>
  );
};

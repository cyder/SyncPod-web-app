/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { ReactNode, RefObject, useCallback } from 'react';

interface Props {
  children: ReactNode;
  nearRef: RefObject<Element>;
  className?: string;
  onClickBack?(): void;
}

export default ({ children, nearRef, className, onClickBack }: Props) => {
  const onClickContent = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!nearRef.current) {
    return null;
  }
  const rect = nearRef.current.getBoundingClientRect();

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
        css={css`
          position: fixed;
          top: ${rect.top + rect.height}px;
          left: ${rect.left}px;
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

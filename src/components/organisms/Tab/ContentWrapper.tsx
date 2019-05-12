/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { ReactNode } from 'react';

import { color } from '@/constants/styles';

interface Props {
  children: ReactNode;
  isLeftEnd: boolean;
  isRightEnd: boolean;
  className?: string;
}

export default ({ children, isLeftEnd, isRightEnd, className }: Props) => {
  return (
    <div
      css={css`
        background: ${color.PRIMALY};
        border-radius: 0 0 1rem 1rem;
      `}
      className={className}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          padding: 1rem;
          background: ${color.WHITE};
          border-bottom: 2px solid ${color.PRIMALY};
          border-left: 2px solid ${color.PRIMALY};
          border-right: 2px solid ${color.PRIMALY};
          border-radius: ${isLeftEnd ? '0' : '1rem '}
            ${isRightEnd ? '0' : '1rem '} 1rem 1rem;
        `}
      >
        {children}
      </div>
    </div>
  );
};

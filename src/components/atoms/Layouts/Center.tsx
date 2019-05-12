/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import * as React from 'react';

interface Props {
  direction?: 'row' | 'column';
  children: React.ReactNode;
  className?: string;
}

/**
 * 上下左右中央寄せ
 */
export default ({ direction, className, children }: Props) => (
  <div
    css={css`
      display: flex;
      flex-direction: ${direction || 'initial'};
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `}
    className={className}
  >
    {children}
  </div>
);

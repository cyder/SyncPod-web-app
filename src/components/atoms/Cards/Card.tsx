/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default ({ children, className }: Props) => (
  <div
    css={css`
      border-radius: 0.8rem;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `}
    className={className}
  >
    {children}
  </div>
);

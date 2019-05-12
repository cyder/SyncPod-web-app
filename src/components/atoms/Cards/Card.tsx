/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import * as React from 'react';

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

/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <span
    css={css`
      color: white;
      font-family: 'Yu Gothic', YuGothic;
      padding: 16px;
    `}
  >
    {children}
  </span>
);

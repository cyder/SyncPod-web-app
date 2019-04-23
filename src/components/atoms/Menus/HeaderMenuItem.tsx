/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import { color } from 'constants/styles';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <div
    css={css`
      color: ${color.WHITE};
      padding: 16px;
      font-size: 1.4rem;
    `}
  >
    {children}
  </div>
);

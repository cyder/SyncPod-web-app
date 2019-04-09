/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import { color } from 'constants/styles';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <span
    css={css`
      color: ${color.WHITE};
      padding: 16px;
    `}
  >
    {children}
  </span>
);

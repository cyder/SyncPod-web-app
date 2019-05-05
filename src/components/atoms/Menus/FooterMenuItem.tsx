/** @jsx jsx */

import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
  children?: ReactNode;
}

export default ({ className, children }: Props) => (
  <div
    css={css`
      padding: 0 5rem;
    `}
    className={className}
  >
    {children}
  </div>
);

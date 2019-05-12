/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { ReactNode } from 'react';

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

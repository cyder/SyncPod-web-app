/** @jsx jsx */

import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  label: string;
  name?: string;
  className?: string;
  children?: ReactNode;
}

export default ({ name, label, className, children }: Props) => (
  <div className={className}>
    <label htmlFor={name}>
      <div
        css={css`
          font-size: 1.2rem;
          padding: 1rem 0;
        `}
      >
        {label}
      </div>
      {children}
    </label>
  </div>
);

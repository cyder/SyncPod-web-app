/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { ReactNode } from 'react';

import Hint from '@/components/atoms/Hints/Hint';

export interface FormLabelProps {
  label: string;
  name?: string;
  className?: string;
  children?: ReactNode;
  hint?: string;
}

export default ({ name, label, className, children, hint }: FormLabelProps) => (
  <div className={className}>
    <label htmlFor={name}>
      <div
        css={css`
          font-size: 1.2rem;
          padding: 1rem 0;
          display: flex;
          align-items: center;
        `}
      >
        <span>{label}</span>
        {hint && (
          <Hint
            css={css`
              position: relative;
              margin-left: 0.3rem;
            `}
            hint={hint}
          />
        )}
      </div>
      {children}
    </label>
  </div>
);

/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

export interface BaseButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({ children, className, onClick }: BaseButtonProps) => (
  <button
    css={css`
      display: block;
      appearance: none;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 0;
      color: inherit;
      font-family: inherit;
      cursor: pointer;
    `}
    className={className}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

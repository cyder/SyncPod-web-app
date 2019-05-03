/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

export interface BaseButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({
  children,
  className,
  disabled,
  onClick,
}: BaseButtonProps) => (
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
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

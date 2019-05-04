/** @jsx jsx */

import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  children: ReactNode;
  className?: string;
}

// TODO: 左右ボタンを実装
export default ({ children, className }: Props) => (
  <div
    css={css`
      overflow: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    `}
    className={className}
  >
    {children}
  </div>
);

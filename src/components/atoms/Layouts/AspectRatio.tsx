/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import * as React from 'react';

interface Props {
  className?: string;
  width: number;
  height: number;
  children?: React.ReactNode;
}

export default ({ className, width, height, children }: Props) => (
  <div
    css={css`
      position: relative;
      width: 100%;
    `}
    className={className}
  >
    <div
      css={css`
        width: 100%;
        padding-top: ${(height / width) * 100}%;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        `}
      >
        {children}
      </div>
    </div>
  </div>
);

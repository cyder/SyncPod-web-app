/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

/**
 * 上下左右中央寄せ
 */
export default (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `}
    {...props}
  />
);

/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

export default (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => (
  <div
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `}
    {...props}
  />
);

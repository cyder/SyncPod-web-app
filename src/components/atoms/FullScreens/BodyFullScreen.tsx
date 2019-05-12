/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

/**
 * position fixedで全画面に広がるwrapper
 */
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

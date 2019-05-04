/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import { color } from 'constants/styles';

interface Props {
  children?: string;
  className?: string;
}

export default ({ children, className }: Props) => (
  <span
    css={css`
      display: inline-block;
      border-radius: 1000px;
      padding: 0.4rem 2rem;
      background-color: ${color.PRIMALY};
    `}
    className={className}
  >
    {children}
  </span>
);

/** @jsx jsx */

import { css, jsx } from '@emotion/core';

interface Props {
  children?: string;
  className?: string;
}

export default ({ children, className }: Props) => (
  <p
    css={css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
    className={className}
  >
    {children}
  </p>
);

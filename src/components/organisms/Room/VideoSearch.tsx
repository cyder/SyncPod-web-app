/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      background-color: #0000ff;
      height: 200vh;
    `}
    className={className}
  >
    VideoSearch
  </div>
);

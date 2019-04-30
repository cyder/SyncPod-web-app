/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      height: 200vh;
    `}
    className={className}
  >
    VideoSearch
  </div>
);

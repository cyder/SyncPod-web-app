/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      background-color: #ff0000;
      height: 200vh;
    `}
    className={className}
  >
    RoomView
  </div>
);

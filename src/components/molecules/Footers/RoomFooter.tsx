/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      background-color: #00ffff;
      height: 100px;
    `}
    className={className}
  >
    RoomFooter
  </div>
);

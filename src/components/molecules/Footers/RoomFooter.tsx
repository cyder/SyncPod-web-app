/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      height: 100px;
    `}
    className={className}
  >
    RoomFooter
  </div>
);

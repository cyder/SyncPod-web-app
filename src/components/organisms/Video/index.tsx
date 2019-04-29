/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
  enableMiniPlayer?: boolean;
}

export default ({ className }: Props) => {
  return (
    <div
      css={css`
        background-color: #ffff00;
      `}
      className={className}
    >
      video
    </div>
  );
};

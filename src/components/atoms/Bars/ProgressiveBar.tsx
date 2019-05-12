/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import { color } from '@/constants/styles';

interface Props {
  className?: string;
  progress: number;
}

export default ({ progress, className }: Props) => (
  <div
    css={css`
      background: ${color.WHITE};
      height: 3px;
    `}
    className={className}
  >
    <div
      css={css`
        background: ${color.PRIMALY};
        width: ${progress}%;
        height: 100%;
      `}
    />
  </div>
);

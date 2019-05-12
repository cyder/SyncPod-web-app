/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import { color } from '@/constants/styles';

export default () => (
  <div
    css={css`
      text-align: center;
      font-size: 1.4rem;
      color: ${color.GRAY_DARK};
    `}
  >
    <small>&copy; cyder.jp</small>
  </div>
);

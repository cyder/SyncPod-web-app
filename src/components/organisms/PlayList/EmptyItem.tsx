/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import VideoThumbnail from '@/components/molecules/Videos/VideoThumbnail';
import { color } from '@/constants/styles';

export default () => (
  <div
    css={css`
      display: flex;
      padding: 0.5rem 0;
    `}
  >
    <VideoThumbnail
      css={css`
        width: 12rem;
        margin-right: 2rem;
      `}
    />
    <div>
      <h3
        css={css`
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: ${color.GRAY_DARK};
        `}
      >
        動画がありません
      </h3>
    </div>
  </div>
);

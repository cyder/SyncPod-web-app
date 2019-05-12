/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import VideoThumbnail from '@/components/molecules/Videos/VideoThumbnail';
import { color } from '@/constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      display: flex;
      align-items: flex-start;
      padding: 0.5rem 0;
      max-width: 70rem;
    `}
    className={className}
  >
    <VideoThumbnail
      css={css`
        width: 24rem;
        margin-right: 2rem;
      `}
    />
    <div
      css={css`
        height: 13.5rem;
        flex: 1 1 0;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
      `}
    >
      <h3
        css={css`
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: ${color.GRAY_MEDIUM};
        `}
      >
        検索結果が見つかりません。
      </h3>
    </div>
  </div>
);

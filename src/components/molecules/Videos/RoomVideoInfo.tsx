/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import { color } from '@/constants/styles';

export interface VideoData {
  title: string;
  channelTitle: string;
}

interface Props {
  video?: VideoData;
}

export default ({ video }: Props) => (
  <div>
    <h2
      css={css`
        font-size: 1.8rem;
        font-weight: bold;
        padding: 2rem 0 0.5rem;
      `}
    >
      {video ? video.title : '再生中の動画はありません'}
    </h2>
    <p
      css={css`
        font-size: 1.2rem;
        color: ${color.GRAY_DARK};
        padding: 0.5rem 0 1rem;
      `}
    >
      {video ? video.channelTitle : 'プレイリストに動画を追加してください。'}
    </p>
  </div>
);

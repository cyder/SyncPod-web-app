/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import VideoThumbnail from 'components/molecules/Videos/VideoThumbnail';
import PublishedDate from 'components/atoms/Date/PublishedDate';

export interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  published: Date;
}

interface Props extends VideoData {
  className?: string;
}

export default ({ title, channelTitle, thumbnailUrl, published }: Props) => (
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
      title={title}
      thumbnailUrl={thumbnailUrl}
    />
    <div>
      <h3
        css={css`
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        `}
      >
        {title}
      </h3>
      <h4
        css={css`
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        `}
      >
        {channelTitle}
      </h4>
      <PublishedDate
        css={css`
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        `}
      >
        {published}
      </PublishedDate>
    </div>
  </div>
);

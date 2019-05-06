/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import VideoThumbnail from 'components/molecules/Videos/VideoThumbnail';
import PublishedDate from 'components/atoms/Date/PublishedDate';

import { color } from 'constants/styles';
import OverflowHiddenText from 'components/atoms/Texts/OverflowHiddenText';

export interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  published: Date;
  description: string;
}

interface Props extends VideoData {
  className?: string;
}

export default ({
  title,
  channelTitle,
  thumbnailUrl,
  published,
  description,
}: Props) => (
  <div
    css={css`
      display: flex;
      align-items: flex-start;
      padding: 0.5rem 0;
      max-width: 70rem;
    `}
  >
    <VideoThumbnail
      css={css`
        width: 24rem;
        margin-right: 2rem;
      `}
      title={title}
      thumbnailUrl={thumbnailUrl}
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
        `}
      >
        {title}
      </h3>
      <div
        css={css`
          font-size: 1.4rem;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        `}
      >
        <h4
          css={css`
            margin-right: 1rem;
            margin-bottom: 0.5rem;
          `}
        >
          {channelTitle}
        </h4>
        <PublishedDate
          css={css`
            margin-bottom: 0.5rem;
          `}
        >
          {published}
        </PublishedDate>
      </div>
      <div
        css={css`
          flex: 1 1 0;
          font-size: 1.2rem;
          color: ${color.GRAY_MEDIUM};
          display: flex;
          align-items: stretch;
        `}
      >
        <OverflowHiddenText lineHeight={20}>{description}</OverflowHiddenText>
      </div>
    </div>
  </div>
);

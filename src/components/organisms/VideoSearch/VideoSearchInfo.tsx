/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import PublishedDate from '@/components/atoms/Date/PublishedDate';
import OverflowHiddenText from '@/components/atoms/Texts/OverflowHiddenText';
import { color } from '@/constants/styles';

export interface VideoInfoData {
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  published: Date;
  description: string;
}

interface Props extends VideoInfoData {
  className?: string;
}

export default ({
  title,
  channelTitle,
  published,
  description,
  className,
}: Props) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
    className={className}
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
        overflow: hidden;
      `}
    >
      <OverflowHiddenText lineHeight={20}>{description}</OverflowHiddenText>
    </div>
  </div>
);

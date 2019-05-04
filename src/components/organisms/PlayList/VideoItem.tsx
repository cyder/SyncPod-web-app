/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import LazyLoadImage from 'components/atoms/Images/LazyLoadImage';
import AspectRatio from 'components/atoms/Layouts/AspectRatio';
import Card from 'components/atoms/Cards/Card';

import { color } from 'constants/styles';

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
    <AspectRatio
      css={css`
        width: 12rem;
        margin-right: 2rem;
      `}
      width={16}
      height={9}
    >
      <Card
        css={css`
          background-color: ${color.GRAY_LIGHT};
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <LazyLoadImage
            css={css`
              object-fit: cover;
              width: 100%;
              height: 100%;
            `}
            src={thumbnailUrl}
            alt={title}
            draggable={false}
          />
        </div>
      </Card>
    </AspectRatio>
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
      <p
        css={css`
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        `}
      >
        {`${published.getFullYear()}/${published.getMonth() +
          1}/${published.getDate()}に公開`}
      </p>
    </div>
  </div>
);

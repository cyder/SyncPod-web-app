/** @jsx jsx */

import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';

import Hoverable from 'components/atoms/Features/Hoverable';
import Card from 'components/atoms/Cards/Card';
import SvgIcon from 'components/atoms/Icons/SvgIcon';
import Center from 'components/atoms/Layouts/Center';
import VideoThumbnail from 'components/molecules/Videos/VideoThumbnail';
import PublishedDate from 'components/atoms/Date/PublishedDate';
import OverflowHiddenText from 'components/atoms/Texts/OverflowHiddenText';

import { color } from 'constants/styles';

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
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <Hoverable
      css={css`
        display: flex;
        align-items: flex-start;
        padding: 0.5rem 0;
        max-width: 70rem;
        width: 100%;
      `}
      onHoverChange={setIsHover}
      onClick={handleClick}
    >
      <div
        css={css`
          width: 24rem;
          margin-right: 2rem;
          position: relative;
        `}
      >
        <VideoThumbnail title={title} thumbnailUrl={thumbnailUrl} />
        {isHover && (
          <Card
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background-color: ${color.PLAYLIST_HOVER_BACKGROUND};
              color: ${color.WHITE};
            `}
          >
            <Center direction="column">
              <SvgIcon
                css={css`
                  display: block;
                  height: 3rem;
                `}
                icon="plus"
              />
              <div
                css={css`
                  text-align: center;
                  font-size: 1.4rem;
                  padding-top: 1rem;
                `}
              >
                プレイリストに追加
              </div>
            </Center>
          </Card>
        )}
      </div>
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
    </Hoverable>
  );
};

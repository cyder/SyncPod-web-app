/** @jsx jsx */

import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';

import Hoverable from 'components/atoms/Features/Hoverable';
import VideoSearchThumbnail from 'components/organisms/VideoSearch/VideoSearchThumbnail';
import VideoSearchInfo, {
  VideoInfoData,
} from 'components/organisms/VideoSearch/VideoSearchInfo';

export interface VideoData extends VideoInfoData {
  id: string;
  thumbnailUrl: string;
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
  className,
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
        max-width: 70rem;
        width: 100%;
      `}
      className={className}
      onHoverChange={setIsHover}
      onClick={handleClick}
    >
      <VideoSearchThumbnail
        title={title}
        thumbnailUrl={thumbnailUrl}
        isHover={isHover}
        css={css`
          width: 24rem;
          margin-right: 2rem;
        `}
      />
      <VideoSearchInfo
        title={title}
        channelTitle={channelTitle}
        thumbnailUrl={thumbnailUrl}
        published={published}
        description={description}
        css={css`
          height: 13.5rem;
          flex: 1 1 0;
          padding: 1rem 0;
        `}
      />
    </Hoverable>
  );
};

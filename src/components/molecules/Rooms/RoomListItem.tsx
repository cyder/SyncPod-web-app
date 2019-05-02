/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import * as React from 'react';

import Hoverable from 'components/atoms/Features/Hoverable';
import RoomThumbnail from 'components/molecules/Rooms/RoomThumbnail';

import { roomRoute } from 'components/Router/config';
import { color } from 'constants/styles';

interface Video {
  title: string;
  thumbnailUrl: string;
}

export interface RoomListItemProps {
  roomKey: string;
  name: string;
  nowPlayingVideo?: Video;
  lastPlayingVideo?: Video;
  onlineUserCount: number;
}

export default ({
  roomKey,
  name,
  nowPlayingVideo,
  lastPlayingVideo,
  onlineUserCount,
}: RoomListItemProps) => {
  const generateVideoInfo = React.useCallback((): string | null => {
    if (nowPlayingVideo) {
      return `再生中：${nowPlayingVideo.title}`;
    }
    if (lastPlayingVideo) {
      return `再生終了：${lastPlayingVideo.title}`;
    }
    return '動画が再生されていません';
  }, [nowPlayingVideo, lastPlayingVideo]);
  const [isHover, setIsHover] = React.useState(false);

  return (
    <Hoverable onHoverChange={setIsHover}>
      <roomRoute.Link
        css={css`
          display: block;
        `}
        params={{ roomKey }}
      >
        <RoomThumbnail
          nowPlayingVideo={nowPlayingVideo}
          lastPlayingVideo={lastPlayingVideo}
          isHover={isHover}
        />
        <h3
          css={css`
            font-size: 1.2rem;
            font-weight: bold;
            padding: 1rem 0 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          `}
        >
          {name}
        </h3>
        <p
          css={css`
            font-size: 1.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0.4rem 0;
            color: ${color.GRAY_MEDIUM};
          `}
        >
          {generateVideoInfo()}
        </p>
        <span
          css={css`
            display: inline-block;
            border-radius: 1000px;
            padding: 0.4rem 2rem;
            background-color: ${color.PRIMALY};
            font-size: 1.1rem;
            margin: 0.4rem 0;
          `}
        >
          視聴者：
          {onlineUserCount}
        </span>
      </roomRoute.Link>
    </Hoverable>
  );
};

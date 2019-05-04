/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import RoomHeader, {
  RoomHeaderData,
} from 'components/molecules/Rooms/RoomHeader';
import AspectRatio from 'components/atoms/Layouts/AspectRatio';
import RoomVideoInfo, {
  VideoData,
} from 'components/molecules/Videos/RoomVideoInfo';

import RoomInfo, { RoomInfoData } from 'components/molecules/Rooms/RoomInfo';

type Data = RoomHeaderData & RoomInfoData;

export interface RoomData extends Data {
  currentVideo?: VideoData;
}

interface Props extends RoomData {
  className?: string;
  videoAreaRef: React.RefObject<HTMLDivElement>;
}

export default ({
  name,
  roomKey,
  currentVideo: video,
  onlineUsers,
  createUser,
  description,
  className,
  videoAreaRef,
}: Props) => (
  <div
    css={css`
      padding: 2rem 0;
    `}
    className={className}
  >
    <RoomHeader name={name} roomKey={roomKey} />
    <div ref={videoAreaRef}>
      <AspectRatio width={16} height={9} />
    </div>
    <RoomVideoInfo video={video} />
    <RoomInfo
      onlineUsers={onlineUsers}
      createUser={createUser}
      description={description}
    />
  </div>
);

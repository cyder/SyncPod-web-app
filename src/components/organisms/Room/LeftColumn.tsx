/** @jsx jsx */

import { useRef, useState } from 'react';
import { jsx, css } from '@emotion/core';

import RoomFooter from 'components/molecules/Footers/RoomFooter';
import MainView, { RoomData } from 'components/organisms/Room/MainView';
import VideoSearch from 'components/organisms/VideoSearch';
import VideoWrapper from 'components/organisms/Room/VideoWrapper';
import Video from 'components/organisms/Video';

interface Props {
  room: RoomData;
  isEditing: boolean;
  className?: string;
}

export default ({ room, isEditing, className }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoAreaRef = useRef<HTMLDivElement>(null);
  const [isMinified, setIsMinified] = useState<boolean>();

  return (
    <div
      css={css`
        position: relative;
        margin: 0 2rem;
      `}
      className={className}
      ref={wrapperRef}
    >
      {isEditing && isMinified ? (
        <VideoSearch />
      ) : (
        <MainView
          css={css`
            margin-bottom: 5rem;
          `}
          {...room}
          videoAreaRef={videoAreaRef}
        />
      )}
      <RoomFooter />
      <VideoWrapper
        isEditing={isEditing}
        wrapperRef={wrapperRef}
        areaRef={videoAreaRef}
        onChanged={setIsMinified}
      >
        <Video enableMiniPlayer={isMinified} />
      </VideoWrapper>
    </div>
  );
};

export { RoomData };

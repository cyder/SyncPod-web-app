/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useContext, useRef, useState } from 'react';

import RoomFooter from '@/components/molecules/Footers/RoomFooter';
import MainView, { RoomData } from '@/components/organisms/Room/MainView';
import { editingContet } from '@/components/organisms/Room/Provider';
import VideoWrapper from '@/components/organisms/Room/VideoWrapper';
import Video from '@/components/organisms/Video';
import VideoSearch from '@/components/organisms/VideoSearch';

interface Props {
  room: RoomData;
  className?: string;
}

export default ({ room, className }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoAreaRef = useRef<HTMLDivElement>(null);
  const [isMinified, setIsMinified] = useState<boolean>();
  const { isEditing } = useContext(editingContet);

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

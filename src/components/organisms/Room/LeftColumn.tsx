/** @jsx jsx */

import * as React from 'react';
import { jsx, css, SerializedStyles } from '@emotion/core';

import { useResizeEvent } from 'util/hooks/window-events';

import RoomFooter from 'components/molecules/Footers/RoomFooter';
import MainView from 'components/organisms/Room/MainView';
import VideoSearch from 'components/organisms/VideoSearch';
import Video from 'components/organisms/Video';

interface Props {
  roomKey: string;
  isEditing: boolean;
  className?: string;
}

export default ({ roomKey, isEditing, className }: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const videoAreaRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<SerializedStyles>();
  const calcStyle = React.useCallback(() => {
    if (isEditing) {
      if (!wrapperRef.current) {
        return;
      }
      const rect = wrapperRef.current.getBoundingClientRect();
      const width = 320;
      const height = 180;
      setStyle(css`
        position: fixed;
        width: ${width}px;
        height: ${height}px;
        bottom: 20px;
        left: ${rect.right - width}px;
      `);
    } else {
      if (!videoAreaRef.current) {
        return;
      }
      setStyle(css`
        position: absolute;
        top: ${videoAreaRef.current.offsetTop}px;
        left: ${videoAreaRef.current.offsetLeft}px;
        width: ${videoAreaRef.current.clientWidth}px;
        height: ${videoAreaRef.current.clientHeight}px;
      `);
    }
  }, [isEditing, wrapperRef, videoAreaRef]);

  useResizeEvent(calcStyle);
  React.useEffect(calcStyle, [isEditing, wrapperRef, videoAreaRef]);

  return (
    <div
      css={css`
        position: relative;
        margin: 0 2rem;
      `}
      className={className}
      ref={wrapperRef}
    >
      {isEditing ? (
        <VideoSearch />
      ) : (
        <MainView roomKey={roomKey} videoAreaRef={videoAreaRef} />
      )}
      <RoomFooter />
      {wrapperRef && <Video css={style} enableMiniPlayer={isEditing} />}
    </div>
  );
};

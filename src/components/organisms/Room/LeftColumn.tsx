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
  const [wrapperElement, setWrapperElement] = React.useState<HTMLDivElement>();
  const [videoAreaElement, setVideoAreaElement] = React.useState<
    HTMLDivElement
  >();
  const [style, setStyle] = React.useState<SerializedStyles>();
  const calcStyle = React.useCallback(() => {
    if (isEditing) {
      if (!wrapperElement) {
        return;
      }
      const rect = wrapperElement.getBoundingClientRect();
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
      if (!videoAreaElement) {
        return;
      }
      setStyle(css`
        position: absolute;
        top: ${videoAreaElement.offsetTop}px;
        left: ${videoAreaElement.offsetLeft}px;
        width: ${videoAreaElement.clientWidth}px;
        height: ${videoAreaElement.clientHeight}px;
      `);
    }
  }, [isEditing, wrapperElement, videoAreaElement]);

  useResizeEvent(calcStyle);
  React.useEffect(calcStyle, [isEditing, wrapperElement, videoAreaElement]);

  return (
    <div
      css={css`
        position: relative;
        margin: 0 2rem;
      `}
      className={className}
      ref={(el: HTMLDivElement) => setWrapperElement(el)}
    >
      {isEditing ? (
        <VideoSearch />
      ) : (
        <MainView roomKey={roomKey} getVideoAreaElement={setVideoAreaElement} />
      )}
      <RoomFooter />
      {wrapperElement && <Video css={style} enableMiniPlayer={isEditing} />}
    </div>
  );
};

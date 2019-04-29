/** @jsx jsx */

import * as React from 'react';
import { jsx, css, SerializedStyles } from '@emotion/core';

import { useResizeEvent } from 'utils/hooks/window-events';

import RoomFooter from 'components/molecules/Footers/RoomFooter';
import RoomView from 'components/organisms/Room/RoomView';
import VideoSearch from 'components/organisms/Room/VideoSearch';
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
        margin-left: auto;
        margin-right: 2rem;
        width: 90%;
        max-width: 1000px;
      `}
      className={className}
      ref={(el: HTMLDivElement) => setWrapperElement(el)}
    >
      {isEditing ? (
        <VideoSearch />
      ) : (
        <RoomView roomKey={roomKey} getVideoAreaElement={setVideoAreaElement} />
      )}
      <RoomFooter />
      {wrapperElement && <Video css={style} enableMiniPlayer={isEditing} />}
    </div>
  );
};

/** @jsx jsx */

import { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';

import VideoController from 'components/molecules/VideoControllers/VideoController';
import MiniVideoController from 'components/molecules/VideoControllers/MiniVideoController';

import PlayerMode from 'components/organisms/Video/PlayerMode';

interface Props {
  mode: PlayerMode;
  handleFullScreenButton(): void;
  className?: string;
}

export default ({ mode, handleFullScreenButton, className }: Props) => {
  const [active, setActive] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number>();
  const handleMouseMove = useCallback(() => {
    window.clearTimeout(timeoutId);
    setActive(true);
    const id = window.setTimeout(() => {
      setActive(false);
    }, 3000);
    setTimeoutId(id);
  }, [timeoutId]);
  const handleMouseLeave = useCallback(() => {
    window.clearTimeout(timeoutId);
    setActive(false);
  }, [timeoutId]);

  return (
    <div
      css={css`
        position: relative;
        opacity: ${active ? 1 : 0};
        transition: opacity 0.4s ease;
      `}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {mode === 'miniplayer' ? (
        <MiniVideoController
          css={css`
            width: 100%;
            height: 100%;
          `}
        />
      ) : (
        <VideoController
          css={css`
            position: absolute;
            bottom: 0;
            width: 100%;
          `}
          onFullscreenButtonClick={handleFullScreenButton}
          isFullscreen={mode === 'fullscreen'}
        />
      )}
    </div>
  );
};

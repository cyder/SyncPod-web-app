/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import * as React from 'react';

import BrowserFullScreen from '@/components/atoms/FullScreens/BrowserFullScreen';
import Controller from '@/components/organisms/Video/Controller';
import PlayerMode from '@/components/organisms/Video/PlayerMode';
import YouTubePlayer from '@/components/organisms/Video/YouTubePlayer';

interface Props {
  className?: string;
  enableMiniPlayer?: boolean;
}

export default ({ className, enableMiniPlayer }: Props) => {
  const [mode, setMode] = React.useState<PlayerMode>(
    enableMiniPlayer ? 'miniplayer' : 'default',
  );
  const enableFullScreen = React.useCallback(() => {
    setMode('fullscreen');
  }, []);
  const disableFullScreen = React.useCallback(() => {
    setMode(enableMiniPlayer ? 'miniplayer' : 'default');
  }, []);
  const handleFullScreenButton = React.useCallback(() => {
    if (mode === 'fullscreen') {
      disableFullScreen();
    } else {
      enableFullScreen();
    }
  }, [mode, enableMiniPlayer]);
  const handleFullScreenChange = React.useCallback((enable: boolean) => {
    if (enable) {
      enableFullScreen();
    } else {
      disableFullScreen();
    }
  }, []);
  React.useEffect(() => {
    if (mode !== 'fullscreen') {
      if (enableMiniPlayer) {
        setMode('miniplayer');
      } else {
        setMode('default');
      }
    }
  }, [enableMiniPlayer]);

  return (
    <BrowserFullScreen
      enable={mode === 'fullscreen'}
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
      `}
      className={className}
      onChange={handleFullScreenChange}
    >
      <YouTubePlayer />
      <Controller
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        `}
        handleFullScreenButton={handleFullScreenButton}
        mode={mode}
      />
    </BrowserFullScreen>
  );
};

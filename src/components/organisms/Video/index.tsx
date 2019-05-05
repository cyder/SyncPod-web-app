/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import * as React from 'react';

import BrowserFullScreen from 'components/atoms/FullScreens/BrowserFullScreen';

import PlayerMode from 'components/organisms/Video/PlayerMode';

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

  return (
    <BrowserFullScreen
      enable={mode === 'fullscreen'}
      css={css`
        background-color: #333333;
        color: #ffffff;
        width: 100%;
        height: 100%;
      `}
      className={className}
      onChange={handleFullScreenChange}
    >
      video
      <button type="button" onClick={handleFullScreenButton}>
        Full Screen
      </button>
    </BrowserFullScreen>
  );
};

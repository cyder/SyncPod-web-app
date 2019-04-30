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
  const handleFullScreenButton = React.useCallback(() => {
    if (mode === 'fullscreen') {
      setMode(enableMiniPlayer ? 'miniplayer' : 'default');
    } else {
      setMode('fullscreen');
    }
  }, [mode, enableMiniPlayer]);

  return (
    <BrowserFullScreen
      enableFullScreen={mode === 'fullscreen'}
      css={css`
        background-color: #ffff00;
      `}
      className={className}
    >
      video
      <button type="button" onClick={handleFullScreenButton}>
        Full Screen
      </button>
    </BrowserFullScreen>
  );
};

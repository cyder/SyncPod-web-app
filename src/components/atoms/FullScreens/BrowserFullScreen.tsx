/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import {
  currentFullScreenElement,
  openFullScreen,
  closeFullScreen,
} from 'util/browser-api/full-screen';
import { useFullScreenChange } from 'util/hooks/window-events';

interface Props {
  enable?: boolean;
  children?: React.ReactNode;
  className?: string;
  onChange?(enable: boolean): void;
}

/**
 * html5のbrowser full screen
 */
export default ({ enable, children, className, onChange }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (enable) {
      openFullScreen(ref);
    } else {
      closeFullScreen();
    }
  }, [enable, ref]);

  useFullScreenChange(() => {
    if (currentFullScreenElement() === ref.current) {
      if (onChange) {
        onChange(true);
      }
    }

    if (enable && !currentFullScreenElement()) {
      if (onChange) {
        onChange(false);
      }
    }
  });

  return (
    <div
      css={
        enable &&
        css`
          :fullscreen {
            width: 100%;
            height: 100%;
          }
          :-webkit-full-screen {
            width: 100%;
            height: 100%;
          }
          :-moz-full-screen {
            width: 100%;
            height: 100%;
          }
        `
      }
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};

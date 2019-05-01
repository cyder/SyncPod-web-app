/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import { openFullScreen, closeFullScreen } from 'util/browser-api/full-screen';

interface Props {
  enableFullScreen?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * html5のbrowser full screen
 */
export default ({ enableFullScreen, children, className }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (enableFullScreen) {
      openFullScreen(ref.current);
    } else {
      closeFullScreen();
    }
  }, [enableFullScreen, ref]);

  return (
    <div
      css={
        enableFullScreen &&
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

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
  const [element, setElement] = React.useState<HTMLDivElement>();

  React.useEffect(() => {
    if (!element) {
      return;
    }
    if (enableFullScreen) {
      openFullScreen(element);
    } else {
      closeFullScreen();
    }
  }, [enableFullScreen, element]);

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
      ref={(el: HTMLDivElement) => setElement(el)}
      className={className}
    >
      {children}
    </div>
  );
};

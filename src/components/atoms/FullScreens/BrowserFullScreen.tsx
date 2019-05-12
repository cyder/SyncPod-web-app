/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useRef, useState } from 'react';

import {
  closeFullScreen,
  currentFullScreenElement,
  openFullScreen,
} from '@/util/browser-api/full-screen';
import { useFullScreenChange } from '@/util/hooks/window-events';

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
  const ref = useRef<HTMLDivElement>(null);
  const [prevEnable, setPrevEnable] = useState<boolean>();

  if (enable !== prevEnable && ref.current) {
    if (enable) {
      openFullScreen(ref.current);
    } else {
      closeFullScreen();
    }
    setPrevEnable(enable);
  }

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

/** @jsx jsx */

import * as React from 'react';
import { jsx, css, SerializedStyles } from '@emotion/core';

import { useResizeEvent } from 'utils/hooks/window-events';

export type PlayerMode = 'default' | 'miniplayer' | 'fullscreen';

interface Props {
  mode: PlayerMode;
  parentElement: HTMLDivElement;
  videoAreaElement?: HTMLDivElement;
  className?: string;
  children?: React.ReactNode;
}

export default ({
  mode,
  parentElement,
  videoAreaElement,
  className,
  children,
}: Props) => {
  const [style, setStyle] = React.useState<SerializedStyles>();
  const calcStyle = React.useCallback(() => {
    switch (mode) {
      case 'default': {
        if (!videoAreaElement) {
          break;
        }
        setStyle(css`
          position: absolute;
          top: ${videoAreaElement.offsetTop}px;
          left: ${videoAreaElement.offsetLeft}px;
          width: ${videoAreaElement.clientWidth}px;
          height: ${videoAreaElement.clientHeight}px;
        `);
        break;
      }
      case 'miniplayer': {
        const rect = parentElement.getBoundingClientRect();
        const width = 320;
        const height = 180;
        setStyle(css`
          position: fixed;
          width: ${width}px;
          height: ${height}px;
          bottom: 20px;
          left: ${rect.right - width}px;
        `);
        break;
      }
      default:
        break;
    }
  }, [mode, parentElement, videoAreaElement]);

  useResizeEvent(calcStyle);
  React.useEffect(calcStyle, [mode, parentElement, videoAreaElement]);

  return (
    <div css={style} className={className}>
      {children}
    </div>
  );
};

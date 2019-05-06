/** @jsx jsx */

import {
  ReactNode,
  RefObject,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { jsx, css, SerializedStyles } from '@emotion/core';

import { useResizeEvent } from 'util/hooks/window-events';

interface Props {
  isEditing: boolean;
  wrapperRef: RefObject<HTMLDivElement>;
  areaRef: RefObject<HTMLDivElement>;
  children: ReactNode;
  onChanged(editing: boolean): void;
}

export default ({
  isEditing,
  wrapperRef,
  areaRef,
  onChanged,
  children,
}: Props) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const initStyle = css`
    display: none;
  `;
  const [style, setStyle] = useState<SerializedStyles>(initStyle);
  const animationSec = 0.4;

  const toMiniPlayer = useCallback(
    (
      wrapperElement: HTMLDivElement,
      videoPlayerElement: HTMLDivElement,
      enableAnimation: boolean = false,
    ) => {
      const playerRect = videoPlayerElement.getBoundingClientRect();
      const wrapperRect = wrapperElement.getBoundingClientRect();
      const width = 320;
      const height = 180;
      const beforeStyle = css`
        position: fixed;
        width: ${playerRect.width}px;
        height: ${playerRect.height}px;
        bottom: ${window.innerHeight - playerRect.bottom}px;
        left: ${playerRect.left}px;
      `;
      const afterStyle = css`
        ${enableAnimation &&
          css`
            transition: all ${animationSec}s ease;
          `}
        position: fixed;
        width: ${width}px;
        height: ${height}px;
        bottom: 20px;
        left: ${wrapperRect.right - width}px;
      `;
      if (enableAnimation) {
        window.requestAnimationFrame(() => {
          setStyle(beforeStyle);
          window.requestAnimationFrame(() => {
            setStyle(afterStyle);
          });
        });
      } else {
        setStyle(afterStyle);
      }
      onChanged(true);
    },
    [],
  );

  const toNormalPlayer = useCallback(
    (
      wrapperElement: HTMLDivElement,
      videoAreaElement: HTMLDivElement,
      videoPlayerElement: HTMLDivElement,
      enableAnimation: boolean = false,
    ) => {
      const wrapperRect = wrapperElement.getBoundingClientRect();
      const playerRect = videoPlayerElement.getBoundingClientRect();
      const beforeStyle = css`
        position: absolute;
        top: ${playerRect.top - wrapperRect.top}px;
        left: ${playerRect.left - wrapperRect.left}px;
        width: ${playerRect.width}px;
        height: ${playerRect.height}px;
      `;
      const afterStyle = css`
        ${enableAnimation &&
          css`
            transition: all ${animationSec}s ease;
          `}
        position: absolute;
        top: ${videoAreaElement.offsetTop}px;
        left: ${videoAreaElement.offsetLeft}px;
        width: ${videoAreaElement.clientWidth}px;
        height: ${videoAreaElement.clientHeight}px;
      `;

      if (enableAnimation) {
        window.requestAnimationFrame(() => {
          setStyle(beforeStyle);
          window.requestAnimationFrame(() => {
            setStyle(afterStyle);
          });
        });
      } else {
        setStyle(afterStyle);
      }
      onChanged(false);
    },
    [],
  );

  const updateStyle = useCallback(() => {
    if (!wrapperRef.current || !playerRef.current) {
      return;
    }
    if (isEditing) {
      toMiniPlayer(wrapperRef.current, playerRef.current);
    } else if (areaRef.current) {
      toNormalPlayer(wrapperRef.current, areaRef.current, playerRef.current);
    }
  }, [isEditing]);

  useResizeEvent(updateStyle);
  useEffect(() => {
    if (style === initStyle) {
      updateStyle();
      return;
    }
    if (!wrapperRef.current || !playerRef.current) {
      return;
    }
    if (isEditing) {
      toMiniPlayer(wrapperRef.current, playerRef.current, true);
    } else if (areaRef.current) {
      toNormalPlayer(
        wrapperRef.current,
        areaRef.current,
        playerRef.current,
        true,
      );
    }
  }, [isEditing]);

  return (
    <div css={style} ref={playerRef}>
      {children}
    </div>
  );
};

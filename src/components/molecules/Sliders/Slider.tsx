/** @jsx jsx */

import { ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import { jsx, css } from '@emotion/core';

import SliderButton from 'components/molecules/Buttons/SliderButton';

interface Props {
  children: ReactNode;
  className?: string;
}

export default ({ children, className }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  const handleLeftButton = useCallback(() => {
    if (!wrapperRef.current || !contentRef.current) {
      return;
    }
    const wrapperWidth = wrapperRef.current.clientWidth;
    if (wrapperWidth < offset) {
      setOffset(offset - wrapperWidth);
    } else {
      setOffset(0);
    }
  }, [offset]);

  const handleRightButton = useCallback(() => {
    if (!wrapperRef.current || !contentRef.current) {
      return;
    }
    const wrapperWidth = wrapperRef.current.clientWidth;
    const remainingWidth =
      contentRef.current.scrollWidth - wrapperWidth - offset;
    if (wrapperWidth < remainingWidth) {
      setOffset(offset + wrapperWidth);
    } else {
      setOffset(offset + remainingWidth);
    }
  }, [offset]);

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      const wrapperWidth = wrapperRef.current.clientWidth;
      const remainingWidth =
        contentRef.current.scrollWidth - wrapperWidth - offset;
      if (remainingWidth > 0) {
        setIsEnd(false);
      } else {
        setIsEnd(true);
      }
      if (offset > 0) {
        setIsStart(false);
      } else {
        setIsStart(true);
      }
    }
  }, [children, offset]);

  return (
    <div
      ref={wrapperRef}
      css={css`
        position: relative;
      `}
      className={className}
    >
      <div
        css={css`
          overflow: hidden;
        `}
      >
        <div
          ref={contentRef}
          css={css`
            transform: translateX(${-offset}px);
            transition: transform 0.4s ease;
          `}
        >
          {children}
        </div>
      </div>
      <SliderButton
        direction="left"
        onClick={handleLeftButton}
        visible={!isStart}
      />
      <SliderButton
        direction="right"
        onClick={handleRightButton}
        visible={!isEnd}
      />
    </div>
  );
};

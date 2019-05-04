/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import AspectRatio from 'components/atoms/Layouts/AspectRatio';

import { color } from 'constants/styles';
import SvgIconButton from 'components/atoms/Buttons/SvgIconButton';

export interface RoomInfo {
  name: string;
  key: string;
}

interface Props {
  room: RoomInfo;
  className?: string;
  videoAreaRef: React.RefObject<HTMLDivElement>;
}

export default ({ room, className, videoAreaRef }: Props) => (
  <div
    css={css`
      padding: 2rem 0;
    `}
    className={className}
  >
    <div
      css={css`
        display: flex;
        align-items: baseline;
        padding: 1rem 0;
      `}
    >
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        {room.name}
      </h1>
      <p
        css={css`
          font-size: 1.4rem;
          color: ${color.GRAY_MEDIUM};
          padding: 0 1rem;
        `}
      >
        {room.key}
      </p>
      <div
        css={css`
          flex: 1;
        `}
      />
      <SvgIconButton icon="share" size="1.2rem">
        共有
      </SvgIconButton>
    </div>
    <div ref={videoAreaRef}>
      <AspectRatio width={16} height={9}>
        Video
      </AspectRatio>
    </div>
    <h2>動画名</h2>
    <p>チャンネル名</p>
    <h3>オンラインメンバー</h3>
    <h3>ルームオーナー</h3>
    <h3>ルームの説明</h3>
  </div>
);

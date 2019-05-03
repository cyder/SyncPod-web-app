/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import AspectRatio from 'components/atoms/Layouts/AspectRatio';

interface Props {
  roomKey: string;
  className?: string;
  videoAreaRef: React.RefObject<HTMLDivElement>;
}

export default ({ roomKey, className, videoAreaRef }: Props) => (
  <div
    css={css`
      height: 200vh;
    `}
    className={className}
  >
    <h1>Room名</h1>
    <p>{roomKey}</p>
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

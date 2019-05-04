/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import AspectRatio from 'components/atoms/Layouts/AspectRatio';
import SvgIconButton from 'components/atoms/Buttons/SvgIconButton';
import MultiLineText from 'components/atoms/Texts/MultiLineText';
import UserIcon, { User } from 'components/atoms/Users/UserIcon';
import UserIconList from 'components/molecules/Users/UserIconList';

import { color } from 'constants/styles';

interface Video {
  title: string;
  channelTitle: string;
}

export interface RoomInfo {
  name: string;
  key: string;
  video?: Video;
  onlineUsers: User[];
  createUser: User;
  description: string;
}

interface Props {
  room: RoomInfo;
  className?: string;
  videoAreaRef: React.RefObject<HTMLDivElement>;
}

export default ({ room, className, videoAreaRef }: Props) => {
  const h3Style = css`
    font-weight: bold;
    font-size: 1.4rem;
    padding: 2rem 0 0.5rem;
  `;

  return (
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
            font-weight: bold;
          `}
        >
          {room.name}
        </h1>
        <p
          css={css`
            font-size: 1.4rem;
            color: ${color.GRAY_DARK};
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
        <AspectRatio width={16} height={9} />
      </div>
      <h2
        css={css`
          font-size: 1.8rem;
          font-weight: bold;
          padding: 2rem 0 0.5rem;
        `}
      >
        {room.video ? room.video.title : '再生中の動画はありません'}
      </h2>
      <p
        css={css`
          font-size: 1.2rem;
          color: ${color.GRAY_DARK};
          padding: 0.5rem 0 1rem;
        `}
      >
        {room.video
          ? room.video.channelTitle
          : 'プレイリストに動画を追加してください。'}
      </p>
      <h3 css={h3Style}>オンラインメンバー</h3>
      <UserIconList users={room.onlineUsers} />
      <h3 css={h3Style}>ルームオーナー</h3>
      <UserIcon {...room.createUser} visibleName />
      <h3 css={h3Style}>ルームの説明</h3>
      <MultiLineText
        css={css`
          font-size: 1.2rem;
          line-height: 2rem;
          color: ${color.GRAY_DARK};
        `}
      >
        {room.description}
      </MultiLineText>
    </div>
  );
};

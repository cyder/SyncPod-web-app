/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import MainFooter from '@/components/molecules/Footers/MainFooter';
import RoomList, { RoomListItemProps } from '@/components/organisms/RoomList';

export default () => {
  const popularRooms: RoomListItemProps[] = [
    {
      roomKey: 'aaaaaaaa',
      name: 'コウイチTVしか見るものがないコウイチTVしか見るものがない',
      nowPlayingVideo: {
        title:
          '途中までしか単語が出てこない途中までしか単語が出てこない途中までしか単語が出てこない',
        thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      },
      onlineUserCount: 222,
    },
    {
      roomKey: 'bbbbbbbb',
      name: 'コウイチって何',
      lastPlayingVideo: {
        title: '途中までしか単語が出てこない',
        thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      },
      onlineUserCount: 222,
    },
    {
      roomKey: 'cccccccc',
      name: 'コウイチTV見ようぜ！',
      onlineUserCount: 0,
    },
    {
      roomKey: 'dddddd',
      name: 'コウイチTVしか見るものがないコウイチTVしか見るものがない',
      nowPlayingVideo: {
        title:
          '途中までしか単語が出てこない途中までしか単語が出てこない途中までしか単語が出てこない',
        thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      },
      onlineUserCount: 222,
    },
    {
      roomKey: 'eeeeee',
      name: 'コウイチって何',
      lastPlayingVideo: {
        title: '途中までしか単語が出てこない',
        thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      },
      onlineUserCount: 222,
    },
    {
      roomKey: 'ffffff',
      name: 'コウイチTV見ようぜ！',
      onlineUserCount: 0,
    },
  ];
  const recentlyJoinedRooms: RoomListItemProps[] = [];
  const recommendedRooms: RoomListItemProps[] = [];

  return (
    <div>
      <div
        css={css`
          max-width: 140rem;
          margin: 0 auto;
          padding: 1rem 5%;
        `}
      >
        <RoomList
          title="人気のルーム"
          emptyMessage="人気のルームはまだありません。"
          items={popularRooms}
        />
        <RoomList
          title="最近参加したルーム"
          emptyMessage="最近入ったルームはありません。ルームを作成するか、友達のルームに参加しよう。"
          items={recentlyJoinedRooms}
        />
        <RoomList
          title="おすすめのルーム"
          emptyMessage="おすすめのルームはありません。"
          items={recommendedRooms}
        />
      </div>
      <MainFooter />
    </div>
  );
};

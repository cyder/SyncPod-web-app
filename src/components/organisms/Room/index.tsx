/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import LeftColumn, { RoomData } from '@/components/organisms/Room/LeftColumn';
import Provider from '@/components/organisms/Room/Provider';
import RightColumn from '@/components/organisms/Room/RightColumn';
import { size } from '@/constants/styles';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => {
  const room: RoomData = {
    roomKey,
    name: 'ルーム名',
    currentVideo: {
      title: '現在再生中の動画名',
      channelTitle: '現在再生中の動画のチャンネル名',
    },
    onlineUsers: [
      {
        id: 'user1',
        name: 'ユーザ1',
        icon:
          'https://pbs.twimg.com/profile_images/1085340387277828096/kEcxyrYF_400x400.jpg',
      },
      {
        id: 'user2',
        name: 'ユーザ2',
      },
      {
        id: 'user3',
        name: 'ユーザ3',
      },
      {
        id: 'user4',
        name: 'ユーザ4',
      },
      {
        id: 'user5',
        name: 'ユーザ5',
      },
      {
        id: 'user6',
        name: 'ユーザ6',
      },
      {
        id: 'user7',
        name: 'ユーザ7',
      },
      {
        id: 'user8',
        name: 'ユーザ8',
      },
      {
        id: 'user9',
        name: 'ユーザ9',
      },
      {
        id: 'user10',
        name: 'ユーザ10',
      },
    ],
    createUser: {
      id: 'room owner',
      name: 'ユーザ名',
      icon:
        'https://pbs.twimg.com/profile_images/1085340387277828096/kEcxyrYF_400x400.jpg',
    },
    description:
      'ルームの説明ルームの説明ルームの説明\nルームの説明ルームの説明ルームの説明ルームの説明ルームの説明ルームの説明ルームの説明',
  };

  return (
    <Provider>
      <div
        css={css`
          display: flex;
          width: 100%;
          max-width: 1600px;
          margin: auto;
          padding: 0 1rem;
        `}
      >
        <div
          css={css`
            flex: 1;
            min-width: 0;
          `}
        >
          <LeftColumn room={room} />
        </div>
        <div
          css={css`
            flex: 0 0 360px;
            height: calc(100vh - ${size.HEADER_HEIGHT});
            position: sticky;
            top: ${size.HEADER_HEIGHT};
          `}
        >
          <RightColumn
            css={css`
              height: 100%;
            `}
          />
        </div>
      </div>
    </Provider>
  );
};

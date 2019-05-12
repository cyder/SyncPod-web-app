/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import * as React from 'react';

import LeftColumn, { RoomData } from '@/components/organisms/Room/LeftColumn';
import RightColumn from '@/components/organisms/Room/RightColumn';
import { size } from '@/constants/styles';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const room: RoomData = {
    roomKey,
    name: 'ルーム名',
    currentVideo: {
      title: '現在再生中の動画名',
      channelTitle: '現在再生中の動画のチャンネル名',
    },
    onlineUsers: [
      {
        id: 1,
        name: 'ユーザ1',
        icon:
          'https://pbs.twimg.com/profile_images/1085340387277828096/kEcxyrYF_400x400.jpg',
      },
      {
        id: 2,
        name: 'ユーザ2',
      },
      {
        id: 3,
        name: 'ユーザ3',
      },
      {
        id: 4,
        name: 'ユーザ4',
      },
      {
        id: 5,
        name: 'ユーザ5',
      },
      {
        id: 6,
        name: 'ユーザ6',
      },
      {
        id: 7,
        name: 'ユーザ7',
      },
      {
        id: 8,
        name: 'ユーザ8',
      },
      {
        id: 9,
        name: 'ユーザ9',
      },
      {
        id: 10,
        name: 'ユーザ10',
      },
    ],
    createUser: {
      id: 11,
      name: 'ユーザ名',
      icon:
        'https://pbs.twimg.com/profile_images/1085340387277828096/kEcxyrYF_400x400.jpg',
    },
    description:
      'ルームの説明ルームの説明ルームの説明\nルームの説明ルームの説明ルームの説明ルームの説明ルームの説明ルームの説明ルームの説明',
  };

  return (
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
        <LeftColumn room={room} isEditing={isEditing} />
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
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
};

/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import * as React from 'react';

import RightColumn from 'components/organisms/Room/RightColumn';
import LeftColumn, { RoomInfo } from 'components/organisms/Room/LeftColumn';

import { size } from 'constants/styles';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const room: RoomInfo = {
    key: roomKey,
    name: 'ルーム名',
  };

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        max-width: 1600px;
        margin: auto;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <LeftColumn room={room} isEditing={isEditing} />
      </div>
      <div
        css={css`
          width: 360px;
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

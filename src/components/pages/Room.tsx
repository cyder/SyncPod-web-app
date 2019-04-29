/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import * as React from 'react';

import RoomTab from 'components/organisms/Room/RoomTab';
import RoomMain from 'components/organisms/Room/RoomMain';

import { size } from 'constants/styles';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => {
  const [isEditing, setIsEditing] = React.useState(false);

  console.log(roomKey);

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          flex: 1;
          overflow-y: auto;
        `}
      >
        <RoomMain isEditing={isEditing} />
      </div>
      <RoomTab
        css={css`
          width: 360px;
          height: calc(100vh - ${size.HEADER_HEIGHT});
          position: sticky;
          top: ${size.HEADER_HEIGHT};
        `}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </div>
  );
};

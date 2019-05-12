/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import RoomThumbnail from '@/components/molecules/Rooms/RoomThumbnail';
import { color } from '@/constants/styles';

interface Props {
  message: string;
}

export default ({ message }: Props) => (
  <div>
    <RoomThumbnail />
    <p
      css={css`
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding: 1rem 0;
        color: ${color.GRAY_MEDIUM};
      `}
    >
      {message}
    </p>
  </div>
);

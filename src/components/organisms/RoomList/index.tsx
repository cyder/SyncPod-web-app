/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import RoomListItem, {
  RoomListItemProps,
} from 'components/molecules/Rooms/RoomListItem';

import { color } from 'constants/styles';
import RoomEmptyItem from 'components/molecules/Rooms/RoomEmptyItem';

export interface RoomListProps {
  title: string;
  emptyMessage: string;
  items: RoomListItemProps[];
}

export default ({ title, emptyMessage, items }: RoomListProps) => (
  <div
    css={css`
      :not(:last-child) {
        border-bottom: 1px solid ${color.GRAY_MEDIUM};
      }
      padding: 2rem 0;
    `}
  >
    <h2
      css={css`
        font-size: 1.8rem;
        font-weight: bold;
        padding: 1.5rem 0;
      `}
    >
      {title}
    </h2>
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
        grid-gap: 2rem 1.5rem;
      `}
    >
      {items.length ? (
        items.map(item => <RoomListItem key={item.roomKey} {...item} />)
      ) : (
        <RoomEmptyItem message={emptyMessage} />
      )}
    </div>
  </div>
);

export { RoomListItemProps };

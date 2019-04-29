/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import RoomFooter from 'components/molecules/Footers/RoomFooter';
import VideoSearch from './VideoSearch';
import RoomView from './RoomView';

interface Props {
  isEditing: boolean;
  className?: string;
}

export default ({ isEditing, className }: Props) => (
  <div
    css={css`
      position: relative;
    `}
    className={className}
  >
    {isEditing ? <VideoSearch /> : <RoomView />}
    <RoomFooter />
  </div>
);

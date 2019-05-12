/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import EditButton from '@/components/organisms/PlayList/EditButton';
import VideoList from '@/components/organisms/PlayList/VideoList';

interface Props {
  className?: string;
  isEditing: boolean;
  setIsEditing(flag: boolean): void;
}

export default ({ className, isEditing, setIsEditing }: Props) => (
  <div
    className={className}
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <EditButton isEditing={isEditing} setIsEditing={setIsEditing} />
    <VideoList
      css={css`
        flex: 1 1 0;
        margin-bottom: 1rem;
      `}
    />
  </div>
);

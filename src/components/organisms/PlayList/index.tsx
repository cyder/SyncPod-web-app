/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import EditButton from '@/components/organisms/PlayList/EditButton';
import VideoList from '@/components/organisms/PlayList/VideoList';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    className={className}
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <EditButton />
    <VideoList
      css={css`
        flex: 1 1 0;
        margin-bottom: 1rem;
      `}
    />
  </div>
);

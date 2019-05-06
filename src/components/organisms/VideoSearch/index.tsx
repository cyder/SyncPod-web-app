/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SearchInput from 'components/organisms/VideoSearch/SearchInput';
import VideoList from 'components/organisms/VideoSearch/VideoList';

import { color, size } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      margin-bottom: 3rem;
    `}
    className={className}
  >
    <SearchInput
      css={css`
        padding: 2rem 0 1rem;
        position: sticky;
        top: ${size.HEADER_HEIGHT};
        background: ${color.WHITE};
      `}
    />
    <VideoList />
  </div>
);

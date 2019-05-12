/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import SearchInput from '@/components/organisms/VideoSearch/SearchInput';
import VideoList from '@/components/organisms/VideoSearch/VideoList';
import { color, size, zIndex } from '@/constants/styles';

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
        z-index: ${zIndex.SEARCH_INPUT};
        padding: 2rem 0;
        position: sticky;
        top: ${size.HEADER_HEIGHT};
        background: ${color.WHITE};
      `}
    />
    <VideoList
      css={css`
        overflow: auto;
      `}
    />
  </div>
);

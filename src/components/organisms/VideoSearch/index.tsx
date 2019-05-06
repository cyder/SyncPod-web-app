/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SearchInput from 'components/organisms/VideoSearch/SearchInput';

import { color, size } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div css={css``} className={className}>
    <div
      css={css`
        padding: 2rem 0;
        position: sticky;
        top: ${size.HEADER_HEIGHT};
        background: ${color.WHITE};
      `}
    >
      <SearchInput />
    </div>
    <div
      css={css`
        height: 200vh;
      `}
    >
      検索結果
    </div>
  </div>
);

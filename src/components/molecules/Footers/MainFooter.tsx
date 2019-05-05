/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import AppInfo from 'components/molecules/AppInfos/AppInfo';

import { color } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <footer
    css={css`
      background: ${color.GRAY_LIGHT};
      padding: 1rem;
    `}
    className={className}
  >
    <AppInfo
      css={css`
        width: 90%;
        max-width: 90rem;
        margin: 6rem auto;
      `}
    />
  </footer>
);

/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import FooterMenu from 'components/molecules/Menus/FooterMenu';
import AppInfo from 'components/molecules/AppInfos/AppInfo';
import Copylight from 'components/atoms/Copylights/Copylight';

import { color } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <footer
    css={css`
      background: ${color.GRAY_LIGHT};
      padding: 1rem 0 2rem;
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
    <div
      css={css`
        border-top: 1px solid ${color.BLACK};
        margin: 0 5%;
      `}
    >
      <FooterMenu
        css={css`
          margin: 6rem 0;
        `}
      />
    </div>
    <Copylight />
  </footer>
);

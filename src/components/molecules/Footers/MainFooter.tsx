/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import Copylight from '@/components/atoms/Copylights/Copylight';
import AppInfo from '@/components/molecules/AppInfos/AppInfo';
import FooterMenu from '@/components/molecules/Menus/FooterMenu';
import { color } from '@/constants/styles';

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
          margin: 6rem 0 4rem;
        `}
      />
      <Copylight />
    </div>
  </footer>
);

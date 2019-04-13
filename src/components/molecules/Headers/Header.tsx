/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Logo from 'components/atoms/Logo';
import HeaderMenu from 'components/molecules/Menus/HeaderMenu';

export default () => (
  <div
    css={css`
      position: sticky;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 50px;
      background-color: #f05c00;
    `}
  >
    <Logo />
    <HeaderMenu />
  </div>
);

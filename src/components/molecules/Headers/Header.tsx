/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIcon, { icons } from 'components/atoms/SvgIcons';
import HeaderMenu from 'components/molecules/Menus/HeaderMenu';

export default () => (
  <div
    css={css`
      position: sticky;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 50px;
      background-color: #f05c00;
      padding-bottom: 4px;
    `}
  >
    <SvgIcon height="32px" icon={icons.logo} />
    <HeaderMenu />
  </div>
);

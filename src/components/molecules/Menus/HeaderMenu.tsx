/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import HeaderMenuItem from 'components/atoms/Menus/HeaderMenuItem';

export default () => (
  <div
    css={css`
      display: flex;
    `}
  >
    <HeaderMenuItem>アカウント作成</HeaderMenuItem>
    <HeaderMenuItem>ログイン</HeaderMenuItem>
    <HeaderMenuItem>ルームに参加する</HeaderMenuItem>
  </div>
);

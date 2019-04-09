/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import MenuItem from 'components/atoms/Menus/HeaderMenuItem';
import { topRoute } from 'components/Router/config';

export default () => (
  <div
    css={css`
      padding-bottom: 8px;
    `}
  >
    <topRoute.Link params>
      <MenuItem>アカウント名</MenuItem>
    </topRoute.Link>
    <topRoute.Link params>
      <MenuItem>ログイン</MenuItem>
    </topRoute.Link>
    <topRoute.Link params>
      <MenuItem>ルームに参加する</MenuItem>
    </topRoute.Link>
    <topRoute.Link params>
      <MenuItem>ルームを作成する</MenuItem>
    </topRoute.Link>
  </div>
);

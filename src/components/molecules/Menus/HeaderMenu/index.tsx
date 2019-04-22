/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import MenuItem from 'components/atoms/Menus/HeaderMenuItem';
import { topRoute } from 'components/Router/config';

export default () => (
  <div
    css={css`
      display: flex;
    `}
  >
    <MenuItem>
      <topRoute.Link params>
        アカウント名
      </topRoute.Link>
    </MenuItem>
    <MenuItem>
      <topRoute.Link params>
        ログイン
      </topRoute.Link>
    </MenuItem>
    <MenuItem>
      <topRoute.Link params>
        ルームに参加する
      </topRoute.Link>
    </MenuItem>
    <MenuItem>
      <topRoute.Link params>
        ルームを作成する
      </topRoute.Link>
    </MenuItem>
  </div>
);

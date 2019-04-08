/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Label from 'components/atoms/Label';
import { topRoute } from 'components/Router/config';

export default () => (
  <div css={css`padding-bottom: 8px;`} >
    <topRoute.Link params><Label>アカウント名</Label></topRoute.Link>
    <topRoute.Link params><Label>ログイン</Label></topRoute.Link>
    <topRoute.Link params><Label>ルームに参加する</Label></topRoute.Link>
    <topRoute.Link params><Label>ルームを作成する</Label></topRoute.Link>
  </div>
);

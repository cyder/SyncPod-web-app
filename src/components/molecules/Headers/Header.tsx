import * as React from 'react';
import { css } from '@emotion/core';

import { topRoute, roomRoute } from 'components/Router/config';

export default () => (
  <div
    css={css`
      display: flex;
    `}
  >
    <topRoute.Link params>Top</topRoute.Link>
    <roomRoute.Link params={{ roomKey: 'test' }}>Room</roomRoute.Link>
  </div>
);

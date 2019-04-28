import * as React from 'react';
import { Global, css } from '@emotion/core';

import { color } from 'constants/styles';

export default () => (
  <Global
    styles={css`
      body,
      html {
        font-family: 'Yu Gothic', YuGothic;
        font-size: 10px;
        min-width: 800px;
        color: ${color.BLACK};
      }
    `}
  />
);

import { Global, css } from '@emotion/core';
import * as React from 'react';

import { color } from '@/constants/styles';

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

import * as React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      body,
      html {
        font-family: 'Yu Gothic', YuGothic;
        font-size: 10px;
        min-width: 800px;
      }
    `}
  />
);

import { Global, css } from '@emotion/core';
import * as React from 'react';

export default () => (
  <Global
    styles={css`
      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);

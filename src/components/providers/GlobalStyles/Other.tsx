import * as React from 'react';
import { Global, css } from '@emotion/core';

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
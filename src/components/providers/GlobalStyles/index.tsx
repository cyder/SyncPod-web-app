import * as React from 'react';
import { Global, css } from '@emotion/core';
import 'reset-css';

import Boxsize from 'components/providers/GlobalStyles/Boxsize';

const globalStyles = css`
  body, html {
    font-family: 'Yu Gothic', YuGothic;
    font-size: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default () => (
  <>
    <Global styles={globalStyles} />
    <Boxsize />
  </>
);

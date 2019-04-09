import * as React from 'react';
import {Global, css} from "@emotion/core";
import 'reset-css';

import Boxsize from 'components/providers/GlobalStyles/Boxsize';

const globalStyles = css`
  body {
    font-family: 'Yu Gothic', YuGothic;
  }
  a {
    text-decoration: none;
  }
`;

export default () => (
  <>
    <Global styles={globalStyles} />
    <Boxsize />
  </>
);

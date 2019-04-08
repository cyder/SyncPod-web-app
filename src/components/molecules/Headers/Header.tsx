/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Logo from 'components/atoms/Logo';
import Navbar from 'components/molecules/Navbar';

export default () => (
  <div
    css={css`
      position: sticky;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 50px;
      background-color: #f05c00;
    `}
  >
    <Logo path="img/logo.svg" alt="logo" />
    <Navbar />
  </div>
);

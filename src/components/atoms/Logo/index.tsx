/** @jsx jsx */

import { jsx, css } from '@emotion/core';

// @ts-ignore
import * as logo from 'components/atoms/Logo/logo.svg';

interface Props {
  readonly height?: string;
}

export default ({ height = '50px' }: Props) => (
  <img
    css={css`
      height: ${height};
      object-fit: contain;
    `}
    src={logo}
    alt="logo"
  />
);

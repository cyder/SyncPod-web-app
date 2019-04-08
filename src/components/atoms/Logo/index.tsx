/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  path: string;
  alt: string;
}

export default ({ path, alt }: Props) => (
  <img
    src={path}
    alt={alt}
    css={css`
      width: auto;
      height: 50px;
      margin-left: -16px;
      margin-right: auto;
    `}
  />
);

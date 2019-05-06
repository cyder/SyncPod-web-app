/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

export type BaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default (props: BaseButtonProps) => (
  <button
    css={css`
      display: block;
      appearance: none;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 0;
      color: inherit;
      font-family: inherit;
      cursor: pointer;
      text-align: left;
    `}
    type="button"
    {...props}
  />
);

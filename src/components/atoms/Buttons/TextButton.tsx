/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import BaseButton, {
  BaseButtonProps,
} from 'components/atoms/Buttons/BaseButton';

export type TextButtonProps = BaseButtonProps;

export default (props: TextButtonProps) => (
  <BaseButton
    {...props}
    css={css`
      text-align: center;
      :hover {
        opacity: 0.6;
      }
    `}
  />
);

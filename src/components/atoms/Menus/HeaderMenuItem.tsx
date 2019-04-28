/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import TextButton, {
  TextButtonProps,
} from 'components/atoms/Buttons/TextButton';

export default (props: TextButtonProps) => (
  <TextButton
    {...props}
    css={css`
      font-size: 1.2rem;
      padding: 0.2rem 1rem;
    `}
  />
);

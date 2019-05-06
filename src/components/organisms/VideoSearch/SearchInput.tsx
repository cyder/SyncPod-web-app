/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import TextInput from 'components/atoms/Forms/TextInput';
interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <TextInput
    css={css`
      max-width: 50rem;
    `}
    className={className}
    placeholder="キーワードを入力"
  />
);

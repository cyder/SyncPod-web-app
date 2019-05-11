/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import BaseButton, {
  BaseButtonProps,
} from 'components/atoms/Buttons/BaseButton';

import { color } from 'constants/styles';

interface Props extends BaseButtonProps {
  backgroundColor?: string;
}

export default (props: Props) => {
  const { backgroundColor } = props;

  return (
    <BaseButton
      css={css`
        background-color: ${backgroundColor || color.PRIMALY};
        border-radius: 1000px;
        font-size: 1.4rem;
        padding: 0.8rem 3rem;
        text-align: center;
      `}
      {...props}
    />
  );
};

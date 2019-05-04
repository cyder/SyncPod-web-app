/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import TextInput from 'components/atoms/Forms/TextInput';
import BaseButton from 'components/atoms/Buttons/BaseButton';
import InlineSvgIcon from 'components/atoms/Icons/InlineSvgIcon';

import { color } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    className={className}
    css={css`
      position: relative;
    `}
  >
    <TextInput placeholder="コメントを入力" />
    <BaseButton
      css={css`
        position: absolute;
        right: 1.2rem;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 1.6rem;
        color: ${color.GRAY_MEDIUM};
        :hover,
        :focus {
          color: ${color.PRIMALY_DARK};
        }
      `}
    >
      <InlineSvgIcon
        icon="submit"
        css={css`
          height: 100%;
        `}
      />
    </BaseButton>
  </div>
);

/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import BaseButton from '@/components/atoms/Buttons/BaseButton';
import { color } from '@/constants/styles';

interface Props {
  title: string;
  isSelected?: boolean;
  onClick?(): void;
}

export default ({ title, isSelected, onClick }: Props) => (
  <BaseButton
    css={css`
      flex: 1;
      text-align: center;
      padding: 0.6rem;
      border-top: 2px solid ${color.PRIMALY};
      border-left: 2px solid ${color.PRIMALY};
      border-right: 2px solid ${color.PRIMALY};
      border-radius: 1rem 1rem 0 0;
      font-size: 1.2rem;
      ${!isSelected &&
        `background: ${color.PRIMALY};
        color: ${color.WHITE};`}
    `}
    onClick={onClick}
  >
    {title}
  </BaseButton>
);

/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import BaseButton from '@/components/atoms/Buttons/BaseButton';
import InlineSvgIcon from '@/components/atoms/Icons/InlineSvgIcon';
import { color } from '@/constants/styles';

interface Props {
  direction: 'left' | 'right';
  visible: boolean;
  onClick?(): void;
}

export default ({ direction, visible, onClick }: Props) => (
  <BaseButton
    css={css`
      background-color: ${color.WHITE};
      box-shadow: 0 2px 5px ${color.TRANSPARENT_GRAY_LIGHT};
      border-radius: 1000px;
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2.6rem;
      height: 2.6rem;
      display: ${visible ? 'block' : 'none'};
      ${direction === 'left'
        ? css`
            left: -1.2rem;
          `
        : css`
            right: -1.2rem;
          `}
    `}
    onClick={onClick}
  >
    <InlineSvgIcon
      css={css`
        padding: 24%;
        width: 100%;
        height: 100%;
        :hover {
          color: ${color.PRIMALY_DARK};
        }
        left: -1rem;
        ${direction === 'left' &&
          css`
            transform: rotate(180deg);
          `}
      `}
      icon="arrow"
    />
  </BaseButton>
);

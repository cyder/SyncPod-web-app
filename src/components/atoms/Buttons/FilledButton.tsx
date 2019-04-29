/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import BaseButton from 'components/atoms/Buttons/BaseButton';

import { color } from 'constants/styles';

interface Props {
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({ backgroundColor, children, className, onClick }: Props) => (
  <BaseButton
    css={css`
      background-color: ${backgroundColor || color.PRIMALY};
      border-radius: 1000px;
      font-size: 1.4rem;
      padding: 0.8rem 3rem;
    `}
    className={className}
    onClick={onClick}
  >
    {children}
  </BaseButton>
);

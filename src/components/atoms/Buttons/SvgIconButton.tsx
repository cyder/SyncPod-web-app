/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import SvgIcon, { Icon } from 'components/atoms/Icons/SvgIcon';
import BaseButton from 'components/atoms/Buttons/TextButton';

interface Props {
  icon: Icon;
  alt?: string;
  fontSize: string;
  children?: React.ReactNode;
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({
  icon,
  alt,
  fontSize,
  children,
  className,
  onClick,
}: Props) => (
  <BaseButton
    css={css`
      display: flex;
      align-items: center;
      :hover {
        opacity: 0.6;
      }
    `}
    className={className}
    onClick={onClick}
  >
    <SvgIcon
      css={css`
        height: ${fontSize};
        ${children && 'margin-right: 0.3rem'}
      `}
      icon={icon}
      alt={alt}
    />
    {children && (
      <div
        css={css`
          line-height: ${fontSize};
          font-size: ${fontSize};
        `}
      >
        {children}
      </div>
    )}
  </BaseButton>
);

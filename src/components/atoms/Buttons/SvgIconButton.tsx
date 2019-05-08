/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import SvgIcon, { Icon } from 'components/atoms/Icons/SvgIcon';
import BaseButton from 'components/atoms/Buttons/TextButton';

interface Props {
  icon: Icon;
  alt?: string;
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({ icon, alt, className, onClick }: Props) => (
  <BaseButton
    css={css`
      :hover {
        opacity: 0.6;
      }
    `}
    className={className}
    onClick={onClick}
  >
    <SvgIcon icon={icon} alt={alt} />
  </BaseButton>
);

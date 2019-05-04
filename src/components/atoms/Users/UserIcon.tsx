/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import LazyLoadImage from 'components/atoms/Images/LazyLoadImage';
import DefaultImage from 'components/atoms/Images/DefaultImage';

import { color } from 'constants/styles';

export interface User {
  id: string;
  icon?: string;
  name: string;
}

interface Props extends User {
  className?: string;
  size?: string;
}

export default ({ name, icon, size, className }: Props) => (
  <div
    css={css`
      width: ${size || '5rem'};
      height: ${size || '5rem'};
      border-radius: 1000px;
      overflow: hidden;
      background: ${color.GRAY_LIGHT};
    `}
    className={className}
  >
    {icon ? (
      <LazyLoadImage src={icon} alt={name} draggable={false} />
    ) : (
      <DefaultImage iconSize="50%" />
    )}
  </div>
);

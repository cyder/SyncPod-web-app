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
  visibleName?: boolean;
  className?: string;
}

export default ({ name, icon, visibleName, className }: Props) => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
    className={className}
  >
    <div
      css={css`
        width: 5rem;
        height: 5rem;
        border-radius: 2.5rem;
        overflow: hidden;
        background: ${color.GRAY_LIGHT};
      `}
    >
      {icon ? (
        <LazyLoadImage src={icon} alt={name} draggable={false} />
      ) : (
        <DefaultImage iconSize="50%" />
      )}
    </div>
    {visibleName && (
      <div
        css={css`
          font-size: 1.2rem;
          margin-left: 1rem;
        `}
      >
        {name}
      </div>
    )}
  </div>
);

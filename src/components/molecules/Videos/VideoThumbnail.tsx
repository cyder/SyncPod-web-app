/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import LazyLoadImage from 'components/atoms/Images/LazyLoadImage';
import AspectRatio from 'components/atoms/Layouts/AspectRatio';
import Card from 'components/atoms/Cards/Card';
import DefaultImage from 'components/atoms/Images/DefaultImage';

import { color } from 'constants/styles';

interface Props {
  title?: string;
  thumbnailUrl?: string;
  className?: string;
}

export default ({ className, title, thumbnailUrl }: Props) => (
  <AspectRatio width={16} height={9} className={className}>
    <Card
      css={css`
        background-color: ${color.GRAY_LIGHT};
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {thumbnailUrl ? (
          <LazyLoadImage
            css={css`
              object-fit: cover;
              width: 100%;
              height: 100%;
            `}
            src={thumbnailUrl}
            alt={title}
          />
        ) : (
          <DefaultImage iconSize="25%" />
        )}
      </div>
    </Card>
  </AspectRatio>
);

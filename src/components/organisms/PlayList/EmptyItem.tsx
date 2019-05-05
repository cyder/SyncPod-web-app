/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import AspectRatio from 'components/atoms/Layouts/AspectRatio';
import Card from 'components/atoms/Cards/Card';
import DefaultImage from 'components/atoms/Images/DefaultImage';

import { color } from 'constants/styles';

export default () => (
  <div
    css={css`
      display: flex;
      padding: 0.5rem 0;
    `}
  >
    <AspectRatio
      css={css`
        width: 12rem;
        margin-right: 2rem;
      `}
      width={16}
      height={9}
    >
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
          <DefaultImage iconSize="25%" />
        </div>
      </Card>
    </AspectRatio>
    <div>
      <h3
        css={css`
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: ${color.GRAY_DARK};
        `}
      >
        動画がありません
      </h3>
    </div>
  </div>
);

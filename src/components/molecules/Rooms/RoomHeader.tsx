/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIconButton from 'components/molecules/Buttons/SvgIconButtonWithLabel';

import { color } from 'constants/styles';

export interface RoomHeaderData {
  name: string;
  roomKey: string;
}

interface Props extends RoomHeaderData {
  className?: string;
}

export default ({ name, roomKey, className }: Props) => (
  <div
    css={css`
      display: flex;
      align-items: baseline;
      padding: 1rem 0;
    `}
    className={className}
  >
    <h1
      css={css`
        font-size: 2rem;
        font-weight: bold;
      `}
    >
      {name}
    </h1>
    <p
      css={css`
        font-size: 1.4rem;
        color: ${color.GRAY_DARK};
        padding: 0 1rem;
      `}
    >
      {roomKey}
    </p>
    <div
      css={css`
        flex: 1;
      `}
    />
    <SvgIconButton icon="share" fontSize="1.2rem">
      共有
    </SvgIconButton>
  </div>
);

/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIcon from 'components/atoms/Icons/SvgIcon';
import HeaderMenu from 'components/molecules/Menus/HeaderMenu';

import { color } from 'constants/styles';

export default () => (
  <div
    css={css`
      position: sticky;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 5rem;
      background-color: ${color.PRIMALY_DARK};
      padding: 1rem 1rem;
      color: ${color.WHITE};
    `}
  >
    <SvgIcon
      css={css`
        padding: 0 0.5rem;
        height: 2.5rem;
      `}
      icon="logo"
      alt="SyncPod"
    />
    <HeaderMenu />
  </div>
);

/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIcon from 'components/atoms/Icons/SvgIcon';
import AppLinks from 'components/molecules/AppInfos/AppLinks';

import { color } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      border-top: 2px solid ${color.BLACK};
      border-bottom: 2px solid ${color.BLACK};
      display: flex;
      align-items: flex-end;
      padding: 0 5%;
    `}
    className={className}
  >
    <div
      css={css`
        flex: 1;
        padding: 4rem 0 3rem;
        margin-right: 1rem;
      `}
    >
      <SvgIcon
        css={css`
          display: block;
          height: 4rem;
          margin-bottom: 1.5rem;
        `}
        alt="SyncPod"
        icon="logoColor"
      />
      <AppLinks />
    </div>
    <SvgIcon
      css={css`
        margin-top: 2rem;
        height: 25rem;
      `}
      icon="spImage"
    />
  </div>
);

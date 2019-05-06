/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import AppLink from 'components/molecules/Links/AppLink';
import SvgIcon from 'components/atoms/Icons/SvgIcon';

interface Props {
  className?: string;
  justifyContent?: 'start' | 'center';
}

export default ({ className, justifyContent }: Props) => {
  const linkStyle = css`
    height: 100%;

    :not(:last-child) {
      margin-right: 1.5rem;
    }
  `;

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: ${justifyContent || 'start'};
      `}
      className={className}
    >
      <SvgIcon
        css={css`
          height: 8rem;
          margin-bottom: 3rem;
          margin-right: 3rem;
        `}
        icon="appInfo"
      />
      <div
        css={css`
          height: 5rem;
        `}
      >
        <AppLink css={linkStyle} app="ios" />
        <AppLink css={linkStyle} app="android" />
      </div>
    </div>
  );
};

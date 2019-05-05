/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import AppLink from 'components/molecules/Links/AppLink';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const linkStyle = css`
    height: 100%;

    :not(:last-child) {
      margin-right: 1.5rem;
    }
  `;

  return (
    <div className={className}>
      <h2
        css={css`
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        `}
      >
        アプリでもっと気軽に視聴！
      </h2>
      <div
        css={css`
          margin-bottom: 3rem;
          font-size: 1.4rem;
          line-height: 2.5rem;
        `}
      >
        <p>アプリをダウンロードすればいつでもどこでもみんなと動画が見れる！</p>
        <p>{`下のリンクからダウンロード。`}</p>
      </div>
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

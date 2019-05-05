/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import FooterMenuItem from 'components/atoms/Menus/FooterMenuItem';

import { color } from 'constants/styles';
import ExternalLink from 'components/atoms/Links/ExternalLink';
import SvgIcon from 'components/atoms/Icons/SvgIcon';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      color: ${color.GRAY_DARK};
    `}
    className={className}
  >
    <FooterMenuItem
      css={css`
        margin-bottom: 2rem;
      `}
    >
      <ExternalLink href="https://cyder.jp">
        <SvgIcon
          icon="cyder"
          alt="Cyder"
          css={css`
            width: 10rem;
          `}
        />
      </ExternalLink>
    </FooterMenuItem>
    <FooterMenuItem>
      <ExternalLink href="https://cyder.jp/contact/">お問い合わせ</ExternalLink>
    </FooterMenuItem>
    <FooterMenuItem>
      <ExternalLink href="http://app.sync-pod.com/">アプリ情報</ExternalLink>
    </FooterMenuItem>
    <FooterMenuItem>
      <ExternalLink href="http://app.sync-pod.com/terms">利用規約</ExternalLink>
    </FooterMenuItem>
  </div>
);

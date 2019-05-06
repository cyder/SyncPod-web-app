/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import FooterMenuItem from 'components/atoms/Menus/FooterMenuItem';

import ExternalLink from 'components/atoms/Links/ExternalLink';
import SvgIcon from 'components/atoms/Icons/SvgIcon';

import { color } from 'constants/styles';
import links from 'constants/links';

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
      <ExternalLink href={links.CYDER}>
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
      <ExternalLink href={links.CONTACT}>お問い合わせ</ExternalLink>
    </FooterMenuItem>
    <FooterMenuItem>
      <ExternalLink href={links.APP_INFO}>アプリ情報</ExternalLink>
    </FooterMenuItem>
    <FooterMenuItem>
      <ExternalLink href={links.TERMS}>利用規約</ExternalLink>
    </FooterMenuItem>
  </div>
);

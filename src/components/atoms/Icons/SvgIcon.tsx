/** @jsx jsx */

import { jsx, css } from '@emotion/core';

export type Icon = 'logo' | 'close' | 'warning' | 'icon' | 'share';

const icons: Record<Icon, string> = {
  logo: '/svg/logo.svg',
  close: '/svg/close.svg',
  warning: '/svg/warning.svg',
  icon: '/svg/icon.svg',
  share: '/svg/share.svg',
};

interface Props {
  className?: string;
  icon: Icon;
  alt?: string;
}

export default ({ icon, className, alt }: Props) => (
  <img
    className={className}
    css={css`
      object-fit: contain;
    `}
    src={icons[icon]}
    alt={alt || 'アイコン'}
    draggable={false}
  />
);

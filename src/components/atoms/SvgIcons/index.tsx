/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface SvgIcons {
  [key: string]: string;
}

export const icons: SvgIcons = {
  logo: '/svg/logo.svg',
};

interface Props {
  className?: string;
  icon: string;
  alt?: string;
}

export default ({ icon, className, alt }: Props) => (
  <img
    className={className}
    css={css`
      object-fit: contain;
    `}
    src={icon}
    alt={alt || 'アイコン'}
  />
);

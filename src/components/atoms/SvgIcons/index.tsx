/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface SvgIcons {
  [key: string]: string;
}

export const icons: SvgIcons = {
  logo: "/logo.svg"
};

interface Props {
  height: string;
  icon: string;
}

export default ({icon, height} : Props ) => <img css={css` height: ${height}; object-fit: contain; `
} src={icon} />

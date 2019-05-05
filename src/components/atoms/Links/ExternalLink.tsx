/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export default ({ href, children, className }: Props) => (
  <a
    css={css`
      :hover {
        opacity: 0.6;
      }
    `}
    className={className}
    target="_blank"
    href={href}
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

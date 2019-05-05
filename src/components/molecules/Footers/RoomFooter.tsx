/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import AppLinks from 'components/molecules/AppInfos/AppLinks';

import { color } from 'constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    css={css`
      border-top: 1px solid ${color.BLACK};
      padding: 5rem 0;
      max-width: 110rem;
      margin: 0 auto;
    `}
    className={className}
  >
    <AppLinks justifyContent="center" />
  </div>
);

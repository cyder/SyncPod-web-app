/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { useMemo } from 'react';

import SubmitIcon from 'constants/svg/submit.svg';

export type Icon = 'submit';

interface Props {
  icon: Icon;
  className?: string;
}

export default ({ icon, className }: Props) => {
  const SelectedIcon = useMemo(() => {
    switch (icon) {
      case 'submit':
        return SubmitIcon;
      default:
        return null;
    }
  }, [icon]);
  return (
    SelectedIcon && (
      <SelectedIcon
        css={css`
          display: block;
          fill: currentColor;
        `}
        className={className}
      />
    )
  );
};

/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import ArrowIcon from '@/constants/svg/arrow.svg';
import SubmitIcon from '@/constants/svg/submit.svg';

export type Icon = 'submit' | 'arrow';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: Record<Icon, any> = {
  submit: SubmitIcon,
  arrow: ArrowIcon,
};

interface Props {
  icon: Icon;
  className?: string;
}

export default ({ icon, className }: Props) => {
  const SelectedIcon = icons[icon];
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

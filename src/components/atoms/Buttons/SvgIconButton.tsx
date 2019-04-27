import * as React from 'react';

import SvgIcon, { Icon } from 'components/atoms/Icons/SvgIcon';
import TextButton from 'components/atoms/Buttons/TextButton';

interface Props {
  icon: Icon;
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({ icon, className, onClick }: Props) => (
  <TextButton className={className} onClick={onClick}>
    <SvgIcon icon={icon} />
  </TextButton>
);

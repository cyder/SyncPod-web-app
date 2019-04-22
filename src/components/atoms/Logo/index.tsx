import * as React from 'react';

import SvgIcon, { icons } from 'components/atoms/SvgIcons';

interface Props {
  readonly height?: string;
}

export default ({ height = '32px' }: Props) => (
  <SvgIcon height={height} icon={icons.logo} />
);

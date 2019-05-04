/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIcon from 'components/atoms/Icons/SvgIcon';
import Center from 'components/atoms/Layouts/Center';

interface Props {
  iconSize: string;
}

export default ({ iconSize }: Props) => (
  <Center>
    <SvgIcon
      css={css`
        width: ${iconSize};
      `}
      icon="icon"
    />
  </Center>
);

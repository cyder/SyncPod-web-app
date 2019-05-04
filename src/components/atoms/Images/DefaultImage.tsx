/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIcon from 'components/atoms/Icons/SvgIcon';
import Center from 'components/atoms/Layouts/Center';

export default () => (
  <Center>
    <SvgIcon
      css={css`
        width: 50%;
      `}
      icon="icon"
    />
  </Center>
);

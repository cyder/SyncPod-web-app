import * as React from 'react';
import 'reset-css';

import Boxsize from 'components/providers/GlobalStyles/Boxsize';
import Body from 'components/providers/GlobalStyles/Body';
import Other from 'components/providers/GlobalStyles/Other';

export default () => (
  <>
    <Body />
    <Boxsize />
    <Other />
  </>
);

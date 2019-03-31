import * as React from 'react';
import styled from 'styled-components';

import { topRoute, roomRoute } from 'components/Router/config';

export default () => (
  <Wrapper>
    <topRoute.Link params>Top</topRoute.Link>
    <roomRoute.Link params={{ roomKey: 'test' }}>Room</roomRoute.Link>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

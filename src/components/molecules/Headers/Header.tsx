import * as React from 'react';
import styled from 'styled-components';

import InternalLink from 'components/atoms/Links/InternalLink';

import { topRoute, roomRoute } from 'components/Router/config';

export default () => (
  <Wrapper>
    <InternalLink to={topRoute.toPath({})}>Top</InternalLink>
    <InternalLink to={roomRoute.toPath({ roomKey: 'test' })}>Room</InternalLink>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

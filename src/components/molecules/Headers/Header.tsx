import * as React from 'react';
import styled from 'styled-components';

import InternalLink from 'components/atoms/Links/InternalLink';

import { topRoute, roomRoute } from 'components/Router/routes';

export default () => (
  <Wrapper>
    <InternalLink to={topRoute.navigate(undefined)}>Top</InternalLink>
    <InternalLink to={roomRoute.navigate({ roomKey: 'test' })}>Room</InternalLink>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

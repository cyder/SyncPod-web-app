import * as React from 'react';
import styled from 'styled-components';

import InternalLink from 'components/atoms/Links/InternalLink';

import { topRoute, roomRoute } from 'components/Router/routes';

export default () => (
  <Wrapper>
    <InternalLink to={topRoute.generatePath(undefined)}>Top</InternalLink>
    <InternalLink to={roomRoute.generatePath({ roomKey: 'test' })}>
      Room
    </InternalLink>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

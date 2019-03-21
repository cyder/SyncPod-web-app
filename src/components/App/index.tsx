import * as React from 'react';

import ApolloProvider from 'components/providers/Apollo';
import Sample from 'components/App/Sample';

export default () => (
  <ApolloProvider>
    <Sample />
  </ApolloProvider>
);

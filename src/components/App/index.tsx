import * as React from 'react';

import ApolloProvider from 'components/providers/Apollo';
import HistoryProvider from 'components/providers/BrowserHistory';
import Router from 'components/Router';

export default () => (
  <ApolloProvider>
    <HistoryProvider>
      <Router />
    </HistoryProvider>
  </ApolloProvider>
);

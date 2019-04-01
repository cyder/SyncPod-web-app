import * as React from 'react';

import ApolloProvider from 'components/providers/Apollo';
import HistoryProvider from 'components/providers/BrowserHistory';
import GlobalStyles from 'components/providers/GlobalStyles';
import Router from 'components/Router';
import Header from 'components/molecules/Headers/Header';

import 'reset-css';

export default () => (
  <ApolloProvider>
    <HistoryProvider>
      <GlobalStyles />
      <Header />
      <Router />
    </HistoryProvider>
  </ApolloProvider>
);

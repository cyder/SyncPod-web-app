import * as React from 'react';

import Router from '@/components/Router';
import Header from '@/components/molecules/Headers/Header';
import Popup from '@/components/organisms/Popup';
import ApolloProvider from '@/components/providers/Apollo';
import HistoryProvider from '@/components/providers/BrowserHistory';
import GlobalStyles from '@/components/providers/GlobalStyles';

export default () => (
  <ApolloProvider>
    <HistoryProvider>
      <GlobalStyles />
      <Header />
      <Router />
      <Popup />
    </HistoryProvider>
  </ApolloProvider>
);

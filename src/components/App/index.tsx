import * as React from 'react';

import ApolloProvider from 'components/providers/Apollo';
import HistoryProvider from 'components/providers/BrowserHistory';
import ContextProvider from 'components/providers/Context';
import GlobalStyles from 'components/providers/GlobalStyles';
import Router from 'components/Router';
import Header from 'components/molecules/Headers/Header';
import Popup from 'components/organisms/Popup';

export default () => (
  <ApolloProvider>
    <HistoryProvider>
      <ContextProvider>
        <GlobalStyles />
        <Header />
        <Router />
        <Popup />
      </ContextProvider>
    </HistoryProvider>
  </ApolloProvider>
);

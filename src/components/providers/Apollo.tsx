import * as React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import config from 'config';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props): JSX.Element => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: config.GRAPHQL_API,
  });
  const client = new ApolloClient({
    link,
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

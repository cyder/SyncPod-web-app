import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';

const query = gql`
  query CurrentPopup {
    currentPopup @client
  }
`;

export default {
  showLoginPopup: (_: {}, __: {}, { cache }: { cache: InMemoryCache }) => {
    const key = 'LOGIN';
    const data = { currentPopup: key };
    cache.writeQuery({ query, data });
    return key;
  },
  showSignupPopup: (_: {}, __: {}, { cache }: { cache: InMemoryCache }) => {
    const key = 'SIGNUP';
    const data = { currentPopup: key };
    cache.writeQuery({ query, data });
    return key;
  },
  clearPopup: (_: {}, __: {}, { cache }: { cache: InMemoryCache }) => {
    const key = null;
    const data = { currentPopup: null };
    cache.writeQuery({ query, data });
    return key;
  },
};

import gql from 'graphql-tag';

export default gql`
  query OwnUser {
    ownUser @client {
      name
      email
      accessToken
      selfIntroduction
      icon
    }
  }
`;

export const logoutMutation = gql`
  mutation Logout {
    logout @client
  }
`;

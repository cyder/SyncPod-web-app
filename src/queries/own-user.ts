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

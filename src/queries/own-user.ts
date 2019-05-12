import gql from 'graphql-tag';

export default gql`
  query OwnUser {
    ownUser @client {
      id
      name
      email
      accessToken
      selfIntroduction
      icon
    }
  }
`;

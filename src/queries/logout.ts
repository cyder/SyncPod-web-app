import gql from 'graphql-tag';

export default gql`
  mutation Logout {
    logout @client {
      name
      email
      accessToken
      selfIntroduction
      icon
    }
  }
`;

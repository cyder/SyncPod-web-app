import gql from 'graphql-tag';

export default gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      accessToken
      selfIntroduction
      icon
    }
  }
`;

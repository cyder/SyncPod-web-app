import gql from 'graphql-tag';

export default gql`
  mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      id
      name
      email
      accessToken
      selfIntroduction
      icon
    }
  }
`;
